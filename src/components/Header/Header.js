import { Navigation } from '../Navigation/Navigation'
import { Search } from '../Search/Search'

import './header.scss'

export const Header = () => {
  return (
    <header className='header'>
      <Search />
      <Navigation burgerMenuIcon={true} />
    </header>
  )
}
