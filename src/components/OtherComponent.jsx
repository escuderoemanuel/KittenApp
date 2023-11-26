import React from 'react'
import { useCatImage } from '../hooks/useCatImage'

export default function OtherComponent() {
  const { imageUrl } = useCatImage({ fact: 'cat' })

  return (
    <>
      {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the three first word of: ${imageUrl}`} />}
    </>
  )
}
