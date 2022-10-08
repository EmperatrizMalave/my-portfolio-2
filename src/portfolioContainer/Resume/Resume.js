import React from 'react'
import './Resume.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBadgeCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
export default function Resume() {
  return (
    <section className='my-resume'>

      {/*TITLE MY RESUME*/}
      <div className='resume-header-title container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='section-heading'>
        <h2>MY<span className='title-p'> RESUME</span></h2>
            </div>
          </div>
        </div>
   {/*DOWNLOAD MY CV BUTTON*/}
          <div className='box-resume'>
            <div className='row'>
              <div className='link-h d-flex align-self-center'>
                <div className='resume-content'>
                  <a href='#' className='my-btn-resume'>
                  <FontAwesomeIcon className='icons-d' icon={faDownload}/>
                  </a>
                </div>
              </div>
            </div>
          </div>    
          

   {/*SEGUNDA PARTE CODING SKILLS*/}
      <div className='studies-one-box'>
        <div className='container'>
          <div className='row skill-area'>
            <div className='col-lg-6 skill-area-line'>
              <div className='skill-box'>
                <h4 className='title'>
                    CODING SKILLS
                </h4>
                <div className='skill-list'>
                  <div className='single-skill'>
                    <div className='label'>
                      <span>HTML</span>
                      <span>80%</span>
                    </div>
                    <div className='progress'>
                    <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                    </div>
                  </div>
                  <div className='single-skill'>
                  <div className='label'>
                      <span>CSS</span>
                      <span>80%</span>
                    </div>
                    <div className='progress'>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                    </div>
                  </div>
                  <div className='single-skill'>
                  <div className='label'>
                      <span>JAVASCRIPT</span>
                      <span>80%</span>
                    </div>
                    <div className='progress'>
                    <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                    </div>
                  </div>
                  <div className='single-skill'>
                  <div className='label'>
                      <span>GIT</span>
                      <span>80%</span>
                    </div>
                    <div className='progress'>
                    <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  {/*LANGUAGE SKILLS*/}
      <div className='col-lg-6 skill-area-line'>
        <div className='skill-box'>
          <h4 className='title'>
            LANGUAGE SKILLS
          </h4>
            <div className='skill-list'>
              <div className='single-skill'>
                <div className='label'>
                  <span>SPANISH</span>
                  <span>80%</span>
                </div>
                  <div className='progress'>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                  </div>
              </div>
                    <div className='single-skill'>
                      <div className='label'>
                        <span>ENGLISH</span>
                        <span>80%</span>
                      </div>
                        <div className='progress'>
                        <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                      <div className='progress-bar'></div>
                        </div>
                    </div>
            </div>
        </div>
      </div>

  {/* PROFESSIONAL SKILLS*/}
    <div className='row skill-area'>
      <div className='col-lg-6 skill-area-circle'>
        <div className='skill-box'>
          <h4 className='title'>
            PROFESIONAL SKILLS
          </h4>
            <div>
              <div className='skill-list'>
                <div className='single-skill'>
                  <div className='main-of-the-circle-1'>
                    <div className='circle-1'>90%</div>
                    <div className='text-circle'>Web development</div>
                  </div>
                  {/* <div className='main-of-the-circle-1'>
                    <div className='circle-2'>90%</div>
                    <div className='text-circle'>Web development</div>
                  </div>
                 <div className='main-of-the-circle-1'>
                    <div className='circle-3'>90%</div>
                    <div className='text-circle'>Web development</div>
                  </div>
                  <div className='main-of-the-circle-1'>
                    <div className='circle-4'>90%</div>
                    <div className='text-circle'>Web development</div>
                  </div>*/} 
                  </div>
                  </div>
                </div>
              </div>
      </div>

{/*BASIC KNOWLEDGE*/}
      <div className='col-lg-6 skill-area-circle'>
        <div className='skill-box'>
          <h4 className='title'>
              BASIC KNOWLEDGE
          </h4>
            <div>
              <div className='skill-list'>
                  <div className='single-list-ul'>
                    <li className='list-check'><FontAwesomeIcon className='icons-e' icon={faCircleCheck}/>
                        Search engine marketing
                    </li>
                    <li className='list-check'><FontAwesomeIcon className='icons-e' icon={faCircleCheck}/>
                        Search engine marketing
                    </li>
                    <li className='list-check'><FontAwesomeIcon className='icons-e' icon={faCircleCheck}/>
                        Search engine marketing
                    </li>
                    <li className='list-check'><FontAwesomeIcon className='icons-e' icon={faCircleCheck}/>
                        Search engine marketing
                    </li>
                    <li className='list-check'><FontAwesomeIcon className='icons-e' icon={faCircleCheck}/>
                        Search engine marketing
                    </li>
                    
                  </div>
              </div>
            </div>
        </div>
      </div>
          </div>
          </div>
          </div>     

    {/*EDUCATION*/}
    <div className='container'>  
    <div className='row'>
    <div className='collage-name col-6'>
          <h2 className='title-2'>EDUCATION</h2>
          <div className='container'>
          <div className='row col-0.1'>
          <div className='line-design'>
          <span className='design-ov1'></span>
          <span className='design-ov2'></span>
          </div>

          <ul className='row col-9.9'>
            <li className='name-list'>UNIVERSITY</li>
            <li className='name-list'>BSC IN CSS2019 - Present</li>
            <li className='name-list'>The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia.</li>
          </ul>
          </div>
          </div>
          

    </div>


     {/*EXPERIENCE*/}
    <div className='collage-name col-6'>
          <h2 className='title-2'>Experience</h2>
    </div>
    </div>
</div>
    </div>
    </div>
    </section>
  )
}
