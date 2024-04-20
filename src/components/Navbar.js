import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(prop) {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Use appropriate Bootstrap classes */}
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{prop.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: '100px' }}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
         
        </ul>
        <button type="button" class="btn btn-primary">
Notifications <span class="badge text-bg-secondary">{prop.not}</span>
</button>
        <form className="d-flex" onSubmit={(e) => e.preventDefault()}> {/* Use onSubmit to handle form submission */}
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
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