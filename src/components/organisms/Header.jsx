import Title from "../atoms/Title/Title"
import Text from "../atoms/Text"
import Button from "../atoms/Button"
import useGlobalState from "../../utils/hooks/useGlobalState"
import SafeHTMLContent from "../molecules/SafeHTMLContent"

const Header = ({title, subtitle, text}) => {
    const { globalVariable, setGlobalVariable } = useGlobalState();
    const handleOnClick = (varName) => {
        setGlobalVariable({ ...globalVariable, [varName]: !globalVariable[varName] });
    }
    return (
        <header className="header">
            <Title title={title} />
            <Title title={subtitle} level="2" />
            <SafeHTMLContent content={text} />
            <div className="header-buttons">
                <div className="header-button">
                    <Button onClick={() => handleOnClick('english')}>
                        {globalVariable.english ? 'Español' : 'English'}
                    </Button>
                </div>
                <div className="header-button">
                    <Button onClick={() => handleOnClick('light')}>
                        {globalVariable.light ? 'Dark Mode' : 'Light Mode'}
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header