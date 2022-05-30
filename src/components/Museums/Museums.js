import { SectionTitle } from '../SectionTitle/SectionTitle'
import './museums.scss'

export const Museums = () => {
  return (
    <section className='museums' id='museums'>
      <div className='container container--museums'>
        <SectionTitle>музеи</SectionTitle>
        <div className='museums__map'>
          <img src='images/museums/1.jpg' alt='' />
        </div>
        <div className='museums__address-wrap'>
          <div className='museums__address'>
            <div className='museums__address-top'>
              <img src='images/mark.svg' alt='' />
              <a href='/'>
                <h4>Русский музей</h4>
              </a>
            </div>
            <p>
              191186, Санкт-Петербург, Инженерная ул., 4,{' '}
              <a href='tel:+78125954240'>+7 (812) 595-42-40</a>
            </p>
          </div>

          <div className='museums__address'>
            <div className='museums__address-top'>
              <img src='images/mark.svg' alt='' />
              <a href='/'>
                <h4>Третьяковская галерея</h4>
              </a>
            </div>
            <p>
              119017, Москва, Лаврушинский переулок,10
              <a href='tel:+74959570727'>+7 (495) 957-07-27</a>
            </p>
          </div>

          <div className='museums__address'>
            <div className='museums__address-top'>
              <img src='images/mark.svg' alt='' />
              <a href='/'>
                <h4>Мультимедиа Арт Музей</h4>
              </a>
            </div>
            <p>
              105064, Москва, Гороховский переулок, 7
              <a href='tel:+74956321681'>+7 (495) 632–16–81</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
