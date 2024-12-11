import React from 'react';

export const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top " data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsMag</span></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <div className="nav-link" style={{ cursor: "pointer" }} onClick={()=>setCategory("technology") }>Techonology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={{ cursor: "pointer" }} onClick={()=>setCategory("business") } >Bussiness</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={{ cursor: "pointer" }} onClick={()=>setCategory("health") }>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={{ cursor: "pointer" }} onClick={()=>setCategory("sports") }>Spots</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={{ cursor: "pointer" }} onClick={()=>setCategory("entertainment") }>Entertiment</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
