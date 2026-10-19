import { education } from "../content/resume";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead
          index="05"
          title="Education & foundations"
          note="Computer science fundamentals, then distributed systems and cloud architecture."
        />

        <div className="edu-grid">
          {education.map((entry, index) => (
            <Reveal className="edu-card" key={entry.degree} delay={index * 90}>
              <span className="edu-period">{entry.period}</span>
              <h3 className="edu-degree">{entry.degree}</h3>
              <p className="edu-school">
                {entry.school}
                {entry.location ? (
                  <>
                    <span aria-hidden="true"> · </span>
                    <span className="muted">{entry.location}</span>
                  </>
                ) : null}
              </p>
              <div className="edu-coursework">
                {entry.coursework.map((course) => (
                  <span key={course}>{course}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
