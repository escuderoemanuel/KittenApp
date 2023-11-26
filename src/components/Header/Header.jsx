import './Header.css'
import cat from '../../../public/cat.svg'

export default function Header () {
  return (
    <header>
      <h1>Kitten App</h1>
      <img src={cat} alt='Cat Icon Image' />
    </header>

  )
}
