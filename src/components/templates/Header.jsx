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
                <Link to="/" className="site-logo" aria-label="Eduardo Sanchez Hidalgo — Home">ESH</Link>
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
