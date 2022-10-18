import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faLocationDot, faMobile, faPhoneFlip} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (

        <section className='contact-me'>
        <div className='container'>
          {/*AREA DE TITULO PRINCIPAL*/}
        <div className='row'>
        <div className='col-lg-12'>
          <div className='section-heading'>
      <h2>CONTACT<span className='title-p'> ME</span></h2>
          </div>
        </div>
     

   {/*AREA SOBRE INFORMACION DE CONTACTO*/}
      {/*My location*/}
      <div className='container'>
        <div className='row'>
        <div className='col-lg-4'>
          <div className='container-contact'>
            <div className='header-circle'>
              <FontAwesomeIcon className='icon-c' icon={faLocationDot} />
            </div>
            <div className='text-location-p'>MY LOCATION</div>
            <p className='text-location'>700 Oak Street, Brockton MA 2301</p>
          </div>{/*FINAL My location*/}
        </div>
      
        {/*PHONE NUMBER*/}
        <div className='col-lg-4'>
        <div className='container-contact'>
        <div className='header-circle'>
              <FontAwesomeIcon className='icon-c' icon={faPhoneFlip} />
            </div>
            <div className='text-location-p'>PHONE NUMBER</div>
            <p className='text-location'>33-17621177</p>

        </div>
        </div>{/*FINAL PHONE NUMBER*/}
        {/*EMAIL ADDRESS*/}
        <div className='col-lg-4'>
        <div className='container-contact'>
        <div className='header-circle'>
              <FontAwesomeIcon className='icon-c' icon={faEnvelopeOpenText} />
            </div>
            <div className='text-location-p'>EMAIL ADDRESS</div>
            <p className='text-location'>EMPERATRIZ.668@GNMAIL.COM</p>

        </div>
        </div>{/*FINAL EMAIL ADDRESS*/}
        </div>
        </div>

      </div>{/*cierre div container AREA SOBRE INFORMACION DE CONTACTO*/}

      {/*FORMULARIO DE CONTACTO*/}

      <div className='container'>
      <div className='row'>
      <div className='col-lg-6'>
        <div className='form-contact align-items-center justify-content-center d-flex'>
        <form className='form-contact1 row'>
            <label className='form-cont col-lg-6'>
              <input className='input one' type="text" placeholder='Name' required="required" />
            </label>
            <label className='form-cont col-lg-6'>
              <input className='input two' type="text" name="email" placeholder='Email' required="required"/>
            </label>

            <label className='form-cont col-lg-12'>
              <input className='input three' type="text" name="Subject" placeholder='Subject' required="required" />
            </label>
            <label className='form-cont col-lg-12'>
              <textarea className='textarea four' type="text" name="Message" placeholder='Message' required="required" />
            </label>
            <input className='input-submit five' type="submit" value="Send message" />

        {/*SOCIAL MEDIA*/}
        <div className='social-media'>
        <div className='row'>
            <div className='social col-lg-3'>
              <a href='#' className='iconsl'>
              <img src="https://img.icons8.com/fluency/46/000000/linkedin-2.png"/>
              </a>
            </div>
            <div className='social col-lg-3'>
            <a href='#' className='iconsf'>
            <img src="https://img.icons8.com/plasticine/50/000000/github.png"/>
            </a>
            </div>
            <div className='social col-lg-3'>
            <a href='#' className='iconsg'>

            </a>
            </div>
        </div>
          </div>{/*FINAL SOCIAL MEDIA*/}
          
        </form>{/*final de formulario de contanto*/}



        </div>

      </div>

      <div className='col-lg-6'>
      <div className='form-contact'></div>
      </div>
      </div>
      </div>{/*final de formulario de contanto y --*/}





  </div>
  </section>
  )
}
