import SafeHTMLContent from '../molecules/SafeHTMLContent';
import useGlobalState from '../../utils/hooks/useGlobalState';

const Hero = ({ title, subtitle, text }) => {
  const { globalVariable } = useGlobalState();
  const colorMode = globalVariable.light ? 'light' : 'dark';
  const isEnglish = globalVariable.english;

  const [firstName, ...rest] = title.split(' ');
  const lastName = rest.join(' ');

  return (
    <header className={`header ${colorMode}`}>
      <div className="header-inner">
        <div className="header-meta">
          <p className="header-eyebrow">{subtitle}</p>
          <span className="header-status">
            {isEnglish ? 'Available for work' : 'Disponible para proyectos'}
          </span>
        </div>

        <h1 className="header-name">
          <span>{firstName}</span>
          <span>{lastName}</span>
        </h1>

        <div className="header-bottom">
          <SafeHTMLContent content={text} classes="header-tagline" />
          <a href="#projects" className="header-cta">
            {isEnglish ? 'View Projects' : 'Ver Proyectos'}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
