import Title from '../atoms/Title/Title';
import useGlobalState from '../../utils/hooks/useGlobalState';
import SafeHTMLContent from '../molecules/SafeHTMLContent';

const Hero = ({ title, subtitle, text }) => {
  const { globalVariable } = useGlobalState();
  const colorMode = globalVariable.light ? 'light' : 'dark';

  return (
    <header className={`header ${colorMode}`}>
      <Title title={title} classes={'header-title gradient-title'} />
      <Title
        title={subtitle}
        level="2"
        classes={'header-subtitle gradient-title'}
      />
      <SafeHTMLContent content={text} classes="header-blurb" />
    </header>
  );
};

export default Hero;
