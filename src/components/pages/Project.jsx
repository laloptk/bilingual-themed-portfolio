import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../../assets/projects.json';
import MainBox from '../boxes/MainBox.jsx';
import SafeHTMLContent from '../molecules/SafeHTMLContent.jsx';
import Footer from '../organisms/Footer.jsx';
import useGlobalState from '../../utils/hooks/useGlobalState';

const ProjectImageCell = ({ screenshot, name, label }) => {
  const [activeView, setActiveView] = useState('desktop');
  const hasDesktop = screenshot?.desktop !== null && screenshot?.desktop !== undefined;
  const hasMobile  = screenshot?.mobile  !== null && screenshot?.mobile  !== undefined;
  const hasToggle  = hasDesktop && hasMobile;
  const src = activeView === 'desktop' ? screenshot?.desktop : screenshot?.mobile;
  const isEmpty = !hasDesktop && !hasMobile;

  return (
    <div className="project-image-cell">
      <div className="image-cell-bar">
        <span className="image-cell-label">{label}</span>
        {hasToggle && (
          <div className="image-toggle">
            <button
              className={`toggle-pill${activeView === 'desktop' ? ' active' : ''}`}
              onClick={() => setActiveView('desktop')}
            >
              Desktop
            </button>
            <button
              className={`toggle-pill${activeView === 'mobile' ? ' active' : ''}`}
              onClick={() => setActiveView('mobile')}
            >
              Mobile
            </button>
          </div>
        )}
      </div>

      {isEmpty ? (
        <div className="image-placeholder">
          <span>Screenshot coming soon</span>
        </div>
      ) : (
        <div className="image-frame">
          {src && <img src={src} alt={`${name} ${activeView} screenshot`} />}
        </div>
      )}
    </div>
  );
};

const ProjectBlock = ({ label, content }) => {
  if (!content) return null;
  return (
    <div className="project-block">
      <h2 className="project-block-label">{label}</h2>
      <SafeHTMLContent content={content} />
    </div>
  );
};

const Project = () => {
  const { slug } = useParams();
  const { globalVariable } = useGlobalState();
  const isEnglish = globalVariable.english;
  const isLight = globalVariable.light;
  const projects = isEnglish ? projectsData.en : projectsData.es;
  const project = projects.projectsDetailed.find(p => p.slug === slug);

  if (!project) {
    return (
      <MainBox classes={isLight ? 'portfolio light' : 'portfolio dark'}>
        <div className="project-not-found">
          <p>{isEnglish ? 'Project not found.' : 'Proyecto no encontrado.'}</p>
          <Link to="/">{isEnglish ? '← Back to home' : '← Volver al inicio'}</Link>
        </div>
      </MainBox>
    );
  }

  const {
    name, oneLiner, year, type, tags,
    links, screenshots, context, role,
    approach, challenges, techStack, outcomes,
  } = project;

  const shot1 = screenshots[0] ?? { desktop: null, mobile: null };
  const shot2 = screenshots[1] ?? { desktop: null, mobile: null };

  const l = {
    context:    isEnglish ? 'Context'    : 'Contexto',
    role:       isEnglish ? 'Role'       : 'Rol',
    approach:   isEnglish ? 'Approach'   : 'Enfoque',
    challenges: isEnglish ? 'Challenges' : 'Desafíos',
    techStack:  isEnglish ? 'Tech Stack' : 'Tecnologías',
    outcomes:   isEnglish ? 'Outcomes'   : 'Resultados',
    back:       isEnglish ? '← Back'     : '← Volver',
    image1:     isEnglish ? 'Homepage'   : 'Inicio',
    image2:     isEnglish ? 'Interior'   : 'Interior',
  };

  return (
    <MainBox classes={isLight ? 'portfolio light' : 'portfolio dark'}>
      <div className="project-page">

        <nav className="project-nav">
          <Link to="/" className="project-back">{l.back}</Link>
          <span className="project-nav-meta">{year} — {type}</span>
        </nav>

        <div className="project-grid">

          {/* Row 1, Col 1 — primary image */}
          <div className="project-cell project-cell--image-1">
            <ProjectImageCell screenshot={shot1} name={name} label={l.image1} />
          </div>

          {/* Row 1, Col 2 — intro: name, tags, links, context, role */}
          <div className="project-cell project-cell--narrative-1">
            <div className="project-cell-inner">
              <header className="project-header">
                <h1 className="project-name">{name}</h1>
                <p className="project-one-liner">{oneLiner}</p>
                {tags.length > 0 && (
                  <div className="project-tags">
                    {tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                )}
                {links.length > 0 && (
                  <div className="project-links">
                    {links.map(link => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-link project-link--${link.type}`}
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </header>
              <div className="project-blocks">
                <ProjectBlock label={l.context} content={context} />
                <ProjectBlock label={l.role}    content={role} />
              </div>
            </div>
          </div>

          {/* Row 2, Col 1 — details: approach, challenges, tech stack, outcomes */}
          <div className="project-cell project-cell--narrative-2">
            <div className="project-cell-inner">
              <div className="project-blocks">
                <ProjectBlock label={l.approach}   content={approach} />
                <ProjectBlock label={l.challenges} content={challenges} />
                {techStack.length > 0 && (
                  <div className="project-block">
                    <h2 className="project-block-label">{l.techStack}</h2>
                    <dl className="project-tech-stack">
                      {techStack.map(item => (
                        <div key={item.name} className="tech-row">
                          <dt className="tech-name">{item.name}</dt>
                          <dd className="tech-note">{item.note}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
                <ProjectBlock label={l.outcomes} content={outcomes} />
              </div>
            </div>
          </div>

          {/* Row 2, Col 2 — secondary image */}
          <div className="project-cell project-cell--image-2">
            <ProjectImageCell screenshot={shot2} name={name} label={l.image2} />
          </div>

        </div>
      </div>
      <Footer classes={isLight ? 'light' : ''} />
    </MainBox>
  );
};

export default Project;
