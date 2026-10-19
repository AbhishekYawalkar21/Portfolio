import { Reveal } from "./Reveal";

interface SectionHeadProps {
  index: string;
  title: string;
  note?: string;
}

export function SectionHead({ index, title, note }: SectionHeadProps) {
  return (
    <Reveal className="section-head">
      <div>
        <p className="section-kicker">
          <span className="num">{index}</span>
          <span className="rule" aria-hidden="true" />
        </p>
        <h2 className="section-title">{title}</h2>
      </div>
      {note ? <p className="section-note">{note}</p> : null}
    </Reveal>
  );
}
