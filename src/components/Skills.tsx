import { skills } from "../content/resume";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead
          index="02"
          title="Technical toolkit"
          note="Grouped by where each tool sits in the stack — from the graph layer down to the interface."
        />

        <Reveal className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
