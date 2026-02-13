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
    const isEnglish = globalVariable.english;
    const isLight = globalVariable.light;
    const projects = globalVariable.english ? projectsData.en : projectsData.es;
    const project = projects.projectsDetailed.find(p => p.slug === slug);
    
    if (!project) {
        return (
            <MainBox classes={isLight ? 'single-project light' : 'single-project dark'}>
                <div className="single-project--container">
                    <p>{isEnglish ? 'Project not found' : 'Proyecto no encontrado'}</p>
                </div>
            </MainBox>
        );
    }

    const { image, name, oneLiner, description, links, stack } = project;
    
    return (
        <MainBox classes={isLight ? 'single-project light' : 'single-project dark'}>
            <div className="single-project--container">
                <article>
                    <header className="single-project--header">
                        <Title title={name} level={1} classes="single-project--title"/>
                        <Title title={oneLiner} level={2} classes="single-project--subtitle"/>
                    </header>
                    <SectionBox classes="section single-project--description">
                        <SafeHTMLContent content={description} />
                        <div className="single-project--separator"></div>
                        <SemanticImage src={image.src} alt={image.alt ? image.alt : ''} />
                    </SectionBox>
                    <footer className="single-project--footer">
                        <div className="single-project--links">
                            <h3 className="single-project--meta-label">{isEnglish ? 'Links' : 'Enlaces'}</h3>
                            <LinksList links={links} />
                        </div>
                        <div className="single-project--stack">
                            <h3 className="single-project--meta-label">{isEnglish ? 'Stack' : 'Tecnologias'}</h3>
                            <List items={stack} />
                        </div>
                    </footer>
                </article>
            </div>
        </MainBox>
    )
}

export default Project;
