import IconList from '../molecules/IconList';

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <IconList icons={skills} />
    </div>
  );
};

export default Skills;
