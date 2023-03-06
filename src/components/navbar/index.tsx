import { Nav, Title } from './styles'
import { BiMenuAltRight } from 'react-icons/bi'
interface MenuMobileProps {
  setMenuIsVisible: (value: boolean) => void
}

export function Navbar({ setMenuIsVisible }: MenuMobileProps) {
  return (
    <Nav className="stroke">
      <Title>Portfólio</Title>
      <div className="listItems">
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Habilidades</a>
        <a href="#">Projetos</a>
        <a href="#">Carreira</a>
        <a href="#">Contato</a>
      </div>
      <BiMenuAltRight size={32} onClick={() => setMenuIsVisible(true)} />
    </Nav>
  )
}
