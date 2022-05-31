import React from 'react'
import { ReadMoreButton } from '../ReadMoreButton/ReadMoreButton'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Social } from '../Social/Social'

import './creativity.scss'

export const Creativity = () => {
  return (
    <section className='creativity' id='creativity'>
      <div className='container'>
        <div className='creativity__top'>
          <div className='creativity__row creativity__row-1'>
            <SectionTitle>творчество</SectionTitle>
            <p className='creativity__text'>
              Трудно найти другого живописца, настолько горячо влюбленного в
              провинциальную Россию: самобытную, яркую, удивляющую.
            </p>
          </div>
          <div className='creativity__row creativity__row-2'>
            <p className='creativity__text'>
              Как и большинство работ автора, пейзажные полотна Кустодиева
              отличаются особой выразительностью, яркостью и насыщенностью
              цветовых планов. На картинах Кустодиева природа всегда
              представляет собой нечто гораздо большее, чем просто пейзажное
              изображение.
            </p>
            <div className='creativity__image'>
              <img src='images/creativity/1.jpg' alt='' />
            </div>
          </div>
        </div>
        <div className='creativity__image'>
          <img src='images/creativity/2.jpg' alt='' />
        </div>
        <div className='creativity__desc'>
          <p>
            Особенности творчества художника Бориса Кустодиева: любил жанр
            портрета-картины, когда характер героя раскрывается через окружающий
            его пейзаж, интерьер или даже служащую фоном жанровую сцену; не
            жалел для бытовых сцен декоративности и зрелищности; с большой
            симпатией писал жизнь провинции.
          </p>
          <p>
            Даже в самые беспросветные времена полотна Кустодиева лучились
            здоровьем, радостью и любовью к жизни. Сахарные сугробы и плавящиеся
            под солнцем купола. Полыхающие арбузы и красавицы, не уступающие
            арбузам ни интенсивностью румянца, ни гладкой округлостью форм.
          </p>
        </div>
        <div className='biography__bottm creativity__bottom'>
          <Social white={false} newPage={false} share={true} />
          <ReadMoreButton link='/' />
        </div>
      </div>
    </section>
  )
}
