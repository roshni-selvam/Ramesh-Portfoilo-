import { useEffect, useState } from "react";
import {
  trainer,
  whatsappLink,
  heroImages,
  heroVideo,
  marqueeItems,
} from "../config";

function ScrollColumn({ images, reverse }) {
  return (
    <div className={`bgcol ${reverse ? "bgcol--reverse" : ""}`}>
      <div className="bgcol__track">
        {[0, 1].map((n) =>
          images.map((img, i) => (
            <img
              key={`${n}-${i}`}
              src={img}
              alt=""
              referrerPolicy="no-referrer"
              aria-hidden="true"
            />
          ))
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [current]);

  const reversed = [...heroImages].reverse();

  return (
    <section id="home" className="hero">
      {/* Background: video illa scrolling images */}
      <div className="hero__bg">
        {heroVideo ? (
          <video
            className="hero__video"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div className="bgcols">
            <ScrollColumn images={heroImages} />
            <ScrollColumn images={reversed} reverse />
            <ScrollColumn images={heroImages} />
            <ScrollColumn images={reversed} reverse />
          </div>
        )}
      </div>
      <div className="hero__overlay" />

      <div className="container hero__grid">
        <div className="hero__text">
          <span className="hero__badge">{trainer.badge}</span>

          <h1 className="hero__title">
            {trainer.heroTitleTop}
            <span className="hero__accent">{trainer.heroTitleAccent}</span>
          </h1>

          <p className="hero__desc">{trainer.heroDescription}</p>

          <div className="hero__buttons">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              Book a Free Session
            </a>
            <a
              href={`tel:${trainer.phone.replace(/\s/g, "")}`}
              className="btn btn--outline"
            >
              Call {trainer.phone}
            </a>
          </div>
        </div>

        {/* Right side image slider */}
        <div className="hero__visual">
          {heroImages.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`${trainer.name} training ${i + 1}`}
              referrerPolicy="no-referrer"
              className={`hero__photo ${i === current ? "is-active" : ""}`}
            />
          ))}
          <div className="hero__dots">
            {heroImages.map((_, i) => (
              <button
                key={i}
                className={`hero__dot ${i === current ? "is-active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="marquee">
        {[0, 1].map((n) => (
          <div className="marquee__group" key={n} aria-hidden={n === 1}>
            {marqueeItems.map((item, i) => (
              <span className="marquee__item" key={i}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

