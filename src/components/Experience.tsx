import { experience } from "../content/resume";
import { Bullet } from "./Bullet";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { Star } from "./Icons";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead
          index="03"
          title="Where I've worked"
          note="Evaluation work at scale, plus community engineering — measured in outcomes rather than responsibilities."
        />

        <div className="timeline">
          {experience.map((role, index) => (
            <Reveal className="role" key={`${role.org}-${role.title}`} delay={index * 90}>
              <div className="role-aside">
                <span className="role-period">{role.period}</span>
                {role.location ? <span className="role-location">{role.location}</span> : null}
                {role.badge ? (
                  <span className="badge">
                    <Star />
                    {role.badge}
                  </span>
                ) : null}
              </div>

              <div className="role-main">
                <h3 className="role-title">{role.title}</h3>
                <p className="role-org">{role.org}</p>
                {role.summary ? <p className="role-summary">{role.summary}</p> : null}

                <ul className="bullets">
                  {role.highlights.map((highlight) => (
                    <Bullet key={highlight.text.slice(0, 32)} {...highlight} />
                  ))}
                </ul>

                {role.tech?.length ? (
                  <div className="role-tech">
                    {role.tech.map((tech) => (
                      <span className="chip chip-sm" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
