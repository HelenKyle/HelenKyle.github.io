import { useState, useEffect } from 'react'
import { fetchArtworks } from '../utils/sheet'

export function useArtworks() {
  const [artworks, setArtworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchArtworks()
      .then(rows =>
        setArtworks(
          rows.map(row => ({
            ...row,
            imageUrl: `/artworks/${row.immagine}`,
            inEvidenza: row.inEvidenza?.toLowerCase() === 'true',
          }))
        )
      )
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { artworks, loading, error }
}
