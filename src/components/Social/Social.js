import './social.scss'

import data from './socialDB.json'

export const Social = ({ white = false, newPage = false, share = false }) => {
  const socialData = data.socialData

  return (
    <div className={`social ${white ? 'social-icons' : ''}`}>
      {socialData &&
        socialData.map((item) => (
          <a
            className='social__link'
            target={newPage || share ? '_blank' : ''}
            rel='noreferrer'
            href={share ? item.share : item.link}
            key={item.id}
          >
            <img src={white ? item.imageWhite : item.imageDark} alt='' />
            {item.fork ? <span>{item.fork}</span> : null}
          </a>
        ))}
    </div>
  )
}
