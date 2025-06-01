const Title = ({ title, level = '1' }) => {
    const Heading = `h${level}`;
    return (
        <Heading>{title}</Heading>
    );
};

export default Title;