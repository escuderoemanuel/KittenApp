import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import Header from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  // Handle Click to refresh the fact with the button
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <Header />
      <section className='body'>
        <button onClick={handleClick}>Refresh Fact</button>
        {fact && <p className='factText'>{fact}</p>}
        {imageUrl && <img className='imgCat' src={`${imageUrl}`} alt={`Image extracted using the three first word of: ${fact}`} />}
      </section>
      <Footer />
    </main>
  )
}
