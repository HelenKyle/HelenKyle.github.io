export default function SelectedWorks({ artworks, loading }) {
  if (loading) return null

  const featured = artworks.filter(a => a.inEvidenza)
  if (featured.length === 0) return null

  return (
    <section id="selected-works">
      <div className="container">
        <p className="section-label">Curated Selection</p>
        <h2 className="section-title">Selected Works</h2>
        <div className="selected-works-grid">
          {featured.map((art, i) => (
            <div key={i} className="artwork-card">
              <img src={art.imageUrl} alt={art.titolo} loading="lazy" />
              <div className="artwork-overlay">
                <p className="artwork-title">{art.titolo}</p>
                <p className="artwork-meta">
                  {[art.tecnica, art.anno].filter(Boolean).join(' · ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
