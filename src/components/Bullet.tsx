import type { Highlight } from "../content/resume";

export function Bullet({ lead, text }: Highlight) {
  return (
    <li>
      {lead ? <strong>{lead}.</strong> : null} {text}
    </li>
  );
}
