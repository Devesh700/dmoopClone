import React from 'react'
import ProfileCard from "../../../Utilities/ProfileCard"
import AsideCard from "../../../Utilities/AsideCard"
import HeroCard from "../../../Utilities/HeroCard"
import TabCard from "../../../Utilities/TabCard"
import CustomCard1 from "../../../Utilities/CustomCard1"
import CustomCard2 from "../../../Utilities/CustomCard2"
import CustomAccordion from "../../../Utilities/CustomAccordion"
import FaqData from './FaqData'
const DigitalMarketting = () => {
  return (
    <>
        <div className=' col-md-10 mx-auto my-5 p-4'>
                <p className=' fw-semibold'>
                    DIGITAL MARKETTING STUDIO
                </p>
                <AsideCard 
                title={"ROI-Driven Marketing"}
                leftPart={"Are you ready to transform your online presence into a powerful revenue-generating machine? Look no further. Our cutting-edge digital marketing solutions are designed to skyrocket your brand, boost your sales, and create lasting connections with your target audience."}
                rightPart={["Search Engine Optimization","Social Media Management","Search Engine Marketing","Email Marketing","Influencer Marketing","Analytics and Reporting"]}/>
        </div>
        
        <div className=' col-md-11 mx-auto my-3 p-4'>
                <p className=' text-center'>DMOOP</p>
                <h2 className='fw-bold display-6 text-center'>
                    How our marketing service can help grow your revenue
                </h2>
                <HeroCard
                    image='../.././assets/digitalmarketting.webp'
                    contents={[{
                        title: "Strategic Expertise",
                        para: "Our team of seasoned digital marketing experts doesn’t just follow trends; we set them. With years of experience in the ever-evolving digital landscape, we craft strategies that are tailored to your business’s unique needs, ensuring optimal results."
                    },
                    {
                        title: "Data Driven Approach",
                        para: "Leave the guesswork behind. We base our strategies on hard data and in-depth analytics, ensuring that every move is calculated and every campaign is optimized for maximum ROI."
                    },]}
                    dir='ltr' />
                <HeroCard
                    image='../.././assets/digitalmarketting-2.webp'
                    contents={[{
                        title: "Comprehensive Services",
                        para: "From SEO and content marketing to social media management and paid advertising, we offer a full spectrum of digital marketing services under one roof. This means a cohesive strategy that works seamlessly across all platforms."
                    }, {
                        title: "Creativity Unleashed",
                        para: "Our innovative and creative approach sets us apart. We don’t just think outside the box; we redefine it. Expect captivating content, eye-catching visuals, and campaigns that leave a lasting impact."
                    },]}
                    dir='rtl' />
        </div>

        <div className=' col-md-11 mx-auto my-3 p-4'>
                <p className=' fw-semibold text-center'>WHAT YOU GET</p>
                <h2 className=' display-6 fw-bold text-center mb-1'>
                    What is included in our marketing services?
                </h2>
                <p
                    className='col-md-10 mx-auto fw-light text-center mb-5'>
                    When you partner with Numerique, you’ll gain access to our full range of paid SEM services. These services are designed to optimize every facet of your paid advertising, including:
                </p>
                <TabCard tabvalues={["Integrated Demand Generation Campaign", "Social Media Services", "Search ENgine Marketting", "Crafting Brands Services"]} />
        </div>

        <div className=' col-md-11 mx-auto my-3 p-4 mb-5'>
                <p className=' fw-semibold text-center'>
                    CREATING SUCCESS
                </p>
                <h2
                    className=' fw-bold display-6 text-center'>
                    What makes our paid search management services so effective?
                </h2>
                <div
                    className="d-flex flex-wrap justify-content-center gap-4 mt-5">
                    <CustomCard1
                        title='Match search intent at every touchpoint'
                        Description="Picking the right keywords will only get you so far. We understand how to match the search intent of your target keywords with ad copy, CTAs, and landing pages that turn clicks into ROI." 
                        widthclass='custom-w-flex-4'/>
                    <CustomCard1
                        title='Experienced PPC management'
                        Description="How do you know what works if you’ve never gotten results before? Our paid search managers have years of experience managing successful campaigns in a variety of industries. And we have the happy clients to back it up." 
                        widthclass='custom-w-flex-4'/>
                    <CustomCard1
                        title='Google Premier Partnership'
                        Description="Working with a Google Partner agency gives you a leg up. Not only are we certified in all types of Google advertising, but we also get access to direct support and other resources provided by Google. Your campaigns benefit directly from this exclusive insider knowledge." 
                        widthclass='custom-w-flex-4'/>
                </div>
        </div>

        <ProfileCard
        image={"../.././assets/profile-2.webp"}
        quote={"“DMOOP’s PPC service excels far beyond the competition thanks to their astute, specialized, and highly professional account managers.”"}
        title={"Director of Marketting"}
        name={"Lawyer's Direct"}
        />

         <div className=' col-md-10 mx-auto my-3 p-4 mt-5'>
                <p className=' text-center fw-semibold'>
                    THE PROOF IS IN THE NUMBERS
                </p>
                <h2 className=' fw-bold display-6 mb-5 text-center'>
                    Why paid search Ads can bring in the numbers
                </h2>
                <div 
                className="d-flex flex-wrap justify-content-center gap-4">
                    <CustomCard2 
                    title='38%' 
                    Description='of growth rate in brand awareness for businesses that start doing Search Ads'/>
                    <CustomCard2 
                    title='100%'
                    Description='of total clicks on search results page are Search Ads, serving as proof that a dependence on SEO alone limits your potential for more traffic and leads.'/>
                    <CustomCard2
                    title='82%%'
                    Description='of clicks on Search Ads are more likely to buy, making for better leads'/>
                </div>
        </div>

         <div className=' col-md-10 mx-auto my-3 p-4 mt-5'>
                <p className=' text-center fw-semibold'>
                    FAQ
                </p>
                <h2 className=' fw-bold display-6 text-center my-3'>
                    FAQs about paid search management
                </h2>
                <p className=' text-center '>
                    Looking to learn more about paid search management for your business? Browse our FAQs:
                </p>
                <CustomAccordion data={FaqData}/>
            </div>

    </>
  )
}

export default DigitalMarketting
