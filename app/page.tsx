const portfolioImage =
  "https://raw.githubusercontent.com/lucasseifert113/seifert-sites/main/ChatGPT%20Image%20Jul%2017%2C%202026%2C%2001_28_24%20PM.png";

const links = [
  {
    number: "01",
    label: "Book on TheCut",
    detail: "Choose a service and reserve your chair",
    href: "https://book.thecut.co/",
    external: true,
  },
  {
    number: "02",
    label: "Instagram",
    detail: "See recent cuts and new work",
    href: "https://www.instagram.com/tay.belndz.0/",
    external: true,
  },
  {
    number: "03",
    label: "Call or Text",
    detail: "(608) 732-8721",
    href: "tel:+16087328721",
    external: false,
  },
  {
    number: "04",
    label: "Get Directions",
    detail: "45 N 3rd Street, Platteville, WI",
    href: "https://www.google.com/maps/search/?api=1&query=45+N+3rd+Street+Platteville+WI",
    external: true,
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Tay Blendz home">
          <span className="mark">TB</span>
          <span className="wordmark-copy">
            <strong>Tay Blendz</strong>
            <small>Platteville, Wisconsin</small>
          </span>
        </a>

        <a
          className="button button-gold nav-button"
          href="https://book.thecut.co/"
          target="_blank"
          rel="noreferrer"
        >
          Book now
        </a>
      </header>

      <section id="top" className="hero">
        <div className="hero-grain" />
        <div className="hero-monogram" aria-hidden="true">
          TB
        </div>

        <div className="hero-content">
          <p className="eyebrow">Modern cuts. Clean fades. Sharp finish.</p>
          <h1>
            Walk in clean.
            <span>Leave sharper.</span>
          </h1>
          <p className="hero-copy">
            Tay The Barber delivers modern cuts and fades in Platteville, with
            every appointment tailored to your style.
          </p>

          <div className="button-row">
            <a
              className="button button-gold"
              href="https://book.thecut.co/"
              target="_blank"
              rel="noreferrer"
            >
              Book on TheCut
            </a>
            <a className="button button-outline" href="#work">
              Preview my work
            </a>
          </div>
        </div>

        <div className="hero-meta">
          <span>45 N 3rd Street</span>
          <span>Platteville, WI</span>
          <span>(608) 732-8721</span>
        </div>
      </section>

      <section className="link-section" aria-labelledby="connect-heading">
        <div className="section-heading">
          <p>Everything in one place</p>
          <h2 id="connect-heading">Book, follow, or reach Tay directly.</h2>
        </div>

        <div className="link-grid">
          {links.map((link) => (
            <a
              className="link-card"
              href={link.href}
              key={link.number}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <span className="link-number">{link.number}</span>
              <span className="link-copy">
                <strong>{link.label}</strong>
                <small>{link.detail}</small>
              </span>
              <span className="link-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="about-copy">
          <p className="section-label">Tay The Barber</p>
          <h2>Four years sharpening the craft.</h2>
          <p>
            I am a Platteville barber focused on modern cuts, clean fades, and
            details that fit the person in the chair. Every cut is built around
            your look, your routine, and the style you want to leave with.
          </p>
          <a href="tel:+16087328721">Call or text (608) 732-8721</a>
        </div>

        <div className="brand-panel">
          <div className="brand-circle">TB</div>
          <p>Precision · Style · Confidence</p>
          <h3>Built around your look.</h3>
          <span>Platteville barber</span>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-heading work-heading">
          <p>Preview of my work</p>
          <h2>Recent cuts.</h2>
        </div>

        <figure className="portfolio-frame">
          <img
            src={portfolioImage}
            alt="Tay Blendz haircut portfolio featuring textured flow, taper fades, curls, and clean lineups"
          />
        </figure>
      </section>

      <section className="final-cta">
        <p>Ready for the chair?</p>
        <h2>Book your next cut.</h2>
        <div className="button-row centered">
          <a
            className="button button-gold"
            href="https://book.thecut.co/"
            target="_blank"
            rel="noreferrer"
          >
            Book on TheCut
          </a>
          <a className="button button-outline" href="tel:+16087328721">
            Call or text Tay
          </a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Tay Blendz</strong>
          <span>Modern cuts and fades in Platteville, Wisconsin.</span>
        </div>
        <a
          href="https://www.instagram.com/tay.belndz.0/"
          target="_blank"
          rel="noreferrer"
        >
          @tay.belndz.0
        </a>
      </footer>
    </main>
  );
}
