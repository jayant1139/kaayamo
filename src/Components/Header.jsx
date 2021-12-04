import React from "react";

export default function Header() {
  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-light navbar-shadow">
        <div className="container-fluid ">
         
            <a className="navbar-brand" href="#">
              <img src="KAAYAMOLogo.png" />
            </a>
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse  " id="navbarScroll">
            
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Our Inspirations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Programs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Course Catalog
                  </a>
                </li>

                {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
                {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
        </li> */}
              </ul>
              <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
            </div>
          </div>

      </nav>
    </>
  );
}
