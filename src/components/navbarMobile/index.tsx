import { useEffect } from 'react'
import { BiXCircle } from 'react-icons/bi'
import { Container } from './styles'

interface MenuMobileProps {
  menuIsVisible: boolean
  setMenuIsVisible: (value: boolean) => void
}

export function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
}: MenuMobileProps) {
  useEffect(() => {
    if (menuIsVisible === true) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [menuIsVisible])

  return (
    <Container isVisible={menuIsVisible}>
      <BiXCircle size={35} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Habilidades</a>
        <a href="#">Projetos</a>
        <a href="#">Carreira</a>
        <a href="#">Contato</a>
      </nav>
    </Container>
  )
}
