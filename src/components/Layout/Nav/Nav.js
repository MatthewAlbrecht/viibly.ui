import React from 'react'
import { connect } from 'react-redux'
import { changeNavTransparency } from 'actions/nav.actions'
import classnames from 'classnames'

function Nav(props) {
  const navClasses = classnames({
    nav: true,
    nav_transparent: props.transparency,
  })

  return (
    <nav className={navClasses}>
      <h1
        className='nav-logo'
        onClick={() => props.changeNavTransparency(!props.transparency)}
      >
        Logo
      </h1>
      <div className='hamburgerMenu'>
        <span className='hamburgerMenu-line'></span>
        <span className='hamburgerMenu-line'></span>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  ...state.nav,
})

/**
 * Remove mapDispacthToProps once we find a new place for it
 */
const mapDispatchToProps = dispatch => ({
  changeNavTransparency: transparency =>
    dispatch(changeNavTransparency(transparency)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)
