import './read-more-button.scss'

export const ReadMoreButton = ({
  link = '',
  readMoreHandler = '',
  buttonText = 'читать больше',
}) => {
  if (link !== '') {
    return (
      <a href={link} className='read-more'>
        <span>читать больше</span>
        <img src='images/arrow.svg' alt='' />
      </a>
    )
  } else {
    return (
      <button onClick={readMoreHandler} className='read-more'>
        <span>{buttonText}</span>
        <img src='images/arrow.svg' alt='' />
      </button>
    )
  }
}
