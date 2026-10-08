import { ArrowUpRight, Eye } from "lucide-react";
import Image from "next/image";

export type ProjectCardData = {
  index: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  tone: "coral" | "violet" | "blue";
  category: "frontend" | "backend";
  image: string;
  githubUrl?: string;
  previewUrl?: string;
};

type ProjectCardProps = {
  project: ProjectCardData;
  total: number;
};

function ProjectPreview({ project }: { project: ProjectCardData }) {
  return (
    <div className="project-art">
      <Image
        className="project-image"
        src={project.image}
        alt={`${project.title} concept preview`}
        fill
        sizes="(max-width: 800px) 100vw, 50vw"
      />
      <div className="project-image-shade" aria-hidden="true" />
      <span className="art-label">
        CONCEPT PREVIEW <b>{project.index}</b>
      </span>
    </div>
  );
}

function GitHubMark() {
  return (
    <svg
      aria-hidden="true"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.5.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

const ProjectCard = ({ project, total }: ProjectCardProps) => (
  <article className={`project-card ${project.tone}`}>
    <ProjectPreview project={project} />
    <div className="project-meta">
      <div className="project-meta-top">
        <span className="project-counter">
          {project.index} <i /> {String(total).padStart(2, "0")}
        </span>
        <span className="project-type">{project.type}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-actions">
        {project.githubUrl && (
          <a
            className="project-action-link"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} source code on GitHub`}
          >
            <GitHubMark />
            <span>GitHub source</span>
          </a>
        )}
        {project.previewUrl && (
          <a
            className="project-action-link"
            href={project.previewUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Live preview of ${project.title}`}
          >
            <Eye size={15} aria-hidden="true" />
            <span>Live preview</span>
          </a>
        )}
        <a
          className="project-arrow"
          href="#contact"
          aria-label={`Discuss ${project.title}`}
        >
          <span>Discuss project</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  </article>
);

export default ProjectCard;
