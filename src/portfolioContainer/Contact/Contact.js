import React, { useState, useEffect, useRef } from 'react'
import QRCode from "qrcode";
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faLocationDot, faPhoneFlip} from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

export default function Contact() {
  {/*CODIGO QR*/}


    const [text] = useState("");
    const canvasRef = useRef();
  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      text || "www.google.com ",
      (error) => error && console.error(error)
    );
  }, [text]);

  {/*conexion del correo*/}

  const sendEmail = (event) =>{
     {/*1. OBTIENE INFORMACION INGRESADA*/}
     event.preventDefault()

      {/*2. Informacion necesaria para traer informacion desde la libreria email js, la cual permite enviar correo electronico https://www.emailjs.com/docs/sdk/send-form/*/}
    emailjs.sendForm('service_378v1yl','template_1go54gk','#myForm','wSgcSWogQn_yjUC4b')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }

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
            <p className='text-location'>Guadalajara México</p>
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
        <form className='form-contact1 row' onSubmit={sendEmail} id='myForm'>
            <label className='form-cont col-lg-6'>
              <input className='input one' type="text" placeholder='Name' required="required" name='user_name' />
            </label>
            <label className='form-cont col-lg-6'>
              <input className='input two' type="text" name="user_email" placeholder='Email' required="required"/>
            </label>

            <label className='form-cont col-lg-12'>
              <input className='input three' type="text" name="user_subject" placeholder='Subject' required="required" />
            </label>
            <label className='form-cont col-lg-12'>
              <textarea className='textarea four' type="text" name="user_message" placeholder='Message' required="required" />
            </label>
            <div className='m-0 row justify-content-center'>
                <button className='input-submit five justify-content-center' type="submit" value="Send message">SEND</button>
            </div>

        {/*SOCIAL MEDIA*/}
        <div className='social-media'>
        <div className='row'>
            {/*GMAIL, RED SOCIAL*/}
            <div className=' col-lg-4 d-flex justify-content-center align-items-center'>
              <button className='social'>
                <img className='red-social' src='https://i.ibb.co/m584rJw/7115264-new-logo-gmail-icon.png'/>
              </button>
            </div>
            {/*GITHUB, RED SOCIAL*/}
            <div className='col-lg-4 d-flex justify-content-center align-items-center'>
              <button className='social'>
                <img className='red-social' src="https://i.ibb.co/J7tgphv/211904-social-github-icon.png"/>
              </button>
            </div>
            {/*LINKEDIN, RED SOCIAL*/}
            <div className='col-lg-4 d-flex justify-content-center align-items-center'>
              <button className='social'>
                <img className='red-social' src='https://i.ibb.co/p4yc9mY/3171649-linkedin-social-icon.png'/>
              </button>
            </div>
        </div>
          </div>{/*FINAL SOCIAL MEDIA*/}
        </form>{/*final de formulario de contanto*/}
        </div>
      </div>

      <div className='col-lg-6'>
      <div className='form-contact-1'>
      <div>
        <div className='code-qr'>
        <p className='code-qr-text'>scan <span className='tqr'>qr</span> code</p>
        <canvas ref={canvasRef} />
        </div>
        </div>
          
      </div>
      </div>
      </div>
      </div>{/*final de formulario de contanto y --*/}

  </div>
  </section>
  )
}