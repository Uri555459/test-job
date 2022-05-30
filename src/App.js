import { Offer } from './components/Offer/Offer'
import { Biography } from './components/Biography/Biography'
import { Creativity } from './components/Creativity/Creativity'
import { Museums } from './components/Museums/Museums'
import { Footer } from './components/Footer/Footer'
import { Slider } from './components/Slider/Slider'
import { useSelector } from 'react-redux'

import './App.scss'

function App() {
  const slides = useSelector((state) => state.slider.value)

  return (
    <div className='App'>
      <Offer />
      <Biography />
      <Slider slides={slides} />
      <Creativity />
      <Museums />
      <Footer />
    </div>
  )
}

export default App
