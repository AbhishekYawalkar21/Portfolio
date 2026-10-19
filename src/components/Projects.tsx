import { projects } from "../content/resume";
import { DocuMindArt, SupplyGraphArt, VisionArt } from "./Artwork";
import { Bullet } from "./Bullet";
import { ArrowUpRight, GitHubMark, Star } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

function ArtworkFor({ id }: { id: string }) {
  if (id === "supplier-risk") return <SupplyGraphArt />;
  if (id === "tomato-vision") return <VisionArt />;
  return <DocuMindArt />;
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          index="04"
          title="Selected projects"
          note="Three systems, end to end: document agents, graph retrieval, and on-device computer vision."
        />

        <div className="projects">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <article className="project">
                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-num">{String(index + 1).padStart(2, "0")}</span>
                    <span className="rule" aria-hidden="true" />
                    <span>{project.period}</span>
                    {project.award ? (
                      <span className="project-award">
                        <Star />
                        {project.award}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-sub">{project.subtitle}</p>

                  <ul className="bullets">
                    {project.highlights.map((highlight) => (
                      <Bullet key={highlight.text.slice(0, 32)} {...highlight} />
                    ))}
                  </ul>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span className="chip chip-sm" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.links?.length ? (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          className="project-link"
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/github/i.test(link.label) ? <GitHubMark size={14} /> : null}
                          <span>{link.label}</span>
                          <ArrowUpRight size={12} />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="project-art">
                  <ArtworkFor id={project.id} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
