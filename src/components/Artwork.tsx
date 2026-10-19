/**
 * Project artwork is drawn with inline SVG so it stays crisp, themeable, and
 * costs no image requests. Colours come from the CSS variables in base.css.
 */

export function DocuMindArt() {
  return (
    <svg viewBox="0 0 400 300" aria-hidden="true">
      {/* sheets behind */}
      <rect
        x="94"
        y="54"
        width="144"
        height="194"
        rx="10"
        className="art-muted"
        transform="rotate(-7 166 151)"
      />
      <rect x="112" y="44" width="144" height="198" rx="10" className="art-muted" />

      {/* main document */}
      <rect x="130" y="34" width="148" height="200" rx="10" className="art-panel" />
      <rect x="148" y="52" width="58" height="6" rx="3" className="art-ink" />
      <rect x="148" y="70" width="102" height="4" rx="2" className="art-ink-faint" />
      <rect x="148" y="82" width="84" height="4" rx="2" className="art-ink-faint" />
      <rect x="148" y="94" width="94" height="4" rx="2" className="art-ink-faint" />
      <rect x="148" y="106" width="66" height="4" rx="2" className="art-ink-faint" />

      {/* highlighted passage */}
      <rect x="148" y="126" width="108" height="46" rx="7" className="art-soft-fill" />
      <rect x="148" y="126" width="3" height="46" rx="1.5" className="art-accent-fill" />
      <rect x="159" y="139" width="74" height="4" rx="2" className="art-ink-faint" />
      <rect x="159" y="151" width="54" height="4" rx="2" className="art-ink-faint" />

      <rect x="148" y="188" width="98" height="4" rx="2" className="art-ink-faint" />
      <rect x="148" y="200" width="80" height="4" rx="2" className="art-ink-faint" />
      <rect x="148" y="212" width="90" height="4" rx="2" className="art-ink-faint" />

      {/* connector lines to agent chips */}
      <path d="M278 148 C 292 148 290 126 302 126" className="art-accent-stroke" opacity="0.75" />
      <path d="M278 192 C 292 192 290 204 302 204" className="art-accent-stroke" opacity="0.4" />
      <circle cx="278" cy="148" r="2.6" className="art-accent-fill" />
      <circle cx="278" cy="192" r="2.2" className="art-accent-fill" opacity="0.6" />

      <rect x="302" y="111" width="70" height="30" rx="9" className="art-panel" />
      <text x="337" y="130" textAnchor="middle" className="art-text-accent">
        RAG
      </text>
      <rect x="302" y="189" width="70" height="30" rx="9" className="art-panel" />
      <text x="337" y="208" textAnchor="middle" className="art-text">
        PII
      </text>

      <text x="130" y="22" className="art-text">
        DOC-01
      </text>
      <text x="130" y="270" className="art-text">
        5-NODE AGENT
      </text>
      <text x="306" y="270" textAnchor="end" className="art-text-accent">
        LOCAL LLM
      </text>
    </svg>
  );
}

export function SupplyGraphArt() {
  const nodes = [
    { x: 100, y: 88, r: 7, accent: true },
    { x: 186, y: 54, r: 5, accent: true },
    { x: 284, y: 108, r: 8, accent: true },
    { x: 240, y: 192, r: 5, accent: true },
    { x: 142, y: 206, r: 6, accent: true },
    { x: 318, y: 214, r: 5, accent: false },
    { x: 64, y: 158, r: 5, accent: false },
    { x: 196, y: 140, r: 4, accent: false },
  ];

  return (
    <svg viewBox="0 0 400 300" aria-hidden="true">
      {/* base edges */}
      <g className="art-muted">
        <path d="M100 88 L186 54" />
        <path d="M186 54 L284 108" />
        <path d="M284 108 L240 192" />
        <path d="M240 192 L142 206" />
        <path d="M142 206 L100 88" />
        <path d="M284 108 L318 214" />
        <path d="M240 192 L318 214" />
        <path d="M100 88 L64 158" />
        <path d="M142 206 L64 158" />
        <path d="M196 140 L240 192" />
        <path d="M196 140 L100 88" />
        <path d="M196 140 L186 54" />
      </g>

      {/* highlighted ownership traversal */}
      <path
        d="M100 88 L186 54 L284 108 L240 192 L142 206"
        className="art-accent-stroke art-dash"
        opacity="0.9"
      />

      {/* halos */}
      <circle cx="284" cy="108" r="16" className="art-accent-stroke" opacity="0.25" />
      <circle cx="142" cy="206" r="14" className="art-accent-stroke" opacity="0.2" />

      {nodes.map((node) => (
        <g key={`${node.x}-${node.y}`}>
          {node.accent ? (
            <circle cx={node.x} cy={node.y} r={node.r + 4} className="art-soft-fill" />
          ) : null}
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            className={node.accent ? "art-accent-fill" : "art-panel"}
          />
        </g>
      ))}

      <text x="100" y="70" textAnchor="middle" className="art-text">
        HOLDCO
      </text>
      <text x="284" y="86" textAnchor="middle" className="art-text">
        SUPPLIER
      </text>
      <text x="142" y="232" textAnchor="middle" className="art-text">
        RISK
      </text>
      <text x="318" y="42" textAnchor="end" className="art-text-accent">
        500+ RECORDS
      </text>
      <text x="64" y="270" className="art-text">
        4-HOP OWNERSHIP
      </text>
      <text x="336" y="270" textAnchor="end" className="art-text">
        CYPHER
      </text>
    </svg>
  );
}

export function VisionArt() {
  return (
    <svg viewBox="0 0 400 300" aria-hidden="true">
      {/* capture frame */}
      <rect x="84" y="44" width="232" height="200" rx="18" className="art-muted" />
      <g className="art-accent-stroke" opacity="0.55">
        <path d="M84 80 V44 H120" />
        <path d="M280 44 H316 V80" />
        <path d="M84 208 V244 H120" />
        <path d="M316 208 V244 H280" />
      </g>

      {/* leaf */}
      <path
        d="M152 208 C 138 168 148 122 196 96 C 232 76 258 74 266 78 C 258 118 236 166 200 194 C 180 208 162 212 152 208 Z"
        fill="var(--accent)"
        opacity="0.12"
      />
      <path
        d="M152 208 C 138 168 148 122 196 96 C 232 76 258 74 266 78 C 258 118 236 166 200 194 C 180 208 162 212 152 208 Z"
        className="art-accent-stroke"
      />
      <path d="M154 206 C 186 172 224 120 258 82" className="art-accent-stroke" opacity="0.5" />
      <path d="M196 172 C 182 166 168 158 158 155" className="art-accent-stroke" opacity="0.32" />
      <path d="M212 146 C 226 138 240 124 246 112" className="art-accent-stroke" opacity="0.32" />
      <path d="M180 190 C 168 186 158 180 150 176" className="art-accent-stroke" opacity="0.32" />
      <path d="M152 208 C 146 218 142 224 137 230" className="art-accent-stroke" opacity="0.45" />

      {/* lesions */}
      <circle cx="196" cy="130" r="2.6" className="art-accent-fill" opacity="0.55" />
      <circle cx="216" cy="162" r="2.1" className="art-accent-fill" opacity="0.45" />
      <circle cx="184" cy="176" r="1.7" className="art-accent-fill" opacity="0.4" />
      <circle cx="234" cy="120" r="1.9" className="art-accent-fill" opacity="0.35" />

      {/* detection box */}
      <rect
        x="140"
        y="72"
        width="140"
        height="150"
        rx="6"
        className="art-accent-stroke art-dash"
        opacity="0.5"
      />
      <path d="M272 78 C 276 78 276 74 280 74" className="art-accent-stroke" opacity="0.5" />
      <rect x="280" y="61" width="54" height="26" rx="7" className="art-panel" />
      <text x="307" y="78" textAnchor="middle" className="art-text-accent">
        94.2%
      </text>

      <text x="84" y="272" className="art-text">
        ON-DEVICE CNN
      </text>
      <text x="316" y="272" textAnchor="end" className="art-text">
        iOS / ANDROID
      </text>
    </svg>
  );
}
