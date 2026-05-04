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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="about-bio">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="about-details">
              <div className="about-detail">
                <span className="about-detail-label">Based in</span>
                <span>Lorem Ipsum, Italy</span>
              </div>
              <div className="about-detail">
                <span className="about-detail-label">Education</span>
                <span>Accademia di Belle Arti, Lorem Ipsum, 20XX</span>
              </div>
              <div className="about-detail">
                <span className="about-detail-label">Medium</span>
                <span>Oil, Watercolour, Mixed Media</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
