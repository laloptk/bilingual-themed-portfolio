import SemanticImage from "./SemanticImage";
import Title from "../atoms/Title/Title";
import Text from "../atoms/Text";
import Triangle from "../atoms/Triangle";

const Card = ({ post, type="default", triangles=[] }) => {
  return (
    <div className={`card card-${type}`}>
        {triangles ?
          (<Triangle sides={triangles} >
            {post.image && post.image.src && (
                <SemanticImage src={post.image.src} alt={post.image.alt} caption={post.image.caption} />
            )}
            <div className="card-content">
                <Title title={post.title} level="3" />
                <Text>
                    {post.description}
                </Text>
            </div>
          </Triangle>) 
          : (
            <>
              {post.image && post.image.src && (
                  <SemanticImage src={post.image.src} alt={post.image.alt} caption={post.image.caption} />
              )}
              <div className="card-content">
                  <Title title={post.title} level="3" />
                  <Text>
                      {post.description}
                  </Text>
              </div>
            </>
          )
        }
    </div>
  );
};

export default Card;
