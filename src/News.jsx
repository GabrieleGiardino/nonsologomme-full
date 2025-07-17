import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./News.css";

function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-page fade-in-up">
      
      {/* Sezione in alto con immagine e annuncio */}
      <section className="news-cta news-hero">
        <img 
          src="/warning light.jpg" 
          alt="Centro Revisioni" 
          className="news-image" 
        />
        <h1>📣 Novità in arrivo!</h1>
        <p>
          Siamo felici di annunciare la prossima apertura del nostro nuovo{" "}
          <strong>Centro Revisioni</strong> a Parma, a fianco di <strong>Non Solo Gomme</strong>.
        </p>
        <p>
          Offriremo un servizio completo di controllo, revisione periodica e assistenza tecnica,
          con la stessa passione e professionalità che ci contraddistingue.
        </p>
        <p>📍 Inaugurazione prevista: <strong>Rimanete connessi...</strong></p>
      </section>

      {/* Sezione finale con messaggio e bottone */}
      <section className="news-cta">
        <p>
          Resta aggiornato seguendoci sui social e passando a trovarci in officina!
        </p>
        <p>
          🚗 Più servizi, stessa qualità. Con <strong>Simone</strong>, sempre in evoluzione. 🚗  
        </p>

        <div className="home-button-wrapper">
          <Link to="/" className="home-button">🏠 Torna alla Home</Link>
        </div>
      </section>
    </div>
  );
}

export default News;
