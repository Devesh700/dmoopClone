import React from 'react'

const Marketting = () => {
  return (
    <div 
    className=' bg-brownish rounded-5 px-4 py-5 my-5 d-flex flex-wrap gap-4 justify-content-around col-md-10 mx-auto'>
      <div
      className=' w-md-48 text-justify'>
        <h4
        className='fw-bold display-6'>
          get your free <br/>
      marketting audit</h4>
      <ul className=' d-flex flex-wrap justify-content-center gap-4 w-fit mt-4 ms-3'>
        <li className=' flex-grow-1'>
            30-min strategy call
        </li>
        <li className=' flex-grow-1'>
            in depth audit
        </li>
        <li className=' flex-grow-1'>
            growth roadmap
        </li>
      </ul>
      </div>
      <div
      className='w-md-48'>
        <div 
          className=' rounded-5 p-4 bg-white shadow-dark custom-w-100 mx-auto'>
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
    </div>
  )
}

export default Marketting
