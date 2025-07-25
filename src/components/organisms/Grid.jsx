import Card from '../molecules/Card';

const Grid = ({ posts }) => {
  return (
    <div className="grid">
      {posts.map(post => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Grid;
