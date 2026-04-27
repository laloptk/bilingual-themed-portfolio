import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BLOCKS_PER_ROW = 33;
const NUM_ROWS = 4;

const SectionTransition = () => {
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

    const triggers = [];
    const blocksEl = container.querySelector('.st-blocks');
    if (!blocksEl) return;

    const rows = blocksEl.querySelectorAll('.st-row');
    const numRows = rows.length;

    rows.forEach((row, rowIndex) => {
      const blocks = Array.from(row.querySelectorAll('.st-block'));
      const randomizedOrder = gsap.utils.shuffle(blocks.map((_, idx) => idx));

      const trigger = ScrollTrigger.create({
        trigger: blocksEl,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: self => {
          const rowDelay = 0.3 * (numRows - rowIndex - 1);
          const progress = Math.max(0, Math.min(1, self.progress - rowDelay));
          blocks.forEach((block, idx) => {
            const offset = randomizedOrder.indexOf(idx) / blocks.length;
            const p = (progress - offset) * blocks.length;
            block.style.opacity = 1 - Math.min(1, Math.max(0, p));
          });
        },
      });

      triggers.push(trigger);
    });

    return () => triggers.forEach(t => t.kill());
  }, []);

  return (
    <div className="section-transition" ref={containerRef}>
      <div className="st-blocks">
        {Array.from({ length: NUM_ROWS }, (_, i) => (
          <div key={i} className="st-row" />
        ))}
      </div>
    </div>
  );
};

export default SectionTransition;
