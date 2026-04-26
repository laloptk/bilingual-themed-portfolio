import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Title from '../atoms/Title/Title';
import SafeHTMLContent from './SafeHTMLContent';
import { Link } from 'react-router-dom';

const ImageModal = ({ src, alt, caption, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      className="img-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${alt}`}
    >
      <button
        ref={closeRef}
        className="img-modal-close"
        onClick={onClose}
        aria-label="Close image"
      >
        ✕
      </button>
      <figure className="img-modal-figure" onClick={e => e.stopPropagation()}>
        <img src={src} alt={alt} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>,
    document.body
  );
};

const Card = ({ post, type = 'default', btnText = 'View Project' }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const hasImage = post.image?.src;

  return (
    <>
      <div className={`card card-${type}`}>
        {hasImage && (
          <figure
            className="card-image-trigger"
            onClick={() => setModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setModalOpen(true); }}
            aria-label={`View full image: ${post.image.alt}`}
          >
            <img src={post.image.src} alt={post.image.alt} loading="lazy" />
            <span className="card-expand-hint" aria-hidden="true" />
          </figure>
        )}
        <div className="card-content">
          <Title title={post.title} level="3" />
          <div className="text">
            <SafeHTMLContent content={post.description} />
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="card-tags">
              {post.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
          {type === 'default' && post.url && (
            <Link to={post.url}>{btnText}</Link>
          )}
        </div>
      </div>

      {modalOpen && hasImage && (
        <ImageModal
          src={post.image.src}
          alt={post.image.alt}
          caption={post.image.caption}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default Card;
