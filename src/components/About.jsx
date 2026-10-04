import "./About.css";
import { trainer, about, whatsappLink } from "../config";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__photo">
          <img
            src={about.image}
            alt={`${trainer.name} trainer`}
            referrerPolicy="no-referrer"
          />
          <div className="about__exp">
            <strong>{trainer.stats[0].value}</strong>
            <span>{trainer.stats[0].label}</span>
          </div>
        </div>

        <div className="about__content">
          <span className="about__label">{about.label}</span>

          <h2 className="about__title">
            {about.title} <span className="about__accent">{trainer.name}</span>
          </h2>

          {about.text.map((p, i) => (
            <p className="about__text" key={i}>
              {p}
            </p>
          ))}

          <ul className="about__list">
            {about.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="about__certs">
            {about.certifications.map((c) => (
              <div className="about__cert" key={c.title}>
                <strong>{c.title}</strong>
                <span>{c.sub}</span>
              </div>
            ))}
          </div>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}