import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center bg-dark text-white'>
        <div class="col-md-2"></div>
       <div class="col-md-7">
       <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43395.40672640968!2d77.07580660036216!3d28.727959770548242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0160745a7aeb%3A0xb0d48079a93b71be!2sRohini%20East!5e0!3m2!1sen!2sin!4v1706625997155!5m2!1sen!2sin"
        width="700"
        height="100"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
          </div>
    <div class="col-md-2">
      <div class="card-body">
        <h5  style={{fontWeight:"800"}} class="card-title"><i>NEWS WEB.</i></h5>
      </div>
    </div>
    <div class="col-md-1"></div>
    </div>
 
  )
}
//
export default Footer
