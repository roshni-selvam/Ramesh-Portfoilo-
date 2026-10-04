import "./Results.css";
import { results } from "../config";

export default function Results() {
  const hasTransforms = results.transformations.length > 0;
  const hasReviews = results.testimonials.length > 0;

  return (
    <section id="results" className="results">
      <div className="container">
        <div className="results__head">
          <span className="results__label">{results.label}</span>
          <h2 className="results__title">{results.title}</h2>
          <p className="results__subtitle">{results.subtitle}</p>
        </div>

        <div className="results__counters">
          {results.counters.map((c) => (
            <div className="counter" key={c.label}>
              <strong>{c.value}</strong>
              <span>{c.label}</span>
            </div>
          ))}
        </div>

        {hasTransforms && (
          <>
            <h3 className="results__sub">Transformations</h3>
            <div className="results__transforms">
              {results.transformations.map((t, i) => (
                <div className="transform" key={i}>
                  <div className="transform__photos">
                    <figure>
                      <img src={t.before} alt="Before" referrerPolicy="no-referrer" />
                      <figcaption>BEFORE</figcaption>
                    </figure>
                    <figure>
                      <img src={t.after} alt="After" referrerPolicy="no-referrer" />
                      <figcaption className="is-after">AFTER</figcaption>
                    </figure>
                  </div>
                  <div className="transform__info">
                    <strong>{t.name}</strong>
                    <span>{t.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {hasReviews && (
          <>
            <h3 className="results__sub">What Clients Say</h3>
            <div className="results__reviews">
              {results.testimonials.map((r, i) => (
                <div className="review" key={i}>
                  <div className="review__stars">★★★★★</div>
                  <p>"{r.text}"</p>
                  <div className="review__who">
                    <div className="review__avatar">{r.name.charAt(0)}</div>
                    <div>
                      <strong>{r.name}</strong>
                      <span>{r.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}