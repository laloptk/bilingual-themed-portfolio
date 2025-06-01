import Title from "../atoms/Title"
import Text from "../atoms/Text"

const Header = ({title, text}) => {
    return (
        <header className="header">
            <Title title={title} />
            <Text>{text}</Text>
        </header>
    )
}

export default Header