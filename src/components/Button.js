import React from 'react'
import PropTypes from 'prop-types';

const Button = ({color, text, onClick}) => {
  return (
<button onClick={onClick} className='btn' style={{backgroundColor: color}}>{text}</button>
  )
}

Button.defaultProps = {
    color: 'red',
    text: 'Add'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Button
