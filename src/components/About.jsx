import heroImg from '../assets/hero.png'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap">
            <img src={heroImg} alt="Elena Bandinelli" />
          </div>
          <div className="about-text">
            <p className="section-label">About</p>
            <h2 className="section-title">The Artist</h2>
            <p className="about-bio">
              Fin da bambina mi è sempre piaciuto disegnare. Mi divertivo a disegnare i personaggi Disney o Pokémon che vedevo alla TV, 
              e mi divertivo anche a disegnare i ragazzi più grandi di me. Ho capito che disegnare era la mia passione, 
              quindi ho deciso di intraprendere un percorso universitario all'Accademia di Belle Arti di Firenze. 
              Successivamente ho continuato a disegnare come hobby, e con corsi online alla Digital Bros Academy e Talent Form.

            </p>
            <p className="about-bio">
              Animazione, videogiochi e fumetti mi hanno sempre accompagnato durante la mia vita, e vorrei che diventassero la mia professione.
            </p>
            <div className="about-details">
              <div className="about-detail">
                <span className="about-detail-label">Based in</span>
                <span>Firenze, Italy</span>
              </div>
              <div className="about-detail">
                <span className="about-detail-label">Education</span>
                <span>Accademia di Belle Arti, Laurea triennale, 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
