// App.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FaWrench, FaBalanceScale, FaArrowsAltH, FaBars, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <img src="/Nonsologomme.jpg" alt="Logo" className="logo-img" />
        {isMobile && (
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
        )}
        <ul className={isMobile ? (menuOpen ? "nav-links open" : "nav-links") : "nav-links desktop"}>
          <li><a href="#servizi">Servizi</a></li>
          <li><Link to="/chi-siamo">Chi Siamo</Link></li>
          <li><a href="#contatti">Contatti</a></li>
          <li><Link to="/news">News</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <img src="/Nonsologomme.jpg" alt="Non Solo Gomme Logo" className="hero-banner" />

      <header className="hero-section">
        <div className="hero-text">
          <p>La nostra officina è nata dalla passione di <strong>Simone</strong>, un giovane imprenditore pieno di ambizione e talento.</p>
          <p>I nostri clienti ci scelgono da quando lo hanno conosciuto, apprezzando la sua dedizione, precisione e professionalità in ogni intervento.</p>
          <p>Non vendiamo solo gomme, offriamo sicurezza, fiducia e servizio su misura.</p>
        </div>
      </header>

      {/* GALLERY */}
      <div className="service-gallery">
        <img src="/lavori.jpg" alt="Servizio 1" />
        <img src="/convergenza.jpg" alt="Cambio gomme" />
        <img src="/gomme3.jpg" alt="Servizio 2" />
        <img src="/ac recharging.jpg" alt="Servizio 2" />
        <img src="/oil changing.jpg" alt="Servizio 2" />
        <img src="/diagnostic.jpg" alt="Servizio 2" />
      </div>

      {/* SLOGAN DOPO GALLERY */}
<section className="gallery-slogan">
  <h2>Leader nel settore dei pneumatici e dell'assistenza veicoli</h2>
  <p>
    Da anni siamo il punto di riferimento a Parma per tutti coloro che cercano servizi di alta qualità per il proprio veicolo.
  </p>
  <p>
    Dalla sostituzione gomme alla convergenza, dalla bilanciatura alla consulenza tecnica, ogni intervento è svolto con precisione, passione e attrezzature all'avanguardia.
  </p>
  <p>
    I nostri clienti non cercano solo un'officina: scelgono un partner di fiducia, pronto a garantire sicurezza e prestazioni su ogni strada.
  </p>
  <p>
    Affidati a <strong>Non Solo Gomme</strong> e vivi un'esperienza di assistenza su misura, pensata per chi ama guidare in totale tranquillità.
  </p>
</section>


<section id="servizi" className="section">
  <h2 className="servizi-title">I nostri servizi</h2>

  <div className="process-grid">
    <div className="process-card">
      <h3>🛞 Cambio gomme</h3>
      <p>Velocità e sicurezza su ogni tipo di veicolo.</p>
    </div>
    <div className="process-card">
      <h3>⚖️ Equilibratura</h3>
      <p>Massimo comfort e durata per le tue gomme.</p>
    </div>
    <div className="process-card">
      <h3>↔️ Convergenza</h3>
      <p>Precisione di guida e riduzione usura pneumatici.</p>
    </div>
    <div className="process-card">
      <h3>🔧 Piccola meccanica</h3>
      <p>Revisione freni, raddrizzatura cerchi, cambio olio.</p>
    </div>
    <div className="process-card">
      <h3>❄️ Ricarica clima</h3>
      <p>Diagnosi sistema di climatizzazione, e ricarica clima.</p>
    </div>
    <div className="process-card">
      <h3>⚙️ Tagliando completo</h3>
      <p>Revisione periodica dell'auto mobile, cambio filtri, olio, e check completo.</p>
    </div>
  </div>
</section>


      {/* CONTATTI */}
      <section id="contatti" className="section info-contatti">
        <h3>Non Solo Gomme</h3>
        <p>📍 Via A. Cantoni 16a, 43122 Parma</p>
        <p>📞 <a href="tel:+393478390167">+39 347 839 0167</a></p>
        <p>📧 <a href="mailto:nonsologomme77@gmail.com">nonsologomme77@gmail.com</a></p>
        <p>
          <a href="https://www.facebook.com/profile.php?id=100067950842189" target="_blank" rel="noreferrer">
            <FaFacebook size={20} style={{ verticalAlign: "middle", color: "#3b5998" }} />
          </a>
        </p>

        <h4>Orari di apertura</h4>
        <ul className="orari">
          <li>Lunedì - Sabato: 09:00 - 17:00</li>
          <li>Domenica: Chiuso</li>
        </ul>
      </section>

      {/* MAPPA */}
      <div className="mappa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.5896073969123!2d10.3508499!3d44.8090848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47806aca22ca1b0b%3A0xa578c6e73cce35e8!2sVia%20Achille%20Cantoni%2C%2016%2C%2043122%20Parma%20PR!5e0!3m2!1sit!2sit!4v1720030912291!5m2!1sit!2sit"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* BANNER RECENSIONI */}
<section className="review-banner">
  <div className="review-content">
    <h3>⭐ 4,8 su Google</h3>
    <p>Apprezzati da oltre 140 clienti soddisfatti. La tua opinione conta!</p>
    <a
  href="https://www.google.com/search?q=Non+Solo+Gomme+Parma&hl=it"
  target="_blank"
  rel="noreferrer"
  className="google-review-button"
>
  <FcGoogle size={24} style={{ marginRight: "8px" }} />
  Lascia una recensione
</a>

  </div>
</section>


      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-copy">© {new Date().getFullYear()} Non Solo Gomme. Tutti i diritti riservati.</p>
      </footer>
    </>
  );
}

export default App;
