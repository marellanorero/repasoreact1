import React from 'react';

function Navbar () {
 return(
    <nav className='navbar navbar-expand-lg navbar-dark fix-top bg-dark navbar-main'>
        <div className='container-fluid'>
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse" id="collapseExample">
            <a className="navbar-brand" href="#">Hidden brand</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
 )
}

export default Navbar;