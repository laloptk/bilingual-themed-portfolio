import SemanticImage from './SemanticImage';
import Title from '../atoms/Title/Title';
import Text from '../atoms/Text';
import Triangle from '../atoms/Triangle';
import SafeHTMLContent from './SafeHTMLContent';

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
                  <a href={post?.url} target="_blank">
                    { btnText }
                  </a>
              }
            </div>
          </div>
    </div>
  );
};

export default Card;
