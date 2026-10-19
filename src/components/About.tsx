import { about, profile } from "../content/resume";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          index="01"
          title={about.heading}
          note="Retrieval over recall, evidence over vibes — the difference between a demo and a system."
        />

        <div className="about-grid">
          <Reveal className="about-copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="about-signature">
              <span className="line" aria-hidden="true" />
              {profile.role} · {profile.location}
            </p>
          </Reveal>

          <Reveal className="principles" delay={140}>
            {about.principles.map((principle, index) => (
              <article className="principle" key={principle.title}>
                <span className="principle-num" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
