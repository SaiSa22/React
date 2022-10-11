import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title , onAdd, showAddTask}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button onClick={onAdd} color={showAddTask? 'red': 'Green'} text={showAddTask? 'Close':'Add Task'}/>
    </header>
  )

}


/* 
CSS Styles in JS
const HeadingStyle = {
    color:'red', 
    backgroundColor: 'black'
} */

Header.defaultProps = {
    title: 'Something here'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Header
