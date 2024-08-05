import React from 'react'
import "./Customers.css"
import { NavLink } from 'react-router-dom'
import Marketting from './Marketting'
const OurCustomers = () => {
    return (
        <div className=' bg-purple rounded-top-5 py-5'>
            <p className=' text-center fw-semibold'>
                OUR CUSTOMERS ARE SOME OF WORLDS...
            </p>

            <h3
                className=' display-4 fw-bold text-center'>
                FASTEST GROWING<br />
                COMPANIES
            </h3>

            <button 
            className='d-grid btn btn-dark px-3 py-2 rounded-3 w-fit mx-auto mb-5'>
                view all
            </button>

            <div
                className='d-flex flex-wrap gap-5 justify-content-center w-90 mx-auto'>

                <div
                    className=' card rounded-3 p-3 py-4 position-relative shadow-blue ap-11 text-center rounded-4 custom-w-300'>
                    <h4 className=' fw-bold fs-4'>SPS</h4>
                    <p
                        className=' fw-semibold '>
                        Ensuring Robust website security against hackers
                    </p>
                    <p 
                    className=' border-0 border-top border-bottom border-dark-subtle p-4 my-3'>
                        Web Maintenance ,Web Security
                    </p>
                    <NavLink 
                    className="links-2 bb-red bottom-10 left-5rem">
                        READ THE SUCCESS STORIES
                    </NavLink>
                </div>
                <div
                    className=' card rounded-3 p-3 py-4 position-relative shadow-blue ap-11 text-center rounded-4 custom-w-300'>
                    <h4 className=' fw-bold fs-4'>SPS</h4>
                    <p
                        className=' fw-semibold '>
                        Ensuring Robust website security against hackers
                    </p>
                    <p c
                    lassName=' border-0 border-top border-bottom border-dark-subtle p-4 my-3'>
                        Web Maintenance ,Web Security
                    </p>
                    <NavLink 
                    className="links-2 bb-red bottom-10 left-5rem">
                        READ THE SUCCESS STORIES
                    </NavLink>
                </div>
                <div
                    className=' card rounded-3 p-3 py-4 position-relative shadow-blue ap-11 text-center rounded-4 custom-w-300'>
                    <h4 className=' fw-bold fs-4'>SPS</h4>
                    <p
                        className=' fw-semibold '>
                        Ensuring Robust website security against hackers
                    </p>
                    <p 
                    className=' border-0 border-top border-bottom border-dark-subtle p-4 my-3'>
                        Web Maintenance ,Web Security
                    </p>
                    <NavLink
                    className="links-2 bb-red bottom-10 left-5rem">
                        READ THE SUCCESS STORIES
                    </NavLink>
                </div>
            </div>
            <Marketting/>
        </div>
    )
}

export default OurCustomers
