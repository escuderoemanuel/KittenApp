import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'
// const CAT_ENDPOINT_IMAGE_URL= `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Effect to recover the phrase, when rendering the page
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
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

  return (
    <main>
      <h1>Kitten App</h1>
      <section>
        {fact && <p><span>Fact: </span> {fact}</p>}
        {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the three first word of: ${fact}`} />}
      </section>
    </main>
  )
}
