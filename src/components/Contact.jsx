import { useState } from "react";
import "./Contact.css";
import { contact, trainer, whatsappLink } from "../config";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", goal: "", message: "" });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const text =
      `Hi, I want to join.\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Goal: ${form.goal}\n` +
      `Message: ${form.message}`;
    window.open(
      `https://wa.me/${trainer.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__head">
            <span className="contact__label">{contact.label}</span>
            <h2 className="contact__title">{contact.title}</h2>
            <p className="contact__subtitle">{contact.subtitle}</p>
          </div>

          <div className="contact__grid">
            <div className="contact__info">
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="info-card">
                <span className="info-card__icon">💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <span>{trainer.phone}</span>
                </div>
              </a>

              <a href={`tel:${trainer.phone.replace(/\s/g, "")}`} className="info-card">
                <span className="info-card__icon">📞</span>
                <div>
                  <strong>Call</strong>
                  <span>{trainer.phone}</span>
                </div>
              </a>

              <a href={contact.instagram} target="_blank" rel="noreferrer" className="info-card">
                <span className="info-card__icon">📸</span>
                <div>
                  <strong>Instagram</strong>
                  <span>{contact.instagramHandle}</span>
                </div>
              </a>

              <a href={`mailto:${contact.email}`} className="info-card">
                <span className="info-card__icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <span>{contact.email}</span>
                </div>
              </a>

              <div className="info-card">
                <span className="info-card__icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <span>{contact.address}</span>
                </div>
              </div>

              <div className="info-card">
                <span className="info-card__icon">⏰</span>
                <div>
                  <strong>Timings</strong>
                  <span>{contact.timings}</span>
                </div>
              </div>
            </div>

            <form className="contact__form" onSubmit={onSubmit}>
              <h3>Book a Free Session</h3>

              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={onChange}
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={onChange}
                required
              />
              <select name="goal" value={form.goal} onChange={onChange} required>
                <option value="">Select your goal</option>
                <option>Weight Loss</option>
                <option>Muscle Gain</option>
                <option>Personal Training</option>
                <option>Diet Plan</option>
                <option>Online Coaching</option>
              </select>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your goal (optional)"
                value={form.message}
                onChange={onChange}
              />

              <button type="submit" className="btn btn--primary">
                Send on WhatsApp
              </button>
            </form>
          </div>

          {/* <div className="contact__map">
            <iframe
              title="Gym location"
              src={contact.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div> */}
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <strong className="footer__name">{trainer.name}</strong>
            <span>{trainer.gymName}</span>
          </div>
          <p>
            © {new Date().getFullYear()} {trainer.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}