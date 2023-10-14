import React from 'react';
import PropTypes from 'prop-types';
export default function Nav(props){
    return(
        
        
            <nav className={`navbar navbar-expand-lg  bg-${props.mode} navbar-${props.mode} shadow`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">|-£XT</a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-bright active" href="/">{props.about}</a>
                            </li>
                        </ul>
                        
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                    <div className={`mx-2 form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.t}</label>
                    </div>
                    </div>
                    </div>
                
            </nav>
        
    );
}
Nav.propTypes={about: PropTypes.string}