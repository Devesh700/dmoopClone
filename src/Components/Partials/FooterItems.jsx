import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterItems = () => {
  return (
    <footer className=' d-flex flex-wrap justify-content-around col-md-10 mx-auto custom-my-10'>
        <div>
            <p className=' fw-semibold mb-4'>SOLUTIONS</p>
            <NavLink className=" link-light text-decoration-none my-2" to="/solutions/technologystudio">Technology Studio</NavLink>
            <NavLink className=" link-light text-decoration-none my-2" to="/solutions/digital-marketting-studio">Digital Marketting Studio</NavLink>
        </div>
        <div>
            <p className=' fw-semibold mb-4'>&emsp; </p>
            <NavLink className=" link-light text-decoration-none my-2">Digital Marketting studio</NavLink>
            <NavLink className=" link-light text-decoration-none my-2">On Demand Developers</NavLink>
        </div>
        <div>
            <p className=' fw-semibold mb-4'>WHO WE ARE</p>
            <NavLink className=" link-light text-decoration-none my-2">Success stories</NavLink>
            <NavLink className=" link-light text-decoration-none my-2">Awards</NavLink>
            <NavLink className=" link-light text-decoration-none my-2">Contact</NavLink>
        </div>
        <div>
            <p className=' fw-semibold mb-4'>Work</p>
            <NavLink className=" link-light text-decoration-none my-2">About us</NavLink>
            <NavLink className=" link-light text-decoration-none my-2">Blogs</NavLink>
            <NavLink className=" link-light text-decoration-none my-2">Careers</NavLink>
            <NavLink className=" link-light text-decoration-none my-2">Meet the Team</NavLink>
        </div>
    </footer>
  )
}

export default FooterItems
