import Title from "../atoms/Title"
import Text from "../atoms/Text"
import useGlobalState from "../../utils/hooks/useGlobalState";


const Header = ({title, text}) => {
    const { globalVariable, setGlobalVariable } = useGlobalState();
    const handleOnClick = (varName) => {
        setGlobalVariable({ ...globalVariable, [varName]: !globalVariable[varName] });
    }
    return (
        <header className="header">
            <Title title={title} />
            <Text>{text}</Text>
            <button onClick={() => handleOnClick('english')}>
                {globalVariable.english ? 'Español' : 'English'}
            </button>
            <button onClick={() => handleOnClick('light')}>
                {globalVariable.light ? 'Dark Mode' : 'Light Mode'}
            </button>
        </header>
    )
}

export default Header