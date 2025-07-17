// src/ChiSiamo.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ChiSiamo.css";

function ChiSiamo() {
  return (
    <div className="chi-siamo-container fade-bg">
      <section className="chi-siamo-hero fade-content">
        <div className="text-content">
          <h1>Chi Siamo</h1>
          <p>
            <strong>Non Solo Gomme</strong> nasce dalla determinazione e dalla visione di <strong>Simone</strong>, 
            un giovane imprenditore che ha trasformato la sua passione per i motori in una realtà di eccellenza nel panorama automobilistico di Parma.
          </p>
          <p>
            Oggi siamo orgogliosi di essere considerati un <strong>punto di riferimento nel settore gomme</strong>, 
            con una valutazione media di <strong>4,8 stelle su Google</strong> e decine di recensioni che premiano la nostra serietà, competenza e affidabilità.
          </p>
          <p>
            Ogni intervento – dalla sostituzione pneumatici alla piccola meccanica – è svolto con attenzione artigianale, 
            tecnologie all’avanguardia e una sola missione: <strong>offrire un servizio su misura che garantisca sicurezza e prestazioni elevate</strong>.
          </p>
          <p>
            Chi sceglie Non Solo Gomme, sceglie un <strong>partner di fiducia</strong> per la cura della propria auto.
          </p>
        </div>
        <div className="hero-image">
          <img src="/tyres.jpg" alt="Simone al lavoro" />
        </div>
      </section>

      <section className="chi-siamo-gallery fade-content">
        <img src="/lavori.jpg" alt="Cambio gomme" />
        <img src="/audi.jpg" alt="Controllo convergenza" />
        <img src="/car mechanic.jpg" alt="Servizio professionale" />
      </section>

      <section className="chi-siamo-cta fade-content">
        <Link to="/" className="back-home">← Torna alla home</Link>
      </section>
    </div>
  );
}

export default ChiSiamo;
