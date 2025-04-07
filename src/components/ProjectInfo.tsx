import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; 
import '../styles/ProjectInfo.css';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  infoContent: string;
}

interface ProjectInfoProps {
  projects: Project[];
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ projects }) => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="retro-container">
        <div className="project-info">
          <h1 className="retro-title">Project Not Found</h1>
          <Link to="/" className="retro-button">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="retro-container">
      <div className="project-info">
        <Link to="/" className="back-link">
          <span className="back-arrow">←</span> Back to Projects
        </Link>
        
        <div className="project-header">
          <h1 className="retro-title">{project.title}</h1>
          <div className="project-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button"
              >
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button"
              >
                Demo
              </a>
            )}
          </div>
        </div>

        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="markdown-content">
          <ReactMarkdown>{project.infoContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo; 