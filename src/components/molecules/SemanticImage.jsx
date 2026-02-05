const SemanticImage = ({ src = '', alt = '', caption, classes = '' }) => {
  return (
    <figure>
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        className={classes}
      />
      <figcaption>{caption ?? ''}</figcaption>
    </figure>
  );
};

export default SemanticImage;
