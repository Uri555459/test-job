import './social.scss'

export const Social = ({ white = '', newPage = '' }) => {
  return (
    <div className={`social ${white !== '' ? 'social-white' : ''}`}>
      <a className='social__link' target='_blank' href='/'>
        <img src={`images/vk${white !== '' ? '-white' : ''}.svg`} alt='' />
        <span>105</span>
      </a>
      <a className='social__link' target='_blank' href='/'>
        <img src={`images/twit${white !== '' ? '-white' : ''}.svg`} alt='' />
        <span>96</span>
      </a>
      <a className='social__link' target='_blank' href='/'>
        <img src={`images/fb${white !== '' ? '-white' : ''}.svg`} alt='' />
      </a>
    </div>
  )
}
