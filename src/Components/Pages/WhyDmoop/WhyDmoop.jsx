import React from 'react'
import "./WhyDmoop.css"
import More from './More'
import Team from './Team'
import CustomCard1 from '../../Utilities/CustomCard1'
const WhyDmoop = () => {
  return (
    <>
    <div 
    className=' d-grid justify-content-center'>
        <div
        className=' text-center mb-5'>
        <p className=' fw-semibold '>Why Dmoop</p>
        <h3 className=' display-6 fw-bold'>How we Drive revenue</h3>
        </div>
      <div 
      className="d-flex flex-wrap justify-content-center gap-4 mt-5">
        <CustomCard1 
        title='DRIVE WEBSITE TRAFFIC'
        Description="When the goal is to boost your website traffic , it's the perfect the moment to collaborate with an agency well versed in achieving your objectives"/>
        <CustomCard1 
        title='CREATE AND MANAGE POWERFUL AD CAMPAIGNS'
        Description="Through ad marketting , we craft targetted message designed to inspire individuals int taking decisive acctions"/>
        <CustomCard1 
        title='COLLECT ANALYZE AND DEPLOY MARKETTING DATA'
        Description="Accesss the necessary resources for gathering marketting data , such as googel analytics , and establish efficient protocols for its collection and in-depth analysis"/>
        <CustomCard1 
        title='IMPORVE BRAND MESSAGE AND CONVERSION'
        Description="Maintaining consistency in your brand marketting allows you to establish a memorable impression that remains imagined in the minds of consumers , fostering their return"/>
      </div>
    </div>
    <More/>
    <Team/>
    </>
  )
}

export default WhyDmoop
