import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";

/**
 * Projects.tsx
 *
 * The Projects section. One card per entry in data/projects.ts, rendered
 * in the order they appear there - so keep your strongest work at the top.
 *
 * To add a project, add an object to data/projects.ts. Nothing here needs
 * to change.
 *
 * The card itself lives in components/ui/ProjectCard.tsx because it needs
 * to open and close, which requires "use client". Keeping it in its own
 * file means this section stays a static server component.
 */
export default function Projects() {
  if (projects.length === 0) return null;

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading id="projects">Projects</SectionHeading>

        <div className="mt-10 space-y-5">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}