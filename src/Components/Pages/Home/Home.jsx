import React from 'react'
import "./Home.css";
import Hero from './Hero';
import HomeAbout from './HomeAbout';
import OurCustomers from '../Customers/OurCustomers';
import WhyDmoop from '../WhyDmoop/WhyDmoop';
import Blog from './HomeBlog';
const Home = () => {
  return (
    <>  
        <Hero/>
        <div className=' w-100 bg-secondary bg-opacity-25 rounded-4'>
          <div className='col-md-10 d-flex justify-content-around p-4 m-3 flex-wrap'>
          <div>
            <h5>A PARNTER, 
              <br/>
              NOT VENDOR
            </h5>
          </div>
          <div>
            <p className=' fw-light'>
              Google cloud <br/>
            <b className=' fs-6 fw-medium'>
              partner
            </b>
            </p>
          </div>
          <div>
            <strong className=' fs-6 fw-medium'>
              Meta Buisness <br/>
              Partners

            </strong>
          </div>
          <div>
            <p>
              <span className=' fw-lighter'>
                Google
              </span> <br/>
              <span>Partner</span>
            </p>
          </div>
          <div>
            <p>
              <i className=' fw-semibold'>Shopify</i> <br/>
              <span>Partner</span>
            </p>
          </div>
        </div>
        </div>
        <HomeAbout/>
        <OurCustomers/>
        <WhyDmoop/>
        <Blog/>
    </>
  )
}

export default Home
