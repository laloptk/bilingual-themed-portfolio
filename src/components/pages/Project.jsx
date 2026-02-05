import { useParams } from 'react-router-dom';
import projectsData from '../../assets/projects.json';
import MainBox from '../boxes/MainBox.jsx';
import SectionBox from '../boxes/SectionBox.jsx';
import SemanticImage from '../molecules/SemanticImage.jsx';
import Title from '../atoms/Title/Title.jsx';
import LinksList from '../molecules/LinksList.jsx';
import List from '../molecules/List.jsx';

const Project = () => {
    const { slug } = useParams();
    const project = projectsData.en.projectsDetailed.find(p => p.slug === slug);

    console.log(project);
    
    if (!project) return <div>Project not found</div>;

    const { image, name, oneLiner, description, links, stack } = project;
    
    return (
        <MainBox classes="single-project">
            <article>
                <header>
                    <Title title={name} level={1} classes="single-project-title"/>
                    <Title title={oneLiner} level={2} classes="single-project-subtitle"/>
                </header>
                <SectionBox classes="section single-project--thumb">
                    <SemanticImage src={image.src} alt={image.alt ? image.alt : ''} />
                </SectionBox>
                <SectionBox classes="section single-project--description">
                    {description}
                </SectionBox>
                <footer>
                    <div className="single-project--links">
                        <LinksList links={links} />
                    </div>
                    
                    <List items={stack} />
                </footer>
            </article>
        </MainBox>
    )
}

export default Project;