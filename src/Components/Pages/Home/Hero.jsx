import React from 'react'
import "./Home.css"
const Hero = () => {
  return (
    <>
      <div 
      className="bg-hero p-4 d-flex flex-wrap justify-content-around align-items-center text-white">
        <div 
        className=' w-md-100 col-md-6 d-md-grid justify-content-center'>
          <h2 
          className=' display-3 fw-bold'>
            Unlocking
          </h2>
          <h2 
          className=' display-3 fw-bold'>
            Possibilities 
          </h2>
          <h2 
          className=' display-3 fw-bold'>
            Igniting Dream
          </h2>
          <p className=' fs-5'>
            Harness the Force of Data-Driven Strategies,
            <br/> 
            Compelling Content, and Targeted Engagement. 
            <br/>
            Elevate Your Reach, Convert Audiences, and Dominate the 
            <br/>
            Digital Landscape.
          </p>

          <div 
          className=' rounded-5 p-4 bg-white shadow-dark custom-w-100'>
            <input 
            type='email' 
            placeholder='Email' 
            className=' form-input custom-ap-17 w-md-48 my-1'/>
            <button 
            className=' btn btn-dark p-3 px-5 rounded-4 custom-ap-17 w-md-48 my-1'>
              Next
            </button>

          </div>

        </div>


        <div className=' d-flex justify-content-center align-items-center w-md-100 col-md-6 mt-3'>
          <div 
          className=' custom-w-40 bg-white custom-ap-7 m-3 rounded-5 overflow-hidden'>
            <img src='../../.../.././assets/developer-1.jpg' className=' img-fluid h-100' />
          </div>
          <div className=' custom-w-40'>
            <div 
            className=' w-100 bg-white custom-ap-7 m-3 rounded-5 overflow-hidden'>
              <img src='../../.../.././assets/developer-1.jpg' className=' img-fluid h-100' />
            </div>
            <div 
            className=' w-100 bg-white custom-ap-7 m-3 rounded-5 overflow-hidden'>
              <img src='../../.../.././assets/developer-1.jpg' className=' img-fluid h-100' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero
