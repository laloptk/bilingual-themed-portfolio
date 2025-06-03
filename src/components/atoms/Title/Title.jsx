const Title = ({ title, level = '1' }) => {
    const Heading = `h${level}`;
    return (
        <Heading className="gradient-title">{title}</Heading>
    );
};

export default Title;