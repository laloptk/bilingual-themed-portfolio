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
            <Grid posts={languageData.projects} />
            <TimeLine jobs={languageData.jobs} />
            <Skills skills={data.skills} />
            <Footer social={social} />
        </>
    )
}

export default Home;
