import SemanticImage from "../molecules/SemanticImage";
import LinksList from "../molecules/LinksList";
import headerData from "../../assets/header.json";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="portfolio-header">
            <div class="portfolio-header--container">
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
                </nav>
            </div>
        </header>
    )
    
}

export default Header;