import Title from "../atoms/Title/Title"
import Button from "../atoms/Button"
import useGlobalState from "../../utils/hooks/useGlobalState"
import SafeHTMLContent from "../molecules/SafeHTMLContent"

const Header = ({title, subtitle, text}) => {
    const { globalVariable, setGlobalVariable } = useGlobalState();
    const handleOnClick = (varName) => {
        setGlobalVariable({ ...globalVariable, [varName]: !globalVariable[varName] });
    }
    const colorMode = globalVariable.light ? "light" : "dark";
    
    return (
        <header className={`header ${colorMode}`}>
            <Title title={title} classes={"header-title gradient-title"} />
            <Title title={subtitle} level="2" classes={"header-subtitle gradient-title"} />
            <SafeHTMLContent content={text} classes="header-blurb" />
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