import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({title}) => {
  return (
    <header className="header">
        <h1>Task Tracker</h1>
        <Button color='green' text='Add' />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

export default Header