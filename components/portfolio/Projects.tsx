"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectCard, { type ProjectCardData } from "./ProjectCard";

type ProjectFilter = "all" | ProjectCardData["category"];
const projectsPerPage = 4;

const filters: { label: string; value: ProjectFilter }[] = [
  { label: "All projects", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
];

const projects: ProjectCardData[] = [
  {
    index: "01",
    title: "Lumio Finance",
    type: "Product design · Fintech",
    description:
      "A calm, high-signal dashboard that makes complex financial decisions feel clear.",
    tags: ["Next.js", "TypeScript", "Motion"],
    tone: "coral",
    category: "frontend",
    image: "/projects/lumio-finance.svg",
  },
  {
    index: "02",
    title: "Arc Studio",
    type: "Creative platform · 2024",
    description: "A digital home for a new generation of independent makers.",
    tags: ["React", "WebGL", "GSAP"],
    tone: "violet",
    category: "frontend",
    image: "/projects/arc-studio.svg",
  },
  {
    index: "03",
    title: "Northstar OS",
    type: "Developer tool · 2023",
    description: "Operations infrastructure for teams building what is next.",
    tags: ["Node.js", "Postgres", "Design system"],
    tone: "blue",
    category: "backend",
    image: "/projects/northstar-os.svg",
  },
  {
    index: "04",
    title: "Atlas API",
    type: "API platform · 2025",
    description:
      "A reliable service layer that helps product teams connect data and ship faster.",
    tags: ["Node.js", "REST API", "Redis"],
    tone: "violet",
    category: "backend",
    image: "/projects/atlas-api.svg",
  },
  {
    index: "05",
    title: "Form & Field",
    type: "E-commerce · Lifestyle",
    description:
      "A considered storefront for objects designed to make everyday rituals feel special.",
    tags: ["Next.js", "Commerce", "Framer Motion"],
    tone: "coral",
    category: "frontend",
    image: "/projects/form-and-field.svg",
  },
  {
    index: "06",
    title: "Signal Metrics",
    type: "Data platform · Analytics",
    description:
      "A dependable event pipeline that turns product activity into clear, timely insights.",
    tags: ["Node.js", "PostgreSQL", "Queues"],
    tone: "blue",
    category: "backend",
    image: "/projects/signal-metrics.svg",
  },
];
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "all" || project.category === activeFilter,
  );
  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);
  const visibleProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage,
  );

  return (
    <section id="work" className="work ">
      <div className="container work-container">
        <div className="work-transition" aria-hidden="true" />
        <div className="section-head reveal">
          <span className="project-index" aria-hidden="true">
            01
          </span>
          <div>
            <div className="section-label">
              02 <span /> Selected work
            </div>
            <h2 className="display-heading">
              Things I&apos;ve
              <br />
              <span>helped build.</span>
            </h2>
          </div>
          <p>
            Selected projects, experiments,
            <br />
            and a few things in between.
          </p>
        </div>
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects by type"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              className="project-filter"
              type="button"
              aria-pressed={activeFilter === filter.value}
              onClick={() => {
                setActiveFilter(filter.value);
                setCurrentPage(1);
              }}
            >
              {filter.label}
              <span>
                {filter.value === "all"
                  ? projects.length
                  : projects.filter(
                      (project) => project.category === filter.value,
                    ).length}
              </span>
            </button>
          ))}
        </div>
        <div className="project-stage">
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={{
                  ...project,
                  index: String(
                    (currentPage - 1) * projectsPerPage + index + 1,
                  ).padStart(2, "0"),
                }}
                total={filteredProjects.length}
              />
            ))}
          </div>
        </div>
        {pageCount > 1 && (
          <nav className="project-pagination" aria-label="Project pages">
            <button
              className="project-page-arrow"
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              aria-label="Previous project page"
            >
              <ArrowLeft size={16} />
            </button>
            {Array.from({ length: pageCount }, (_, index) => {
              const page = index + 1;
              return (
                <button
                  className="project-page-number"
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Project page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {String(page).padStart(2, "0")}
                </button>
              );
            })}
            <span className="project-page-total">
              / {String(pageCount).padStart(2, "0")}
            </span>
            <button
              className="project-page-arrow"
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(pageCount, page + 1))
              }
              disabled={currentPage === pageCount}
              aria-label="Next project page"
            >
              <ArrowRight size={16} />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Projects;
