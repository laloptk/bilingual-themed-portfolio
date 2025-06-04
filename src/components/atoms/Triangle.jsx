const Triangle = ({ children, sides = [] }) => {
  return (
    <>
      {children}
      {sides.map(side => {
        <div className={`triangle-${side}`}></div>;
      })}
    </>
  );
};

export default Triangle;
