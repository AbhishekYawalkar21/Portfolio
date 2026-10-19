import { footer } from "../content/resume";
import { ArrowUp } from "./Icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>{footer.copyright}</span>
        <span className="footer-note">{footer.note}</span>
        <a className="to-top" href="#top">
          Back to top
          <ArrowUp />
        </a>
      </div>
    </footer>
  );
}
