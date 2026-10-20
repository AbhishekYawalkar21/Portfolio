import { useRef, type ReactNode } from "react";
import { profile } from "../content/resume";

interface EmailButtonProps {
  className?: string;
  children: ReactNode;
}

export function EmailButton({ className, children }: EmailButtonProps) {
  const locked = useRef(false);

  const handleClick = () => {
    // Ignore a second trigger (double-click / repeated event) for a moment.
    if (locked.current) return;
    locked.current = true;
    window.setTimeout(() => {
      locked.current = false;
    }, 1500);

    // Give the recipient a display name so mail apps show one clean entry
    // ("Name <address>") instead of repeating the bare address as its own name.
    const address = atob(profile.emailEncoded);
    const recipient = encodeURIComponent(`${profile.name} <${address}>`).replace(/%40/g, "@");
    window.location.href = `mailto:${recipient}`;
  };

  return (
    <button type="button" className={className} onClick={handleClick} aria-label="Send me an email">
      {children}
    </button>
  );
}