import { useState } from 'react'
import { SliderData } from './SliderData'

import './slider.scss'

export const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const [offset, setOffset] = useState(0)

  const slideHandler = (event) => {
    const currentIndex = Number(event.target.dataset.index)
    setOffset(160 * currentIndex)
    setCurrent(currentIndex)
  }

  const nextSlide = () => {
    if (current === length - 1) return null
    setCurrent(current === length - 1 ? 0 : current + 1)
    setOffset(offset + 160)
  }

  const prevSlide = () => {
    if (current === 0) return null
    setCurrent(current === 0 ? length - 1 : current - 1)
    setOffset(offset - 160)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className='slider'>
      <div className='container'>
        <div className='slider__top'>
          <div className='slider__top-inner'>
            <div
              className='slider__prev'
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {SliderData.map((slide, index) => {
                return (
                  <div
                    className={
                      index === current
                        ? 'slider__prev-slide active'
                        : 'slider__prev-slide'
                    }
                    key={index + 10}
                  >
                    <img
                      onClick={slideHandler}
                      src={slide.image}
                      alt='travel image'
                      className='slider__prev-img'
                      data-index={index}
                      disabled={index === current ? true : false}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <a href='/' className='slider__top-link'>
            все картины &gt;
          </a>
        </div>

        <div className='slider__title slider__title--mobile'>
          {slides[current].title}
        </div>

        <div className='slider__body'>
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <a href='/'>
                    <img
                      src={slide.image}
                      alt='travel image'
                      className='image'
                    />
                  </a>
                )}
              </div>
            )
          })}
        </div>

        <div className='slider__bottom'>
          <img
            className='left-arrow'
            onClick={prevSlide}
            src='images/arrow-white.svg'
            alt=''
            disabled={current === 0 ? true : false}
          />
          <div className='slider_info'>
            <div className='slider__title'>{slides[current].title}</div>
            <div className='slider__count'>
              <span className='slide__count-current'>{current + 1}</span>
              <span className='slide__count-all'> / {slides.length}</span>
            </div>
          </div>
          <img
            className='right-arrow'
            onClick={nextSlide}
            src='images/arrow-white.svg'
            alt=''
            disabled={current === length - 1 ? true : false}
          />

          <a href='/' className='slider__top-link slider__top-link--mobile'>
            все картины &gt;
          </a>
        </div>
      </div>
    </section>
  )
}