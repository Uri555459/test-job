import { useState } from 'react'

import './slider.scss'

export const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const [offset, setOffset] = useState(0)
  let startTouch = null
  let endTouch = null

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

  const touchStart = (event) => {
    startTouch = event.changedTouches[0].clientX
  }
  const touchEnd = (event) => {
    endTouch = event.changedTouches[0].clientX
    if (startTouch > endTouch) {
      nextSlide()
    } else {
      prevSlide()
    }
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className='slider' id='pictures'>
      <div className='container'>
        <div className='slider__top'>
          <div className='slider__top-inner'>
            <div
              className='slider__prev'
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {slides.map((slide, index) => {
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
                      alt='travel'
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
          {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <a href='/'>
                    <img
                      src={slide.image}
                      alt='travel'
                      className='image'
                      onTouchStart={touchStart}
                      onTouchEnd={touchEnd}
                    />
                  </a>
                )}

                {current !== 0 ? (
                  <div
                    className='slide__left-mobile'
                    style={current === 0 ? { display: 'none' } : null}
                  >
                    <img
                      className='image'
                      src={slides[current - 1]?.image}
                      alt=''
                    />
                  </div>
                ) : null}

                {current !== length - 1 ? (
                  <div
                    className='slide__right-mobile'
                    style={current === length - 1 ? { display: 'none' } : null}
                  >
                    <img
                      className='image'
                      src={slides[current + 1]?.image}
                      alt=''
                    />
                  </div>
                ) : null}
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
