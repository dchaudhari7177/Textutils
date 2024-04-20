import React from 'react'; // Import React

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Use appropriate Bootstrap classes */}
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Text Utils</a>
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
  Notifications <span class="badge text-bg-secondary">0</span>
</button>
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}> {/* Use onSubmit to handle form submission */}
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="/">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      
    </>
  );
}

export default App;
