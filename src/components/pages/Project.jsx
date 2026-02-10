import { useParams } from 'react-router-dom';
import projectsData from '../../assets/projects.json';
import MainBox from '../boxes/MainBox.jsx';
import SectionBox from '../boxes/SectionBox.jsx';
import SemanticImage from '../molecules/SemanticImage.jsx';
import Title from '../atoms/Title/Title.jsx';
import LinksList from '../molecules/LinksList.jsx';
import List from '../molecules/List.jsx';
import SafeHTMLContent from '../molecules/SafeHTMLContent.jsx';
import useGlobalState from '../../utils/hooks/useGlobalState';

const Project = () => {
    const { slug } = useParams();
    const { globalVariable } = useGlobalState();
    const projects = globalVariable.english ? projectsData.en : projectsData.es;
    const project = projects.projectsDetailed.find(p => p.slug === slug);
    
    if (!project) return <div>Project not found</div>;

    const { image, name, oneLiner, description, links, stack } = project;
    
    return (
        <MainBox classes="single-project">
            <div className="single-project--container">
                <article>
                    <header className="single-project--header">
                        <Title title={name} level={1} classes="single-project--title"/>
                        <Title title={oneLiner} level={2} classes="single-project--subtitle"/>
                    </header>
                    <SectionBox classes="section single-project--description">
                        <SafeHTMLContent content={description} />
                        <SemanticImage src={image.src} alt={image.alt ? image.alt : ''} />
                    </SectionBox>
                    <footer className="single-project--footer">
                        <div className="single-project--links">
                            <LinksList links={links} />
                        </div>
                        <div className="single-project--stack">
                            <List items={stack} />
                        </div>
                    </footer>
                </article>
            </div>
        </MainBox>
    )
}

export default Project;