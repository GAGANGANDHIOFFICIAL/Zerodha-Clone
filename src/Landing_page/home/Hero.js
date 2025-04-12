import React from 'react'

export default function Hero() {
  return (
    <div className='container p-5'>
       <div className='row text-center'>
        <img src='media/images/images/homeHero.png' alt="Hero image " className='mb-5'></img>
        
        <h1 className='mb-5'>
            Invest in Everything 
        </h1>
        <p>
            Online Platform to Invest in Stocks,derivatives,Mutual Funds,and More
        </p>
        <button className="btn btn-primary " style={{width:"30%",margin:" 0 auto"} } type="submit">
            Sign up Now 

        </button>
        </div>
       </div>
    
  )
}
