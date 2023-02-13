import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './styles.css'
import { Pagination, Navigation } from 'swiper'
import todoApp from '../../../../images/todoApp.png'
import dhCard from '../../../../images/dh-cards.png'
import dtMoney from '../../../../images/dt-money.png'
import feedIgnite from '../../../../images/feed-ignite.png'
import calcImc from '../../../../images/calc-imc.png'
import bdCond from '../../../../images/bd-cond.png'
import pizzaria from '../../../../images/pizzaria.png'
import { ContainerNavLink } from './styles'

export function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ContainerNavLink>
            <div>
              <h1>Ignite - Todo App</h1>
              <p>
                Projeto feito no Ignite - Rocketseat, fizemos uma aplicação para
                a criação de tasks rápidas do dia a dia e com funções
                complestas, projeto feito utilizando styled-components,
                typescript, vite e deploy feito na vercel.
              </p>
            </div>
            <img src={todoApp} alt="" />
            <div className="contentHover">
              <button>
                <a
                  href="https://ignite-todo-tasks.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Carlos-Landerdahl/ignite-toDo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>

        <SwiperSlide>
          <ContainerNavLink>
            <div>
              <h1>DH Cards - Crie cards</h1>
              <p>
                Projeto feito dentro da Digital House na matéria de Front-end
                II, para colocar aprendizados de js puro + css em prática, neste
                site você pode criar cards do seus jogadores de futebol
                favoritos.
              </p>
            </div>
            <img src={dhCard} alt="" />
            <div className="contentHover">
              <button>
                <a
                  href="https://dh-cards.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Carlos-Landerdahl/Front-End-II-C1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>

        <SwiperSlide>
          <ContainerNavLink>
            <div>
              <h1>DT Money - Finanças</h1>
              <p>
                Projeto feito no Ignite - Rocketseat, fizemos um sistema de
                controle de gastos onde podemos colocar entradas e saídas de
                dinheiro, projeto feito utilizando styled-components,
                typescript, vite e deploy feito na vercel.
              </p>
            </div>
            <img src={dtMoney} alt="" />
            <div className="contentHover">
              <button>
                <a
                  href="https://github.com/Carlos-Landerdahl/dt-money"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Carlos-Landerdahl/dt-money"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>

        <SwiperSlide>
          <ContainerNavLink>
            <div>
              <h1>Ignite - Feed</h1>
              <p>
                Projeto feito no Ignite - Rocketseat, fizemos uma interface
                estilo twitter onde você pode fazer seus comentários e apaga-los
                também, projeto feito utilizando styled-components, typescript,
                vite e deploy feito na vercel.
              </p>
            </div>
            <img src={feedIgnite} alt="" />
            <div className="contentHover">
              <button>
                <a
                  href="https://ignite-feed-home.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Carlos-Landerdahl/ignite-feed"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>

        <SwiperSlide>
          <ContainerNavLink>
            <div>
              <h1>B7WEB - Calc IMC</h1>
              <p>
                Projeto feito na B7WEB, fizemos uma interface para calcular o
                IMC do usuário e dizer como esta o seu estado, tudo isso
                utilizando CSS.modules, typescript, CRA e deploy feito na
                vercel.
              </p>
            </div>
            <img src={calcImc} alt="" />
            <div className="contentHover">
              <button>
                <a
                  href="https://calcule-seu-imc-react.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Carlos-Landerdahl/react-calc-imc"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>

        <SwiperSlide>
          <ContainerNavLink>
            <div>
              <h1>BD - Em conjunto</h1>
              <p>
                Projeto feito dentro Digital House, para colocar todos os
                conhecimentos de MYSQL em prática, fizemos DDL, DML e por final
                um CRUD, fizemos isso usando como exemplo app de gestão de
                condomínios.
              </p>
            </div>
            <img src={bdCond} alt="" />
            <div className="contentHover">
              <button>
                <a
                  href="https://bd-condominio.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Carlos-Landerdahl/BD-Condominio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>

        <SwiperSlide>
          <ContainerNavLink>
            <div>
              <h1>B7WEB - Pizzaria</h1>
              <p>
                Projeto feito na B7WEB, criação de uma interface para realizar
                pedido de pizzas, fizemos um sistema de carrinho completo usando
                utilizando CSS, javascript e deploy feito na vercel.
              </p>
            </div>
            <img src={pizzaria} alt="" />
            <div className="contentHover">
              <button>
                <a
                  href="https://pizzaria-app-kappa.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Carlos-Landerdahl/pizzaria"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
