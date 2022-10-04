import React from 'react'
import './Resume.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
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
                  <div className='main-of-the-circle'>
                    <div className='circle-1'>90%</div>
                    <div className='text-circle'>Web development</div>
                  </div>
                  <div className='main-of-the-circle'>
                    <div className='circle-2'>90%</div>
                    <div className='text-circle'>Web development</div>
                  </div>
                  <div className='main-of-the-circle'>
                    <div className='circle-3'>90%</div>
                    <div className='text-circle'>Web development</div>
                  </div>
                  <div className='main-of-the-circle'>
                    <div className='circle-4'>90%</div>
                    <div className='text-circle'>Web development</div>
                  </div>
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
                    <li>
                        Search engine marketing
                    </li>
                    <li>
                        <p>kjhjk</p>
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
        <div className='col-lg-6'>
          <div className='edu-box'>
            <h2 className='title'>
                EDUCATION
            </h2>
              <div className='row'>
                <div className='col-12'>
                  <div className='education-list'>
                    <div className='single-education'>
                      <h4 className='collage-name'>ggf</h4>
                        <p className='degree'>ughjgjh</p>
                      <div className='description'>
                        <p>gfghf</p>
                      </div>
        </div>

        <div className='single-education'>
        <h4 className='collage-name'>ggf</h4>
        <p className='degree'>ughjgjh</p>
        <div className='description'>
          <p>gfghf</p>
        </div>
        </div>

        <div className='single-education'>
        <h4 className='collage-name'>ggf</h4>
        <p className='degree'>ughjgjh</p>
        <div className='description'>
          <p>gfghf</p>
        </div>
        </div>
        </div>

        </div>
          </div>

          </div>
        </div>

{/*EXPERIENCE*/}
    <div className='col-lg-6'>
    <h2 className='title'>
        EXPERINCE
          </h2>
    </div>
          </div>
          </div>
          </div>
          </div>  
    </section>
  )
}
