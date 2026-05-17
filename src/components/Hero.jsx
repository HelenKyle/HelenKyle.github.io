export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">Contemporary Artist</p>
      <h1 className="hero-name">
        Elena<br /><em>Bandinelli</em>
      </h1>
      <p className="hero-tagline">
          Laureata in arti decorative. Ho proseguito i miei studi in Character Design. Su questo sito sono esposte le opere che ho creato durante il mio percorso. <br/>Info e contatti sono in fondo alla pagina.
      </p>
      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
