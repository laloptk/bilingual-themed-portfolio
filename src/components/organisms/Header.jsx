import Title from "../atoms/Title/Title"
import Text from "../atoms/Text"
import Button from "../atoms/Button"
import useGlobalState from "../../utils/hooks/useGlobalState";


const Header = ({title, subtitle, text}) => {
    const { globalVariable, setGlobalVariable } = useGlobalState();
    const handleOnClick = (varName) => {
        setGlobalVariable({ ...globalVariable, [varName]: !globalVariable[varName] });
    }
    return (
        <header className="header">
            <Title title={title} />
            <Title title={subtitle} level="2" />
            <Text classes="header-description">{text}</Text>
            <Button onClick={() => handleOnClick('english')}>
                {globalVariable.english ? 'Español' : 'English'}
            </Button>
            <Button onClick={() => handleOnClick('light')}>
                {globalVariable.light ? 'Dark Mode' : 'Light Mode'}
            </Button>
        </header>
    )
}

export default Header