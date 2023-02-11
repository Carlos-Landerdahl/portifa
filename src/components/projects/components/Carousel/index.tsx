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
              <h1>Todo App - Criando tasks</h1>
              <p>Projeto feito com react + typescript</p>
            </div>
            <img src={todoApp} alt="" />
            <div className="contentHover">
              <button>
                <a href="#">Demo</a>
              </button>
              <button>
                <a href="#">Code</a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>

        <SwiperSlide>
          <ContainerNavLink>
            <img src={dhCard} alt="" />
            <div className="contentHover">
              <button>
                <a href="#">Demo</a>
              </button>
              <button>
                <a href="#">Code</a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>

        <SwiperSlide>
          <ContainerNavLink>
            <img src={dtMoney} alt="" />
            <div className="contentHover">
              <button>
                <a href="#">Demo</a>
              </button>
              <button>
                <a href="#">Code</a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>

        <SwiperSlide>
          <ContainerNavLink>
            <img src={feedIgnite} alt="" />
            <div className="contentHover">
              <button>
                <a href="#">Demo</a>
              </button>
              <button>
                <a href="#">Code</a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>

        <SwiperSlide>
          <ContainerNavLink>
            <img src={calcImc} alt="" />
            <div className="contentHover">
              <button>
                <a href="#">Demo</a>
              </button>
              <button>
                <a href="#">Code</a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>

        <SwiperSlide>
          <ContainerNavLink>
            <img src={bdCond} alt="" />
            <div className="contentHover">
              <button>
                <a href="#">Demo</a>
              </button>
              <button>
                <a href="#">Code</a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>

        <SwiperSlide>
          <ContainerNavLink>
            <img src={pizzaria} alt="" />
            <div className="contentHover">
              <button>
                <a href="#">Demo</a>
              </button>
              <button>
                <a href="#">Code</a>
              </button>
            </div>
          </ContainerNavLink>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
