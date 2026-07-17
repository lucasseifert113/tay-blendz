const portfolioImage =
  "https://raw.githubusercontent.com/lucasseifert113/seifert-sites/main/ChatGPT%20Image%20Jul%2017%2C%202026%2C%2001_28_24%20PM.png";

const socialLinks = [
  { label: "Book on TheCut", href: "https://book.thecut.co/", primary: true },
  { label: "Instagram", href: "https://www.instagram.com/tay.belndz.0/" },
  { label: "Snapchat", href: "https://www.snapchat.com/add/tay.blendz.0" },
  { label: "Facebook", href: "https://www.facebook.com/search/top?q=tay%20blendz" },
  { label: "Call Tay", href: "tel:+16087328721" },
  {
    label: "Directions",
    href: "https://www.google.com/maps/search/?api=1&query=45+N+3rd+Street+Platteville+WI",
  },
];

const services = ["Fades", "Tapers", "Lineups", "Beard Work", "Kids Cuts", "Custom Designs"];

export default function Home() {
  return (
    <main className="old-site-shell">
      <section className="old-hero">
        <p className="old-kicker">Cut Club Barbershop</p>
        <h1>Tay Blendz</h1>
        <div className="old-gold-line" />
        <h2>Clean cuts. Sharp blends. Easy booking.</h2>
        <p>Platteville barber specializing in fades, tapers, lineups, and custom designs.</p>

        <div className="old-top-actions">
          <a className="old-button old-button-gold" href="https://book.thecut.co/" target="_blank" rel="noreferrer">
            Book on The Cut
          </a>
          <a className="old-button old-button-outline" href="https://www.instagram.com/tay.belndz.0/" target="_blank" rel="noreferrer">
            View Instagram
          </a>
        </div>
      </section>

      <section className="old-brand-cards" aria-label="Tay Blendz brand cards">
        <img src="/tay-card-front.webp" alt="Cut Club Barbershop brand card" />
        <img src="/tay-card-back.webp" alt="Tay Blendz contact card" />
      </section>

      <section className="old-card old-work-card">
        <p className="old-section-label">Recent Work</p>
        <h2>Fresh cuts from the chair.</h2>
        <div className="old-photo-frame">
          <img
            src={portfolioImage}
            alt="Tay Blendz haircut portfolio featuring fades, tapers, curls, and clean lineups"
          />
        </div>
        <a className="old-button old-button-gold old-full-button" href="https://book.thecut.co/" target="_blank" rel="noreferrer">
          Book Your Cut
        </a>
      </section>

      <section className="old-card">
        <p className="old-section-label">Get Connected</p>
        <div className="old-link-list">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className={`old-link-button${link.primary ? " old-link-primary" : ""}`}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="old-card">
        <p className="old-section-label">Services</p>
        <div className="old-services-grid">
          {services.map((service) => (
            <div key={service}>{service}</div>
          ))}
        </div>
        <p className="old-muted-copy">Choose your service and book directly through The Cut.</p>
      </section>

      <section className="old-card old-contact-card">
        <p className="old-section-label">Contact</p>
        <strong>45 N 3rd St</strong>
        <a href="tel:+16087328721">(608) 732-8721</a>
        <a className="old-gold-text" href="https://www.instagram.com/tay.belndz.0/" target="_blank" rel="noreferrer">
          @tay.blendz_0
        </a>
        <span>Platteville, WI</span>
      </section>

      <p className="old-closing-line">Built for clients who want a clean cut, sharp detail, and an easy way to book.</p>

      <footer className="old-footer">
        <strong>Tay Blendz</strong>
        <span>Cut Club Barbershop</span>
        <small>Built by Seifert Sites</small>
      </footer>
    </main>
  );
}
