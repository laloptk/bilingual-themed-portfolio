import SemanticImage from "../molecules/SemanticImage";
import LinksList from "../molecules/LinksList";
import headerData from "../../assets/header.json";
import { Link } from 'react-router-dom';
import useGlobalState from '../../utils/hooks/useGlobalState';
import Button from '../atoms/Button';

const Header = () => {
    const { globalVariable, setGlobalVariable } = useGlobalState();
    const colorMode = globalVariable.light ? 'light' : 'dark';

    const handleToggle = (varName) => {
        setGlobalVariable({
            ...globalVariable,
            [varName]: !globalVariable[varName],
        });
    };

    return (
        <header className={`portfolio-header ${colorMode}`}>
            <div className="portfolio-header--container">
                <Link to="/">
                {
                    headerData?.logo?.src &&
                        <SemanticImage src={headerData.logo.src} alt={headerData?.logo?.alt ?? "Website logo"} classes="main-logo" />
                }
                </Link>
                <nav className="main-nav">
                    {
                        headerData?.menu &&
                            <LinksList links={headerData.menu} />
                    }
                    <div className="main-nav--actions">
                        <Button onClick={() => handleToggle('english')}>
                            {globalVariable.english ? 'Espanol' : 'English'}
                        </Button>
                        <Button onClick={() => handleToggle('light')}>
                            {globalVariable.light ? 'Dark' : 'Light'}
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
    
}

export default Header;
