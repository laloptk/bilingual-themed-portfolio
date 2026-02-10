import SemanticImage from './SemanticImage';
import Title from '../atoms/Title/Title';
import SafeHTMLContent from './SafeHTMLContent';
import { Link } from 'react-router-dom';

const Card = ({ post, type = 'default', btnText="Learn More"}) => {
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
            <div className="card-content text" >
              <SafeHTMLContent content={post.description} />
              { type === "default" && post.url &&
                  <Link to={post?.url} >
                    { btnText }
                  </Link>
              }
            </div>
          </div>
    </div>
  );
};

export default Card;
