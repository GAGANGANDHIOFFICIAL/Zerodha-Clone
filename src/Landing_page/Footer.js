import React from 'react'

export default function Footer() {
  return (
    <div  className='container mt-5'>
      <div className='row'>
        <div className='col-3'>
          <img src='media\images\images\logo.svg' style={{width:"40%"}}></img>
          <p>© 2010 - 2025, Zerodha Broking Ltd.

All rights reserved.</p>
<div  style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "20px" }}>
  <p><i className="fa-brands fa-x-twitter"></i></p>
  <p><i className="fa-brands fa-instagram"></i></p>
  <p><i className="fa-brands fa-facebook"></i></p>
  <p><i className="fa-brands fa-linkedin"></i></p>
</div>
<hr className="border border-black border-1 opacity-10"></hr>

<div  style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "20px" }}>
<i className="fa-brands fa-youtube"></i>
<i className="fa-brands fa-whatsapp"></i>
<i className="fa-brands fa-telegram"></i>
  
  
</div>





        </div>
        <div className='col-3'>
        <h3>Company</h3>
        <p>Products</p>
        <p>About</p>
        <p>Pricing</p>
        <p>Referral Programme</p>
        <p>Careers</p>
        <p>Zerodha Tech</p>
        <p>Open Source</p>
        <p>Press & Media</p>
        <p>Zerodha Cares(CSR)</p>

        </div>
        <div className='col-3'>
          <h3>Support</h3>
          <p>Contact Us</p>
          <p>Support Portal</p>
          <p>Z-Connect Blog</p>
          <p>List of charges</p>
          <p>Download & resources</p>
          <p>Videos</p>
          <p>Market Overview</p>
          <p>How To file a complaint?</p>
          <p>Status of your complaints</p>

        </div>
        <div className='col-3'> 
          <h3>Acoount </h3>
          <p> Open an account</p>
          <p> Fund Transfer</p>
        </div>
      </div>
      
    </div>
  )
}
