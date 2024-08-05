import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Partial.css";
import NavItems from './NavItems';

const Navbar = () => {
    const [mobile, setmobile] = useState(false);
    return (
        <>
        <header className=' w-100 d-flex justify-content-around py-2 border-bottom'>
            <p className=' fw-light'>Revenue Driven by Our Clients<br/>
            <span className=' fw-bold fs-6'>$2,74,5591</span>
            </p>
            <p className=' fw-light'>Get a Proposal
                <br/>
                <span className=' fw-bold fs-6'>76-832-1147</span>
            </p>
        </header>
            <nav
            className='nav d-flex justify-content-around align-items-center px-3 bg-light position-sticky z-3'
            >
                <div
                className='icon rounded-circle w-60 overflow-hidden d-flex justify-content-center align-items-center border border-2'
                >
                    <img src='../.././assets/dmoop.png' alt='dmoop' 
                    width={"100%"} height={"100%"}/>
                </div>


                <div 
                className="mobile-menu-btn"
                onClick={() => { setmobile(!mobile); }}>
                    <div
                    tabIndex={0}
                    className=' grid-btn'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div 
                className=' d-block-800'>
                    <NavItems className={"list-unstyled d-flex justify-content-around align-items-center"} />
                </div>


                <div
                className='btn-smm '>
                    <button 
                    className='btn btn-dark px-sm-5 py-2 rounded-4'>
                        let's talk
                    </button>

                </div>

            </nav>

            <NavItems
                className={mobile ? ' list-unstyled d-flex flex-column justify-content-around px-5 border-bottom transition-nav' : "list-unstyled d-flex flex-column justify-content-around px-5 border-bottom  mobile-nav"} />
        </>
    )
}

export default Navbar
