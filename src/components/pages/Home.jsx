import Grid from '../organisms/Grid'
import Header from '../organisms/Header'
import TimeLine from '../organisms/TimeLine'
import data from '../../assets/data.json'

const Home = () => {
    return (
        <>
            <Header title={data.title} text={data.description} />
            <Grid posts={data.projects} />
            <TimeLine jobs={data.jobs} />
        </>
    )
}

export default Home;
