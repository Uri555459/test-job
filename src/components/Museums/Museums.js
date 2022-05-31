import { SectionTitle } from '../SectionTitle/SectionTitle'
import './museums.scss'

import data from './museumsDB.json'

export const Museums = () => {
  const museums = data.museums

  return (
    <section className='museums' id='museums'>
      <div className='container container--museums'>
        <SectionTitle>музеи</SectionTitle>
        <div className='museums__map'>
          <img src='images/museums/1.jpg' alt='' />
        </div>
        <div className='museums__address-wrap'>
          {museums &&
            museums.map((item) => (
              <div className='museums__address' key={item.id}>
                <div className='museums__address-top'>
                  <img src={item.icons} alt='' />
                  <a href='/'>
                    <h4>{item.title}</h4>
                  </a>
                </div>
                <p>
                  {item.address}
                  <a href={`tel:${item.phone.replace(/[-()/\\' ']/g, '')}`}>
                    {item.phone}
                  </a>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
