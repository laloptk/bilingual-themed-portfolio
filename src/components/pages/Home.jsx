import MainBox from '../boxes/MainBox'
import SectionBox from '../boxes/SectionBox'
import Grid from '../organisms/Grid'
import Header from '../organisms/Header'
import TimeLine from '../organisms/TimeLine'
import Skills from '../organisms/Skills'
import Footer from '../organisms/Footer'
import useGlobalState from "../../utils/hooks/useGlobalState";
import data from '../../assets/data.json'

const Home = () => {
    const { globalVariable } = useGlobalState();
    const languageData = globalVariable.english ? data.en : data.es;
    return (
        <>
            <Header title={languageData.title} subtitle={languageData.subtitle} text={languageData.description} />
            <MainBox classes={globalVariable.light ? "portfolio light" : "portfolio dark"}>
                <SectionBox 
                    title={languageData.projects.sectionTitle} 
                    blurb=""
                    classes="section projects with-line-after"
                >
                    <Grid posts={languageData.projects.content} />
                </SectionBox>
                <SectionBox
                    title={languageData.jobs.sectionTitle}
                    blurb=""
                    classes="section experience with-line-after"
                >
                    <TimeLine jobs={languageData.jobs.content} />
                </SectionBox>
                <SectionBox
                    title={globalVariable.english ? "Skills" : "Habilidades"}
                    blurb=""
                    classes="section skills with-line-after">
                    <Skills skills={data.skills.content} />
                </SectionBox>
            </MainBox>
            <Footer social={data.social.content} />
        </>
    )
}

export default Home;
