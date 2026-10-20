import { footer } from "../content/resume";
import { ArrowUp } from "./Icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <span>{footer.copyright}</span>
        <a className="to-top" href="#top" style={{ position: 'absolute', right: 0 }}>
          Back to top
          <ArrowUp />
        </a>
      </div>
    </footer>
  );
}
