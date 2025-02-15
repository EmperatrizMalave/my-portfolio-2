import React from 'react';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
//import Typical from 'react-typical'
export default function Home() {
    return (
        <div className='container-info'>
            <div className='row'>
            <div className='container-image col-6'>
                <img className='my-image' src="https://i.ibb.co/3ySg9yvT/mifoto.jpg" alt="mifoto" border="0"/>  
            </div>
                <div className='my-info col-6'>
                    <div className='greeting-father'>
                    <div className='greeting'>HELLO
                    </div>
                    </div>
                    <div className='my-name'>I'M <span className='color'>Coromoto Malave</span></div>
                    <ul className='what-I-do'>
                        <li className='one1 es'>I</li>
        
                        <li className='one1'>D</li>
                        <li className='one1 es'>O</li>
                        {''}
                        <li className='one1'>W</li>
                        <li className='one1'>E</li>
                        <li className='one1 es'>B</li>
                        {''}
                        <li className='one1'>D</li>
                        <li className='one1'>E</li>
                        <li className='one1'>V</li>
                        <li className='one1'>E</li>
                        <li className='one1'>L</li>
                        <li className='one1'>O</li>
                        <li className='one1'>P</li>
                        <li className='one1'>M</li>
                        <li className='one1'>E</li>
                        <li className='one1'>N</li>
                        <li className='one1'>T</li>
                    </ul>
        
                    <div className='my-descripcion'>Among my technical skills I can point out: Jira for project management, HTML 5 Basics, CSS and Bootstrap Basics of JavaScript, java and react Experience in Git and Github, Basics of Figma Knowledge of the SCRUM framework, Basics of MySQL Basics of SpringBoot Excel . Microsoft Word.</div>
                    <div className='my-btn'>
                        <a className='btn-potfolio' href='#'>Portfolio <FontAwesomeIcon className='icons' icon={faSuitcase}/></a>
                        
                    </div>
        
        
                </div>
                </div>
        </div>
        
            )};