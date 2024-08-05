import React from 'react'
import ProfileCard from "../../../Utilities/ProfileCard"
import AsideCard from "../../../Utilities/AsideCard"
import HeroCard from "../../../Utilities/HeroCard"
import TabCard from "../../../Utilities/TabCard"
import CustomCard1 from "../../../Utilities/CustomCard1"
import CustomCard2 from "../../../Utilities/CustomCard2"
import CustomAccordion from "../../../Utilities/CustomAccordion"
import FaqData from './FaqData'
const Creativestudio = () => {
  return (
    <>
        <div className=' col-md-10 mx-auto my-5 p-4'>
                <p className=' fw-semibold'>
                    CREATIVE STUDIO
                </p>
                <AsideCard 
                title={"Creative Design Studio"}
                leftPart={"Where imagination knows no bounds and innovation takes center stage. Dive into a world where ideas come to life through a symphony of colors, shapes, and concepts that captivate minds and leave lasting impressions."}
                rightPart={["Where Vision Meets Artistry","Services That Ignite Inspiration","Crafting Experiences, Shaping Perceptions","Collaboration Beyond Boundaries","The Studio Where Ideas Soar"]}/>
        </div>
        
        <div className=' col-md-11 mx-auto my-3 p-4'>
                <p className=' text-center'>DMOOP</p>
                <h2 className='fw-bold display-6 text-center'>
                    How our creative service can help grow your business
                </h2>
                <HeroCard
                    image='../.././assets/creative-stidio-1.jpg'
                    contents={[{
                        title: "Elevated Brand Identity",
                        para: "Standing out amidst the crowd is essential for business growth. Our creative services can help you establish a distinctive brand identity that sets you apart. We delve deep into understanding your business ethos, values, and market positioning. Leveraging this insight, we create designs that encapsulate your brand’s personality and communicate it cohesively across all touchpoints. A strong and consistent brand identity not only attracts customers but also instills trust and credibility. As your business expands, this identity becomes a beacon that guides customers back to you. With our creative services, you’re not just investing in design; you’re investing in a potent tool for fostering growth, customer loyalty, and a lasting presence in an ever-evolving business landscape."
                    }]}
                    dir='ltr' />
                <HeroCard
                    image='../.././assets/creative-studio-2.jpg'
                    contents={[{
                        title: "Strategic Visual Storytelling",
                        para: "In today’s dynamic marketplace, capturing your audience’s attention requires more than just a product or service – it demands a compelling narrative. Our creative services specialize in strategic visual storytelling. We meticulously craft designs that not only catch the eye but also convey your brand’s essence, values, and unique offerings. Whether it’s a captivating logo, a website that guides users seamlessly, or engaging social media visuals, our designs tell a story that resonates with your target audience. This not only drives brand recognition but also fosters an emotional connection that translates into customer loyalty and repeat business."
                    }]}
                    dir='rtl' />
        </div>

        <div className=' col-md-11 mx-auto my-3 p-4'>
                <p className=' fw-semibold text-center'>WHAT YOU GET</p>
                <h2 className=' display-6 fw-bold text-center mb-1'>
                    What is included in our paid search marketing services?
                </h2>
                <p
                    className='col-md-10 mx-auto fw-light text-center mb-5'>
                    We believe in the power of design to transcend boundaries, spark emotions, and leave an indelible mark. Our studio is a haven for innovation, where imagination takes the lead and ideas evolve into stunning realities.
                </p>
                <TabCard tabvalues={["Strategic Brilliance", "Diverse Expressions", "User centric Experiences", "Evolution in Motion"]} />
        </div>

        <div className=' col-md-11 mx-auto my-3 p-4 mb-5'>
                <p className=' fw-semibold text-center'>
                    CREATING SUCCESS
                </p>
                <h2
                    className=' fw-bold display-6 text-center'>
                    What makes our creative services so effective?
                </h2>
                <div
                    className="d-flex flex-wrap justify-content-center gap-4 mt-5">
                    <CustomCard1
                        title='Strategic Insight'
                        Description="We don't just create visually appealing designs; we start with a deep understanding of your goals, target audience, and industry. This strategic foundation ensures that every creative piece aligns with your objectives, resonates with your audience, and drives tangible results." 
                        widthclass='custom-w-flex-4'/>
                    <CustomCard1
                        title='Innovative Thinking'
                        Description="Our team thrives on innovation. We constantly explore new design trends, techniques, and technologies to infuse fresh ideas into every project. This proactive approach ensures that your creative materials are not only current but also possess a unique edge that captures attention." 
                        widthclass='custom-w-flex-4'/>
                    <CustomCard1
                        title='Collaborative Approach'
                        Description="We believe in the power of collaboration. We work closely with you, valuing your insights and involving you throughout the creative process. This partnership results in designs that are a true reflection of your vision while benefiting from our professional expertise." 
                        widthclass='custom-w-flex-4'/>
                </div>
        </div>

        <ProfileCard
        image={"../.././assets/profile-3.jpg"}
        quote={"“DMOOP service is light years ahead of the competition because of their intelligent, specialized and courteous account managers.”"}
        title={"Director of Marketting"}
        name={"Edurizon"}
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
                    FAQs about creative design studio
                </h2>
                <p className=' text-center '>
                    Looking to learn more about creative design studio for your business? Browse our FAQs:
                </p>
                <CustomAccordion data={FaqData}/>
            </div>

    </>
  )
}

export default Creativestudio;
