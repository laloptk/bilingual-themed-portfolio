const Skills = ({ skills }) => {
  const categories = skills?.categories || [];

  return (
    <div className="skills-grid">
      {categories.map(cat => (
        <div key={cat.id} className="skills-category">
          <span className="skills-category-label">{cat.label}</span>
          <ul className="skills-list">
            {cat.items.map(item => (
              <li key={item} className="skills-tag">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
