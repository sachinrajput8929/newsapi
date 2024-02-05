import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand text-white">
        <h5 style={{fontWeight:"700",color:"white",fontSize:"30px"}} className="fw-bolder">Daily News</h5>
        </Link>
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-white" aria-current="page"  >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/general" className="nav-link active text-white" aria-current="page">General</Link>
        </li>
        <li className="nav-item">
          <Link to="/business" className="nav-link active text-white" aria-current="page" >Business</Link>
        </li>
        <li className="nav-item">
          <Link to="/entertainment" className="nav-link active text-white" aria-current="page" >Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link to="/health" className="nav-link active text-white" aria-current="page" >Health</Link>
        </li>
        <li className="nav-item">
          <Link to="/science" className="nav-link active text-white" aria-current="page" >Science</Link>
        </li>
        <li className="nav-item">
          <Link to="/sports" className="nav-link active text-white" aria-current="page" >Sports</Link>
        </li>
        <li className="nav-item">
          <Link to="/technology" className="nav-link active text-white" aria-current="page" >Technology</Link>
        </li>
        <li className="nav-item">
          <Link to="/politics" className="nav-link active text-white" aria-current="page" >Politics</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
//
export default Navbar
