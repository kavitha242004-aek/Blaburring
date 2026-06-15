// src/components/PoemCard.jsx
import useScrollReveal from "../hooks/useScrollReveal";
import MoonPhase from "./MoonPhase";

export default function PoemCard({ poem, index }) {
  const [ref, isVisible] = useScrollReveal();
  const titleLines = Array.isArray(poem.title) ? poem.title : [poem.title];

  return (
    <article
      ref={ref}
      className={`poem-card ${isVisible ? "poem-card--visible" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <MoonPhase phase={index} />

      {poem.title && (
        <h2 className="poem-card__title">
          {titleLines.map((line, i) => (
            <span key={i} className="poem-card__title-line">
              {line}
            </span>
          ))}
        </h2>
      )}

      <div className="poem-card__body">
        {poem.stanzas.map((stanza, sIndex) => (
          <p className="poem-card__stanza" key={sIndex}>
            {stanza.map((line, lIndex) => (
              <span className="poem-card__line" key={lIndex}>
                {line}
              </span>
            ))}
          </p>
        ))}
      </div>

      {poem.note && <p className="poem-card__note">&ldquo;{poem.note}&rdquo;</p>}

      <p className="poem-card__signature">
        {poem.signatureMark} {poem.signature}
      </p>
    </article>
  );
}
