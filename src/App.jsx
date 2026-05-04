import { useArtworks } from './hooks/useArtworks'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SelectedWorks from './components/SelectedWorks'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const { artworks, loading, error } = useArtworks()

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SelectedWorks artworks={artworks} loading={loading} />
      <Gallery artworks={artworks} loading={loading} error={error} />
<Contact />
      <Footer />
    </>
  )
}

export default App
