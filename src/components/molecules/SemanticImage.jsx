const SemanticImage = ({ src = '', alt = '', caption }) => {
  return (
    <figure>
      <img src={src} alt={alt} loading="lazy"/>
      <figcaption>{caption ? caption : alt}</figcaption>
    </figure>
  );
};

export default SemanticImage;
