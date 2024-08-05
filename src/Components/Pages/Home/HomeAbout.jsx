import React from 'react'
import Tabcard from '../../Utilities/TabCard'
import InformationCard from '../../Utilities/InformationCard'
import "./HomeAbout.css"

const HomeAbout = () => {
  return (
    <div className=' w-90 mx-auto'>
      <InformationCard 
      title={"WHAT WE DO"}
      heading={"Catalyzing Success Through Innovative Solutions"}
      description={"We specialize in crafting data-driven strategies, captivating content, and tailored solutions to amplify your brand’s online presence."}
      link={"VIEW ALL SOLUTIONS"}/>
      <Tabcard 
      tabvalues ={["Technology Studio", "Digital Marketting Studio", "Crative Studio", "OnDemand Resource Studio"]}/>

      <InformationCard title={"ABOUT DMOOP"}
      heading={"We Combines Customer Data with Throughtful Work"}
      description={"We’re a technology-driven force that tailors bespoke strategies for every client, aligning with their unique needs and objectives. Our track record speaks volumes: we’ve steered our clients towards a staggering $3 billion in sales and generated a remarkable 7.8 million leads, and counting."}
      link={"MORE ABOUT OUR UNIQUE APPROACH"}/>


      <div 
      className=' d-flex flex-wrap justify-content-center p-3 text-justify custom-col-md-10 px-5 mx-auto'>
        <div className=' custom-col-md-3 bt-dashed top-left-bullet'>
          <p 
          className=' col-md-8 py-2 mt-4 fw-semibold'>our customers have raised over $300m funds</p>
        </div>
        <div className=' custom-col-md-3 bt-dashed top-left-bullet'>
          <p 
          className=' col-md-8 py-2 mt-4 fw-semibold'> In over 2 years we never lost any customer</p>
        </div>
        <div className=' custom-col-md-3 bt-dashed top-left-bullet'>
          <p 
          className=' col-md-8 py-2 mt-4 fw-semibold'>We work with worlds fastest growing startup</p>
        </div>
        <div className=' custom-col-md-3 bt-dashed top-left-bullet'>
          <p 
          className=' col-md-8 py-2 mt-4 fw-semibold'>Distributed team of over 20 of the worlds best marketers, podcasters and copywritters</p>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
