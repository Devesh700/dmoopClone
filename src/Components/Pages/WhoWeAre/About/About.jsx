import React from 'react'
import "../whoweare.css"
import HeroCard from '../../../Utilities/HeroCard';
import CustomCard3 from '../../../Utilities/CustomCard3';
import InformationCard from '../../../Utilities/InformationCard';
import BrandsContainer from '../../../Utilities/BrandsContainer';
import Team from '../../WhyDmoop/Team';

const About = () => {
    return (
        <>
            <div className=' col-md-10 mx-auto my-5 p-4'>
                <p className=' fw-semibold'>
                    About us
                </p>
                <HeroCard image='../.././assets/abouthero.jpg'
                    contents={[{ title: "Digital solutions designed for your business" }]}
                    dir='rtl' />
            </div>
            <div className=' col-md-10 mx-auto p-4'>
                <p className=' fw-bold fs-3 col-md-8 mx-auto mb-5'>
                    At Dmoop.com, we are a dynamic Marketing and Technology agency committed to pushing boundaries and delivering innovative solutions. Our team combines creative flair with technical expertise to drive your brand’s success in the ever-evolving digital landscape.
                </p>

                <img src='../../.../.././assets/about-hero-2.jpg' alt='about-hero' width={"100%"} className='rounded-5 custom-ap-2' />
            </div>

            <div className=' col-md-10 mx-auto my-5 '>
                <h2 className=' fw-bold display-6 text-center mb-5'>
                    OUR VALUES
                </h2>

                <div
                    className="d-flex flex-wrap justify-content-center gap-4">
                    <CustomCard3
                        title='Innovation'
                        Description='We thrive on pushing boundaries and consistently seek new ways to enhance the learning experience.' />
                    <CustomCard3
                        title='Accessbility'
                        Description="Education should be accessible to all. We're dedicated to creating inclusive solutions that cater to diverse learning needs." />
                    <CustomCard3
                        title='Engagement'
                        Description="Learning should be exciting and interactive. We're passionate about making every lesson a captivating journey." />
                    <CustomCard3
                        title='Empowerment'
                        Description="We believe in the transformative power of education. Our goal is to empower learners and educators to achieve their full potential." />
                </div>
            </div>

            <div className=' col-md-11 mx-auto custom-my-10'>
                <InformationCard
                    title={"TECH/MARKETING SOLUTIONS PROVIDER"}
                    heading={"Dmoop is your go-to partner for cutting-edge solutions."}
                    description={"We provide an all-encompassing range of services that seamlessly integrate marketing expertise with the latest in technological advancements. Our offerings empower businesses to leverage innovative strategies, ensuring a strong digital presence and impactful results."}
                    link={"DMOOP SOLUTIONS"} />
            </div>

            <div
                className=' col-md-10 mx-auto my-5'>
                    <p
                    className=' fw-bold'>OUR CLIENTS</p>
                <BrandsContainer
                    images={[
                        "../../.../.././assets/jockey-logo.png",
                        "../../.../.././assets/pizza-logo.png",
                        "../../.../.././assets/maple-logo.png",
                        "../../.../.././assets/Amar_Ujala-logo.png",
                        "../../.../.././assets/petmania-logo.svg",
                        "../../.../.././assets/unnamed-removebg-logo.png"]} />
            </div>
            <Team/>
        </>
    )
}

export default About
