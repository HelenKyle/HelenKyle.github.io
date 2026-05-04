export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">Contemporary Artist</p>
      <h1 className="hero-name">
        Elena<br /><em>Bandinelli</em>
      </h1>
      <p className="hero-tagline">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ars longa, vita brevis — creating works that speak where words cannot.
      </p>
      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
