import { useEffect, useState } from 'react'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
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
  }, [fact])
  return { imageUrl }
}
