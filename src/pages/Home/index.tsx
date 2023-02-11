import { useState } from 'react'
import { AboutMe } from '../../components/aboutMe'
import { ContentHome } from '../../components/content'
import { Navbar } from '../../components/navbar'
import { MenuMobile } from '../../components/navbarMobile'
import { Projects } from '../../components/projects'
import { Skills } from '../../components/skills'
import { HomeContainer } from './styles'

export function Homepage() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HomeContainer>
        <Navbar setMenuIsVisible={setMenuIsVisible} />
        <ContentHome />
        <AboutMe />
        <Skills />
        <Projects />
      </HomeContainer>
    </>
  )
}
