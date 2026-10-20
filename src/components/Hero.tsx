import type { CSSProperties } from "react";
import { hero, profile } from "../content/resume";
import { EmailButton } from "./EmailButton";
import { ArrowDown, ArrowUpRight } from "./Icons";

function delay(ms: number) {
  return { "--anim-delay": `${ms}ms` } as CSSProperties;
}

/** Keeps hyphenated words (e.g. "real-world") from breaking across lines. */
function protectHyphens(text: string) {
  return text.split(/(\S*-\S*)/g).map((part, index) =>
    part.includes("-") ? (
      <span className="nobreak" key={`${part}-${index}`}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function HeadlineLine({ text, ms }: { text: string; ms: number }) {
  const index = text.indexOf(hero.highlight);

  if (index === -1) {
    return (
      <span className="line anim-rise" style={delay(ms)}>
        {text}
      </span>
    );
  }

  return (
    <span className="line anim-rise" style={delay(ms)}>
      {text.slice(0, index)}
      <em>{protectHyphens(text.slice(index, index + hero.highlight.length))}</em>
      {text.slice(index + hero.highlight.length)}
    </span>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="eyebrow anim-rise">{hero.eyebrow}</p>

        <h1 className="hero-title">
          {hero.headline.map((line, index) => (
            <HeadlineLine key={line} text={line} ms={70 + index * 110} />
          ))}
        </h1>

        <div className="hero-body">
          <div className="hero-copy">
            <p className="anim-rise" style={{ ...delay(300), textAlign: 'justify' }}>
              {hero.description}
            </p>

            <div className="hero-actions anim-rise" style={delay(390)}>
              <a className="btn btn-primary" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowDown />
              </a>
              {/* <a className="btn btn-outline" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
                <ArrowUpRight />
              </a> */}
            </div>

            {/* <div className="hero-links anim-rise" style={delay(470)}>
              {profile.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                  <ArrowUpRight size={15} />
                </a>
              ))}
              <EmailButton>
                Email
                <ArrowUpRight size={11} />
              </EmailButton>
            </div> */}
          </div>

          <aside className="hero-card anim-rise" style={delay(420)}>
            <p className="availability">
              <span className="dot" aria-hidden="true" />
              {profile.availability}
            </p>

            <dl className="facts">
              {hero.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            {/* <EmailButton className="hero-card-link">
              Send me an email
              <span className="arrow" aria-hidden="true">
                <ArrowUpRight size={13} />
              </span>
            </EmailButton> */}
            <div className="hero-links anim-rise" style={delay(470)}>
              {profile.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                  <ArrowUpRight size={11} />
                </a>
              ))}
              <EmailButton>
                Email
                <ArrowUpRight size={11} />
              </EmailButton>
            </div>
          </aside>
        </div>

        <div className="hero-stats anim-rise" style={delay(540)}>
          {hero.stats.map((stat) => (
            <div className="stat" key={stat.sub}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-sub">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
