import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(prop) {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-dark"> {/* Use appropriate Bootstrap classes */}
    <div className="container-fluid">
      <a className="navbar-brand" href="/" style={{color:"white"}}>{prop.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
    </div>
  </nav>
  </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    not: PropTypes.number
}

Navbar.defaultProps={
    title: "Set Title Please",
    not: 0
}