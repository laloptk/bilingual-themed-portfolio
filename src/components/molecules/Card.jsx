import SemanticImage from "./SemanticImage";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

const Card = ({ post, type="default" }) => {
  return (
    <div className={`card card-${type}`}>
        {post.image && post.image.src && (
            <SemanticImage src={post.image.src} alt={post.image.alt} caption={post.image.caption} />
        )}
        <div className="card-content">
            <Title title={post.title} level="3" />
            <Text>
                {post.description}
            </Text>
        </div>
    </div>
  );
};

export default Card;
