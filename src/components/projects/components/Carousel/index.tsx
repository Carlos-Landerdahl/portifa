import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './styles.css'
import { Pagination, Navigation } from 'swiper'
import { CiFolderOn } from 'react-icons/ci'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="containerCarousel">
            <section>
              <a href="">
                <CiFolderOn size={50} />
              </a>
              <div>
                <a
                  href="https://github.com/Carlos-Landerdahl/Front-End-II-C1"
                  target="_blank"
                  className="iconsExternalLinks"
                  rel="noreferrer"
                >
                  <FiExternalLink size={30} color={'white'} />
                </a>
                <a
                  href="https://dh-cards.vercel.app/"
                  target="_blank"
                  className="iconsExternalLinks"
                  rel="noreferrer"
                >
                  <FiGithub size={30} color={'white'} />
                </a>
              </div>
            </section>
            <main>
              <h1 className="titleCardProjects">DH Cards - Crie cards</h1>
              <p className="descriptionCardProjects">
                Projeto feito dentro da Digital House na matéria de Front-end
                II, para colocar aprendizados de js puro + css em prática, neste
                site você pode criar cards do seus jogadores de futebol
                favoritos.
              </p>
              <p className="descriptionCard">Javascript + CSS3 + HTML5</p>
            </main>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="containerCarousel">
            <section>
              <a href="">
                <CiFolderOn size={50} />
              </a>
              <div>
                <a
                  href="https://dt-money-zeta.vercel.app/"
                  className="iconsExternalLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink size={30} color={'white'} />
                </a>
                <a
                  href="https://github.com/Carlos-Landerdahl/dt-money"
                  className="iconsExternalLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub size={30} color={'white'} />
                </a>
              </div>
            </section>
            <main>
              <h1 className="titleCardProjects">DT Money - Finanças</h1>
              <p className="descriptionCardProjects">
                Projeto feito no Ignite - Rocketseat, fizemos um sistema de
                controle de gastos onde podemos colocar entradas e saídas de
                capital, projeto feito utilizando styled-components, typescript,
                vite e deploy feito na vercel.
              </p>
              <p className="descriptionCard">
                Typescript + styled-components + react.js
              </p>
            </main>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="containerCarousel">
            <section>
              <a href="">
                <CiFolderOn size={50} />
              </a>
              <div>
                <a
                  href="https://ignite-feed-home.vercel.app/"
                  className="iconsExternalLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink size={30} color={'white'} />
                </a>
                <a
                  href="https://github.com/Carlos-Landerdahl/ignite-feed"
                  className="iconsExternalLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub size={30} color={'white'} />
                </a>
              </div>
            </section>
            <main>
              <h1 className="titleCardProjects">Ignite - Feed</h1>
              <p className="descriptionCardProjects">
                Projeto feito no Ignite - Rocketseat, fizemos uma interface
                estilo twitter, onde você pode fazer seus comentários e
                apagá-los também, projeto feito utilizando styled-components,
                typescript, vite e deploy feito na vercel.
              </p>
              <p className="descriptionCard">
                Typescript + styled-components + react.js
              </p>
            </main>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="containerCarousel">
            <section>
              <a href="">
                <CiFolderOn size={50} />
              </a>
              <div>
                <a
                  href="https://calcule-seu-imc-react.vercel.app/"
                  className="iconsExternalLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink size={30} color={'white'} />
                </a>
                <a
                  href="https://github.com/Carlos-Landerdahl/react-calc-imc"
                  className="iconsExternalLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub size={30} color={'white'} />
                </a>
              </div>
            </section>
            <main>
              <h1 className="titleCardProjects">B7WEB - Calc IMC</h1>
              <p className="descriptionCardProjects">
                Projeto feito na B7WEB, fizemos uma interface para calcular o
                IMC do usuário e dizer como está o seu estado, tudo isso
                utilizando CSS.modules, typescript, CRA e deploy feito na
                vercel.
              </p>
              <p className="descriptionCard">
                Typescript + Css Modules + react.js
              </p>
            </main>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="containerCarousel">
            <section>
              <a href="">
                <CiFolderOn size={50} />
              </a>
              <div>
                <a
                  href="https://bd-condominio.vercel.app/"
                  className="iconsExternalLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink size={30} color={'white'} />
                </a>
                <a
                  href="https://github.com/Carlos-Landerdahl/BD-Condominio"
                  className="iconsExternalLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub size={30} color={'white'} />
                </a>
              </div>
            </section>
            <main>
              <h1 className="titleCardProjects">BD - Em conjunto</h1>
              <p className="descriptionCardProjects">
                Projeto feito dentro Digital House, para colocar todos os
                conhecimentos de MYSQL em prática, fizemos DDL, DML e por fim um
                CRUD, tudo isso usando como exemplo app de gestão de
                condomínios.
              </p>
              <p className="descriptionCard">MySQL + JS</p>
            </main>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="containerCarousel">
            <section>
              <a href="">
                <CiFolderOn size={50} />
              </a>
              <div>
                <a
                  href="https://pizzaria-app-kappa.vercel.app/"
                  className="iconsExternalLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink size={30} color={'white'} />
                </a>
                <a
                  href="https://github.com/Carlos-Landerdahl/pizzaria"
                  className="iconsExternalLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub size={30} color={'white'} />
                </a>
              </div>
            </section>
            <main>
              <h1 className="titleCardProjects">B7WEB - Pizzaria</h1>
              <p className="descriptionCardProjects">
                Projeto feito na B7WEB, criação de uma interface para realizar
                pedido de pizzas, fizemos um sistema de carrinho completo
                utilizando CSS, Typescript e deploy feito na vercel.
              </p>
              <p className="descriptionCard">
                Typescript + styled-components + react.js
              </p>
            </main>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="containerCarousel">
            <section>
              <a href="">
                <CiFolderOn size={50} />
              </a>
              <div>
                <a
                  href="https://ignite-todo-tasks.vercel.app/"
                  className="iconsExternalLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink size={30} color={'white'} />
                </a>
                <a
                  href="https://github.com/Carlos-Landerdahl/ignite-toDo"
                  className="iconsExternalLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub size={30} color={'white'} />
                </a>
              </div>
            </section>
            <main>
              <h1 className="titleCardProjects">Todo - App</h1>
              <p className="descriptionCardProjects">
                Projeto feito no Ignite - Rocketseat, fizemos uma aplicação para
                a criação de tasks rápidas do dia a dia e com funções completas.
              </p>
              <p className="descriptionCard">
                Typescript + styled-components + react.js + vercel
              </p>
            </main>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
