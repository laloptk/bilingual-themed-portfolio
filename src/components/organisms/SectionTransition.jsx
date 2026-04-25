import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BLOCKS_PER_ROW = 33;
const NUM_ROWS = 4;

const SectionTransition = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.querySelectorAll('.st-row').forEach(row => {
      for (let i = 0; i < BLOCKS_PER_ROW; i++) {
        const block = document.createElement('div');
        block.className = 'st-block';
        row.appendChild(block);
      }
    });

    function updateBlocksOpacity(blocks, order, isTop, progress) {
      blocks.forEach((block, idx) => {
        const offset = order.indexOf(idx) / blocks.length;
        const adjustedProgress = (progress - offset) * blocks.length;
        const opacity = isTop
          ? 1 - Math.min(1, Math.max(0, adjustedProgress))
          : Math.min(1, Math.max(0, adjustedProgress));
        block.style.opacity = opacity;
      });
    }

    const triggers = [];

    // Each block container triggers off its own position in the page —
    // top blocks animate as the section enters, bottom blocks as it exits.
    container.querySelectorAll('.st-blocks').forEach(blocksContainer => {
      const rows = blocksContainer.querySelectorAll('.st-row');
      const numRows = rows.length;
      const isTop = blocksContainer.classList.contains('top');

      rows.forEach((row, rowIndex) => {
        const blocks = Array.from(row.querySelectorAll('.st-block'));
        const randomizedOrder = gsap.utils.shuffle(blocks.map((_, idx) => idx));

        const trigger = ScrollTrigger.create({
          trigger: blocksContainer,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const rowDelay = 0.3 * (numRows - rowIndex - 1);
            const adjustedProgress = Math.max(0, Math.min(1, self.progress - rowDelay));
            updateBlocksOpacity(blocks, randomizedOrder, isTop, adjustedProgress);
          },
        });

        triggers.push(trigger);
      });
    });

    return () => triggers.forEach(t => t.kill());
  }, []);

  return (
    <div className="section-transition" ref={containerRef}>
      <div className="st-blocks top">
        {Array.from({ length: NUM_ROWS }, (_, i) => (
          <div key={i} className="st-row" />
        ))}
      </div>

      {children}

      <div className="st-blocks bottom">
        {Array.from({ length: NUM_ROWS }, (_, i) => (
          <div key={i} className="st-row" />
        ))}
      </div>
    </div>
  );
};

export default SectionTransition;
