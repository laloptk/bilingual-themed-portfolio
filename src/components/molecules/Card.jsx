import SemanticImage from './SemanticImage';
import Title from '../atoms/Title/Title';
import SafeHTMLContent from './SafeHTMLContent';
import { Link } from 'react-router-dom';

const Card = ({ post, type = 'default', btnText = 'View Project' }) => {
  return (
    <div className={`card card-${type}`}>
      {post.image && post.image.src && (
        <SemanticImage
          src={post?.image?.src}
          alt={post?.image?.alt}
          caption={post?.image?.caption}
        />
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
          <Link to={post?.url}>{btnText}</Link>
        )}
      </div>
    </div>
  );
};

export default Card;
