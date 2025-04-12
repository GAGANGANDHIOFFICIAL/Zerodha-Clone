import React from 'react'

export default function Awards() {
  return (
    <div className='container p-5 mb-5'> 
    <div className="d-flex flex-row flex-md-row flex-column text-center">
        <div className='col-6 mb-5' >
            <img src='media/images/images/largestBroker.svg'></img>
        </div>
        <div className='col-6 '>
            <h1 className='mt-5'>Largest Stock Broker In India </h1>
            <p>
                2+ Million Zerodha clients contribute to over 15% of all retail order </p>
                <br></br>
            <p> Volumes In India Daily by trading and onvesting in: </p>
            <div className='row'>
                <div className='col-6'>
                <ul>
                <li>
                    <p>
                    Future and Options 
                    </p>

                </li>
                <li>
                    <p>Commuodity derivatives </p>
                </li>
                <li>
                   <p> Currency derivatives</p>
                </li>
            </ul>
                </div>
                <div className='col-6'>
                <ul>
                <li>
                    <p>Stock and IPOs</p>

                </li>
                <li>
                    <p>Direct mutual funds </p>
                </li>
                <li>
                    <p>Bonds and Govt</p>
                </li>
            </ul>
                </div>
            </div>
            <img src='/media/images/images/pressLogos.png' style={{width:"80%"}}></img>
            
        </div>
    </div>
    </div>
  )
}
