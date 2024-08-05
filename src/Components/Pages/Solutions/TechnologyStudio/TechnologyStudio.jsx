import React from 'react'
import ProfileCard from "../../../Utilities/ProfileCard"
import AsideCard from "../../../Utilities/AsideCard"
import HeroCard from "../../../Utilities/HeroCard"
import TabCard from "../../../Utilities/TabCard"
import CustomCard1 from "../../../Utilities/CustomCard1"
import CustomCard2 from "../../../Utilities/CustomCard2"
import CustomAccordion from "../../../Utilities/CustomAccordion"
import FaqData from './FaqData'
const TechnologyStudio = () => {
    return (
        <>
            <div className=' col-md-10 mx-auto my-5 p-4'>
                <p className=' fw-semibold'>
                    TECHNOLOGY STUDIO
                </p>
                <AsideCard 
                title={"TECHNOLOGY STUDIO"}
                leftPart={"Our Technology Studio is at the forefront of innovation, creating solutions that harness cutting-edge technology to address complex challenges. With expertise in software, AI, and IoT, we drive advancements across diverse industries. Our services include:"}
                rightPart={["AI,IOT and SOftware Development","Problem solving through Tech Solutions","Agile development methodologies","Landing page creation and optimization","Continuous learning and Adaptation"]}/>
            </div>
            <div className=' col-md-11 mx-auto my-3 p-4'>
                <p className=' text-center'>DMOOP</p>
                <h2 className='fw-bold display-6 text-center'>
                    HOW OUR TECH STUDIO CAN HELP GROW
                </h2>
                <HeroCard
                    image='/assets/technology-studio-1.jpg'
                    contents={[{
                        title: "Tech Innovation for Diverse Industries",
                        para: "We specialize in developing groundbreaking technology solutions that cater to a wide range of industries, from healthcare to finance, manufacturing to entertainment."
                    },
                    {
                        title: "AI, IoT, and Software Development",
                        para: "Our team of experts excels in artificial intelligence, internet of things, and software development. We create intelligent systems, connected devices, and robust software applications."
                    },]}
                    dir='ltr' />
                <HeroCard
                    image='/assets/technology-studio-2.webp'
                    contents={[{
                        title: "Problem-Solving Through Tech Solutions",
                        para: "We thrive on solving intricate problems using technology as our tool. Our solutions streamline processes, optimize workflows, and address challenges in unique and effective ways."
                    }, {
                        title: "Agile Development Methodologies",
                        para: "Embracing agile methodologies, we ensure quick iterations and collaboration, adapting to changing requirements and delivering incremental value throughout the development lifecycle."
                    },]}
                    dir='rtl' />
            </div>
            <div className=' col-md-11 mx-auto my-3 p-4'>
                <p className=' fw-semibold text-center'>WHAT YOU GET</p>
                <h2 className=' display-6 fw-bold text-center mb-1'>
                    Innovating Solutions for a Digital World
                </h2>
                <p
                    className='col-md-10 mx-auto fw-light text-center mb-5'>
                    Our technology studio thrives on interdisciplinary collaboration, embraces the latest tech trends, offers tailored solutions, and ensures future-ready innovations. Partner with us to navigate the dynamic digital landscape with confidence.
                </p>
                <TabCard tabvalues={["Cutting Edge Innovations", "Customized Solutions,", "Expertize Across Disciplines", "Future Ready Innovation"]} />
            </div>
            <div className=' col-md-11 mx-auto my-3 p-4 mb-5'>
                <p className=' fw-semibold text-center'>
                    CREATING SUCCESS
                </p>
                <h2
                    className=' fw-bold display-6 text-center'>
                    What makes our technology services so effective?
                </h2>
                <div
                    className="d-flex flex-wrap justify-content-center gap-4 mt-5">
                    <CustomCard1
                        title='Holistic Expertise and Collaboration'
                        Description="Our tech studio's success lies in our ability to bring together a diverse team of experts across various domains. By fostering collaboration among software developers, designers, data scientists, and more, we create holistic solutions that address multifaceted challenges. This collaborative approach ensures that our products and services are not only technically robust but also user-centric and aligned with market demands." 
                        widthclass='custom-w-flex-4'/>
                    <CustomCard1
                        title='Innovation and Adaptability'
                        Description="We thrive on innovation and adaptability, constantly seeking out the latest technological advancements and methodologies. Our commitment to staying at the forefront of tech trends empowers us to deliver solutions that are cutting-edge and relevant. This adaptability also allows us to swiftly respond to changes in the tech landscape, ensuring that our clients always receive solutions that are current and future-proof." 
                        widthclass='custom-w-flex-4'/>
                    <CustomCard1
                        title='Client-Centric Customization'
                        Description="Our success stems from our unwavering dedication to understanding and addressing our clients' unique needs. We believe in crafting customized solutions that cater to specific challenges and goals. Through close collaboration with our clients, we ensure that our products and services are tailored to their requirements, leading to not only successful project outcomes but also long-term partnerships built on trust and value." 
                        widthclass='custom-w-flex-4'/>
                </div>
            </div>
            <ProfileCard
            image={"/assets/priyank.webp"}
            quote={"“DMOOP tech service is light years ahead of the competition because of their intelligent, specialized and courteous account managers.”"}
            title="DIrector of Operations"
            name={"priyank"}/>
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
                    Description='With a track record of delivering over 100 successful projects, we’ve proven our expertise and commitment to excellence in every endeavor.'/>
                    <CustomCard2 
                    title='20+'
                    Description='Our dynamic team comprises more than 20 skilled developers, working collaboratively to create innovative solutions.'/>
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
                    FAQs about technology studio
                </h2>
                <p className=' text-center '>
                    Looking to learn more about technology services for your business? Browse our FAQs:
                </p>
                <CustomAccordion data={FaqData}/>
            </div>

        </>
    )
}

export default TechnologyStudio
