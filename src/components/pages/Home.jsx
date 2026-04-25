import MainBox from '../boxes/MainBox';
import SectionBox from '../boxes/SectionBox';
import Grid from '../organisms/Grid';
import Hero from '../organisms/Hero';
import TimeLine from '../organisms/TimeLine';
import Skills from '../organisms/Skills';
import Footer from '../organisms/Footer';
import WhatIBuild from '../organisms/WhatIBuild';
import useGlobalState from '../../utils/hooks/useGlobalState';
import data from '../../assets/data.json';
import Contact from '../organisms/Contact';

const Home = () => {
  const { globalVariable } = useGlobalState();
  const languageData = globalVariable.english ? data.en : data.es;
  const isEnglish = globalVariable.english;

  return (
    <>
      <MainBox
        classes={globalVariable.light ? 'portfolio light' : 'portfolio dark'}
      >
        <Hero
          title={languageData.title}
          subtitle={languageData.subtitle}
          text={languageData.description}
        />

        <SectionBox
          id="what-i-build"
          title={isEnglish ? 'Services' : 'Servicios'}
          classes="section side-title"
        >
          <WhatIBuild items={languageData.whatIBuild} />
        </SectionBox>

        <SectionBox
          id="projects"
          title={languageData.projects.sectionTitle}
          classes="section projects side-title"
        >
          <Grid posts={languageData.projects.content} />
        </SectionBox>

        <SectionBox
          id="experience"
          title={languageData.jobs.sectionTitle}
          classes="section experience with-line-after"
        >
          <TimeLine jobs={languageData.jobs.content} />
        </SectionBox>

        <SectionBox
          id="skills"
          title={isEnglish ? 'Skills' : 'Habilidades'}
          classes="section skills side-title"
        >
          <Skills skills={data.skills} />
        </SectionBox>

        <SectionBox
          id="contact"
          title={isEnglish ? "Let's Work Together" : 'Trabajemos Juntos'}
          classes="section contact-section with-line-after"
        >
          <Contact
            social={data.social.content}
            classes={globalVariable.light ? 'light' : 'dark'}
          />
        </SectionBox>
      </MainBox>
      <Footer classes={globalVariable.light ? 'light' : 'dark'} />
    </>
  );
};

export default Home;
