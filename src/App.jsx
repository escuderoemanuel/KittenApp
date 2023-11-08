import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL= `https://cataas.com/cat/says/hello/${url}`
const CAT_PREFIX_URL = 'https://cataas.com/cat/says/hello/'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        /* const firstWord = fact.split(' ').slice(0, 3).join(' ') */
        const threeFirstWord = fact.split(' ', 3).join(' ')
        console.log(threeFirstWord)

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            console.log(response)
            const { url } = response
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>Kitten App</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_URL}${imageUrl}`} alt={`Image extracted using the three first word of: ${fact}`} />}
    </main>
  )
}
