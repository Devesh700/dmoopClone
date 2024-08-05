import React from 'react'
import ProfileCard from "../../../Utilities/ProfileCard"
import AsideCard from "../../../Utilities/AsideCard"
import HeroCard from "../../../Utilities/HeroCard"
import TabCard from "../../../Utilities/TabCard"
import CustomCard1 from "../../../Utilities/CustomCard1"
import CustomCard2 from "../../../Utilities/CustomCard2"
import CustomAccordion from "../../../Utilities/CustomAccordion"
import FaqData from './FaqData'
const OndemandDevelopers = () => {
  return (
    <>
        <div className=' col-md-10 mx-auto my-5 p-4'>
                <p className=' fw-semibold'>
                    ON DEMAND DEVELOPERS
                </p>
                <AsideCard 
                title={"On-Demand Developers Services"}
                leftPart={"Where innovation knows no bounds and digital aspirations turn into reality. Our platform connects you with a pool of talented developers who are ready to bring your projects to life with expertise and precision."}
                rightPart={["Tailored expertise","Financial Engagement","Rapid deployment","Quality Assurance"]}/>
        </div>
        
        <div className=' col-md-11 mx-auto my-3 p-4'>
                <p className=' text-center'>DMOOP</p>
                <h2 className='fw-bold display-6 text-center'>
                    How our on-demand developer service can help grow
                </h2>
                <HeroCard
                    image='/assets/developer-1.jpg'
                    contents={[{
                        title: "Services That Drive Digital Evolution",
                        para: "Whether it’s web development, mobile app creation, e-commerce platforms, or custom software solutions, our on-demand developers possess the diverse skill set necessary for a seamless execution. From front-end design to back-end functionality, we cover every aspect, ensuring a harmonious user experience and optimized performance."
                    }]}
                    dir='ltr' />
                <HeroCard
                    image='/assets/developers-2.jpg'
                    contents={[{
                        title: "Agile Development for Rapid Results",
                        para: "In the ever-evolving digital landscape, agility is key. Our developers embrace agile methodologies, enabling us to adapt swiftly to changing requirements and market dynamics. This approach ensures that your projects are delivered with efficiency and speed, keeping you ahead of the competition."
                    }]}
                    dir='rtl' />
        </div>

        <div className=' col-md-11 mx-auto my-3 p-4'>
                <p className=' fw-semibold text-center'>WHAT YOU GET</p>
                <h2 className=' display-6 fw-bold text-center mb-1'>
                    What is included in our on-demand developer services?
                </h2>
                <p
                    className='col-md-10 mx-auto fw-light text-center mb-5'>
                    Embrace the future of development with our On-Demand Developers Services. Harness cutting-edge technologies, tap into specialized skills, and propel your projects forward with confidence.
                </p>
                <TabCard tabvalues={["Web Development", "Mobile App Development", "Software Development", "AI and Machine Learning"]} />
        </div>

        <div className=' col-md-11 mx-auto my-3 p-4 mb-5'>
                <p className=' fw-semibold text-center'>
                    CREATING SUCCESS
                </p>
                <h2
                    className=' fw-bold display-6 text-center'>
                    What makes our on-demand services so effective?
                </h2>
                <div
                    className="d-flex flex-wrap justify-content-center gap-4 mt-5">
                    <CustomCard1
                        title='Agile Expertise'
                        Description="Our handpicked team of experts is chosen for their specific skill sets, ensuring that the right talent is assigned to each project. This agility guarantees that your project receives the tailored attention it deserves, leading to optimal outcomes." 
                        widthclass='custom-w-flex-4'/>
                    <CustomCard1
                        title='Flexibility & Scalability'
                        Description="Whether you need a single developer or an entire team, our model adapts to your needs. Scale up or down as your project evolves, enabling you to optimize resources and costs without compromising on quality." 
                        widthclass='custom-w-flex-4'/>
                    <CustomCard1
                        title='Efficiency in Execution'
                        Description="We recognize the value of time in today's fast-paced world. Our streamlined processes and seamless onboarding ensure that projects kick-off swiftly, resulting in quicker time-to-market and a competitive edge." 
                        widthclass='custom-w-flex-4'/>
                </div>
        </div>

        <ProfileCard
        image={"/assets/profile-4.jpg"}
        quote={"“The team quickly grasped our needs, providing top-notch solutions with a personal touch. Their agility and expertise transformed our vision into reality. A reliable partner for achieving outstanding results.”"}
        title={"Project Director"}
        name={"Alex"}
        />

         <div className=' col-md-10 mx-auto my-3 p-4 mt-5'>
                <p className=' text-center fw-semibold'>
                    THE PROOF IS IN THE NUMBERS
                </p>
                <h2 className=' fw-bold display-6 mb-5 text-center'>
                    Like Numbers? You Will Love Our Rates
                </h2>
                <div 
                className="d-flex flex-wrap justify-content-center gap-4">
                    <CustomCard2 
                    title='100+' 
                    Description='With a track record of delivering over 100 successful projects, we’ve proven our expertise and commitment to excellence in every endeavor.
                    '/>
                    <CustomCard2 
                    title='20+'
                    Description='Our dynamic team comprises more than 20 skilled developers, working collaboratively to create innovative solutions'/>
                    <CustomCard2
                    title='45%'
                    Description='A testament to our quality and client satisfaction, 45% of our business comes from referrals, showcasing the trust and value we provide.'/>
                </div>
        </div>

         <div className=' col-md-10 mx-auto my-3 p-4 mt-5'>
                <p className=' text-center fw-semibold'>
                    FAQ
                </p>
                <h2 className=' fw-bold display-6 text-center my-3'>
                    FAQs about on-demand services
                </h2>
                <p className=' text-center '>
                    Looking to learn more about on-demand services for your business? Browse our FAQs:
                </p>
                <CustomAccordion data={FaqData}/>
            </div>

    </>
  )
}

export default OndemandDevelopers;
