import { profile } from "../content/resume";
import { Download } from "./Icons";

interface ResumeButtonProps {
  className?: string;
  label?: string;
}

/**
 * Uses a real PDF when `profile.resumeFile` is set; otherwise opens the
 * browser print dialog, where the page renders as a clean one-page CV.
 */
export function ResumeButton({ className = "btn btn-quiet", label = "Resume" }: ResumeButtonProps) {
  if (profile.resumeFile) {
    return (
      <a
        className={className}
        href={profile.resumeFile}
        target="_blank"
        rel="noreferrer"
        aria-label="Open resume PDF"
      >
        {label}
        <Download />
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => window.print()}
      aria-label="Print or save resume as PDF"
    >
      {label}
      <Download />
    </button>
  );
}
