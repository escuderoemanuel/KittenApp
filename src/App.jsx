import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'
// const CAT_ENDPOINT_IMAGE_URL= `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Effect to recover the phrase, when rendering the page
  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  // Effect to recover a new image, when there is a new phrase
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ') // => Sería lo mismo hacer 'const firstWord = fact.split(' ').slice(0, 3).join(' ') '
    console.log(threeFirstWords)

    fetch(`${CAT_PREFIX_IMAGE_URL}${threeFirstWords}`)

      .then(response => {
        const { url } = response
        setImageUrl(url)
        console.log(url)
      })
  }, [])

  // Handle Click to refresh the fact with the button
  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>Kitten App</h1>
      <section>
        <button onClick={handleClick}>Refresh Fact</button>
        {fact && <p><span>Fact: </span> {fact}</p>}
        {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the three first word of: ${fact}`} />}
      </section>
    </main>
  )
}
