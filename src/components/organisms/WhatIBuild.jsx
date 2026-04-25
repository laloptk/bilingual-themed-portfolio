const WhatIBuild = ({ items }) => {
  return (
    <div className="wib">
      {items.map(item => (
        <article key={item.id} className="wib-row">
          <h3 className="wib-title">{item.title}</h3>
          <p className="wib-desc">{item.description}</p>
        </article>
      ))}
    </div>
  );
};

export default WhatIBuild;
