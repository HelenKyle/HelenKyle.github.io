import { useState } from 'react'

export default function Gallery({ artworks, loading, error }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...new Set(artworks.map(a => a.categoria).filter(Boolean))]

  const filtered = activeCategory === 'All'
    ? artworks
    : artworks.filter(a => a.categoria === activeCategory)

  return (
    <section className="gallery" id="works">
      <div className="container">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">All Works</h2>

        {loading && <p className="gallery-loading">Loading works…</p>}
        {error && <p className="gallery-loading">Could not load works.</p>}

        {!loading && !error && artworks.length === 0 && (
          <p className="empty-state">Works coming soon.</p>
        )}

        {!loading && artworks.length > 0 && (
          <>
            <div className="filter-tabs">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-tab${activeCategory === cat ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <p className="empty-state">No works in this category yet.</p>
            ) : (
              <div className="gallery-grid">
                {filtered.map((art, i) => (
                  <div key={i} className="gallery-card">
                    <img src={art.imageUrl} alt={art.titolo} loading="lazy" width="400" height="300" />
                    <div className="artwork-overlay">
                      <p className="artwork-title">{art.titolo}</p>
                      <p className="artwork-meta">
                        {[art.tecnica, art.anno].filter(Boolean).join(' · ')}
                      </p>
                      {art.descrizione && (
                        <p className="artwork-desc">{art.descrizione}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
