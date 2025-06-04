const Title = ({ title, level = '1', classes='' }) => {
    const Heading = `h${level}`;
    return (
        <Heading className={classes} >{title}</Heading>
    );
};

export default Title;