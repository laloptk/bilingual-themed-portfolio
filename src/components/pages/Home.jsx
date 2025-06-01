import Grid from '../organisms/Grid'
import Header from '../organisms/Header'
import TimeLine from '../organisms/TimeLine'
import useGlobalState from "../../utils/hooks/useGlobalState";
import data from '../../assets/data.json'

const Home = () => {
    const { globalVariable } = useGlobalState();
    const languageData = globalVariable.english ? data.en : data.es;
    return (
        <>
            <Header title={languageData.title} text={languageData.description} />
            <Grid posts={languageData.projects} />
            <TimeLine jobs={languageData.jobs} />
        </>
    )
}

export default Home;
