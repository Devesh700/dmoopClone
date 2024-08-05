import React from 'react'

const Team = () => {
  return (
    <div 
    className=' d-flex flex-wrap justify-content-center align-items-center gap-3 px-sm-5 px-1 custom-py-10 mb-5 bg-brownish'>
        <section className=' col-md-5'>
            <p className=' fw-semibold'>
                THE TEAM BEHIND
            </p>
            <h3 className=' fw-bold display-5'>
                Team of over 30 <br/>
                Experts
            </h3>
            <p className=' fw-light text-justify pe-5'>
                DMOOP is dedicated to cultivating robust and enduring client alliances. Leveraging our extensive industry acumen and proficiency, we furnish the indispensable insights to fortify and advance your brand, propel business efficacy, and manage risk effectively.
            </p>
            <button className=' btn btn-dark px-4 py-2 rounded-5'>MEET THE TEAM</button>
        </section>

        <section className='col-md-5 position-relative'>
            <div className=' custom-w-500 rounded-5 overflow-hidden'>
                <img src='/assets/team-image-1.jpg' width={"100%"} height={"100%"} alt='team-image'/>
            </div>
            <div className=' custom-w-200 second-image rounded-5 overflow-hidden'>
                <img src='/assets/team-image-2.jpg' width={"100%"} height={"100%"} alt='team-image'/>
            </div>
        </section>
    </div>
  )
}

export default Team
