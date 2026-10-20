import { profile } from "../content/resume";
import { EmailButton } from "./EmailButton";
import { ArrowUpRight } from "./Icons";
import { Reveal } from "./Reveal";
import { ResumeButton } from "./ResumeButton";

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact-panel">
          <p className="contact-kicker">06 — Contact</p>
          <h2 className="contact-title">
            Let&apos;s build something <em>worth measuring.</em>
          </h2>
          <p className="contact-lede">
            {profile.availability}. I&apos;m interested in applied AI work where retrieval quality,
            evaluation, and clean delivery all matter — happy to walk through any project above in
            detail.
          </p>

          <EmailButton className="contact-email">
            Send me an email
            <ArrowUpRight size={17} />
          </EmailButton>

          <div className="contact-meta">
            {/* <span>{profile.location}</span> */}
            <span className="dot" aria-hidden="true" />
            {profile.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
            <span className="dot" aria-hidden="true" />
            <ResumeButton
              className="resume-btn-inline"
              label="Resume"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
