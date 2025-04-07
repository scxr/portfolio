import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
}) => {
  return (
    <div className="retro-card">
      <h3 className="retro-title" style={{ fontSize: '1.5rem' }}>{title}</h3>
      <p style={{ marginBottom: '1rem' }}>{description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        {technologies.map((tech, index) => (
          <span
            key={index}
            style={{
              backgroundColor: 'var(--retro-secondary)',
              color: 'var(--retro-bg)',
              padding: '0.3rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.8rem',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="retro-button"
          >
            GitHub
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="retro-button"
          >
            Demo
          </a>
        )}
        <Link to={`/project/${id}`} className="retro-button">
          Info
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard; 