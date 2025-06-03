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
    const social = data.social;
    return (
        <>
            <Header title={languageData.title} text={languageData.description} />
                <MainBox classes={globalVariable.light ? "portfolio light" : "portfolio dark"}>
                <SectionBox 
                    title="My Projects" 
                    blurb=""
                    classes="section projects"
                >
                    <Grid posts={languageData.projects} />
                </SectionBox>
                <SectionBox
                    title="My Experience"
                    blurb=""
                    classes="section experience"
                >
                    <TimeLine jobs={languageData.jobs} />
                </SectionBox>
                <SectionBox
                    title="Skills"
                    blurb=""
                    classes="section skills">
                    <Skills skills={data.skills} />
                </SectionBox>
                <Footer social={social} />
            </MainBox>
        </>
    )
}

export default Home;
