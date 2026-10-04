import "./Services.css";
import { services, whatsappLink } from "../config";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__head">
          <span className="services__label">{services.label}</span>
          <h2 className="services__title">{services.title}</h2>
          <p className="services__subtitle">{services.subtitle}</p>
        </div>

        <div className="services__grid">
          {services.items.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="service-card__link"
              >
                Enquire now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}