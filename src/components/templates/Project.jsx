import MainBox from '../boxes/MainBox.jsx';
import SectionBox from '../boxes/SectionBox.jsx';
import SemanticImage from '../molecules/SemanticImage.jsx';
import Title from '../atoms/Title/Title.jsx';

const Project = ({img, name, oneLiner, description, links, stack }) => {
    return (
        <MainBox classes="single-project">
            <article>
                <header>
                    <Title title={name} level={1} classes="single-project-title"/>
                    <Title title={oneLiner} level={2} classes="single-project-subtitle"/>
                </header>
                <SectionBox classes="section single-project--thumb">
                    <SemanticImage img={img.src} alt={img.alt ? img.alt : ''} />
                </SectionBox>
                <SectionBox classes="section single-project--description">
                    {description}
                </SectionBox>
                <footer>
                    <div className="single-project--links">

                    </div>
                    <LinksList links={links} />
                    <List items={stack} />
                </footer>
            </article>
        </MainBox>
    )
}

export default Project;