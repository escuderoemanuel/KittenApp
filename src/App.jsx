import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import OtherComponent from './components/otherComponent'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  // Handle Click to refresh the fact with the button
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Kitten App</h1>
      <section>
        <button onClick={handleClick}>Refresh Fact</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the three first word of: ${fact}`} />}
      </section>
      <OtherComponent />
    </main>
  )
}
