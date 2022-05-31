import { useState } from 'react'
import { Link } from 'react-scroll'

import './navigation.scss'

export const Navigation = ({ burgerMenuIcon = true }) => {
  const [menuToggle, setMenuToggle] = useState(false)

  const menuItems = [
    {
      id: Math.random(),
      toAction: 'biography',
      name: 'биография',
    },
    {
      id: Math.random(),
      toAction: 'creativity',
      name: 'творчество',
    },
    {
      id: Math.random(),
      toAction: 'pictures',
      name: 'картины',
    },
    {
      id: Math.random(),
      toAction: 'museums',
      name: 'музеи',
    },
  ]

  const buttonMenuHandler = () => {
    setMenuToggle(!menuToggle)
  }

  return (
    <nav className='nav'>
      <ul className={`nav__list ${menuToggle ? 'active' : ''}`}>
        {menuItems &&
          menuItems.map((item) => (
            <li key={item.id}>
              <Link
                onClick={buttonMenuHandler}
                to={item.toAction}
                smooth={true}
                duration={1000}
                className='nav__link'
              >
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
      {burgerMenuIcon ? (
        <button onClick={buttonMenuHandler} className='burger-menu-btn'>
          <img src='images/burger-menu-icon.svg' alt='' />
        </button>
      ) : null}
    </nav>
  )
}
