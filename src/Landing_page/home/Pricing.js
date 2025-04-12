import React from 'react'

export default function Pricing() {
  return (
    <div className='container mt-5'>
        <div className='row'>
          <div className='col-6'>
            <h2>Unbeatable pricing</h2>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          </div>
          <div className='col-6' style={{display:'flex',gap:"33%"}}>
          <div className='col-2'><img src='media\images\images\pricing0.svg' style={{width:"120%",display:"flex" }}></img>
            <p>Free account
            opening</p></div>
            <div className='col-2'><img src='media\images\images\pricing0.svg' style={{width:"120%"}}></img>
            <p>Free account
            opening</p></div>
            <div className='col-2'><img src='media\images\images\pricing0.svg' style={{width:"120%"}}></img>
            <p>Free account
            opening</p></div>

          </div>
        </div>
        <div>
      <a href=''> See Pricing  <i className="fa-solid fa-arrow-right ml-3 "></i> </a>  
      </div>
      
    </div>
  )
}
