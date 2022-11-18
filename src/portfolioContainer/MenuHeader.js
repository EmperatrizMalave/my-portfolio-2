import React from 'react';
import "./MenuHeader.css";
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link } from 'react-router-dom';
import Home from './Home/Home';
import Resume from './Resume/Resume';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
export default function MenuHeader() {

return(
    <Router>
    <div className='container-header'>
        <div className='container-herader1'>     
            <button className='btn-logo'>
                <img className='my-logo' src="https://i.ibb.co/xMN5K3T/Logo-cm.png" alt="mifoto9" border="0"/>
                <a href='#'></a>
            </button> 

            <button className='btn-icon'>
                <svg className='header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
    <div className='nav-ctn'>
        <nav className='nav-list'>
            <ul className="nav">
                <li className="nav-item line">
                    <Link to='/' className="nav-link text-nav">HOME</Link>
                </li>
                <li className="nav-item line">
                    <Link to='/about' className="nav-link">ABOUT</Link>
                </li>
                <li className="nav-item line">
                    <Link to='/resume' className="nav-link">RESUME</Link>
                </li>
                <li className="nav-item line">
                    <Link to='/portfolio' className="nav-link">PORTFOLIO</Link>
                </li>
                <li className="nav-item line">
                    <Link to='/contact'className="nav-link">CONTACT</Link>
                </li>
            </ul>
            </nav>
            </div>
</div>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/resume" element={ <Resume /> } />
            <Route path="/portfolio" element={ <Portfolio /> } />
            <Route path="/contact" element={ <Contact /> } />
        </Routes>
        
        </div>
    </Router>
);


}