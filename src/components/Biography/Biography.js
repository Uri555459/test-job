import { useState } from 'react'
import { ReadMoreButton } from '../ReadMoreButton/ReadMoreButton'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Social } from '../Social/Social'

import './biography.scss'

export const Biography = () => {
  let data = [
    {
      id: 'kjflsddgsdh',
      date: '',
      text: 'Борис Кустодиев родился 7 марта 1878 года в Астрахани. Отца, преподавателя духовной семинарии, не стало, когда мальчику было чуть больше года. Мать осталась вдовой в 25 лет и содержала четверых детей.',
    },
    {
      id: 'kjf1ldgfsdsdh',
      date: 1887,
      text: 'Борис сначала учился в церковно-приходской школе, потом в гимназии. Когда ему было девять лет, в город привезли выставку художников-передвижников. Мальчика настолько впечатлила живопись, что он твердо решил научиться рисовать так же искусно. Мать нашла деньги, чтобы Борис смог брать уроки у известного в Астрахани художника Павла Власова.',
    },
    {
      id: 'kjflafdasdh',
      date: 1888,
      text: 'Борис сначала учился в церковно-приходской школе, потом в гимназии. Когда ему было девять лет, в город привезли выставку художников-передвижников. Мальчика настолько впечатлила живопись, что он твердо решил научиться рисовать так же искусно. Мать нашла деньги, чтобы Борис смог брать уроки у известного в Астрахани художника Павла Власова.',
    },
  ]
  const [biographyData, setBiographyData] = useState(data)
  const [buttonText, setButtonText] = useState('читать больше')
  const readMoreHandler = async () => {
    try {
      const res = await fetch('./DB.json')
      const dataText = await res.json()
      if (buttonText === 'Скрыть') {
        setBiographyData([...data])
        setButtonText('читать больше')
        return false
      }
      setBiographyData((prevState) => {
        return [...prevState, ...dataText.biography]
      })
      setButtonText('Скрыть')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className='biography' id='biography'>
      <div className='container'>
        <div className='biography__inner'>
          <div className='biography__left'>
            <SectionTitle>биография</SectionTitle>
          </div>

          <div className='biography__right'>
            {biographyData &&
              biographyData.map((item) => (
                <div key={item.id} className='biography__info'>
                  <span style={item.date !== '' ? null : { height: '0' }}>
                    {item.date}
                  </span>
                  <p>{item.text}</p>
                </div>
              ))}
          </div>
        </div>

        <div className='biography__bottm'>
          <Social />
          <ReadMoreButton
            buttonText={buttonText}
            readMoreHandler={readMoreHandler}
          />
        </div>
      </div>
    </section>
  )
}
