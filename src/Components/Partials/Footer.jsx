import React from 'react'
import "./Partial.css"
import ContactCard from './ContactCard'
import MetaFooter from './MetaFooter'
import FooterItems from './FooterItems'

const Footer = () => {
    return (
        <footer
            className=' py-5 bg-dark bg-opacity-75 rounded-top-5 text-white'>
            <div
                className="col-md-10 mx-auto d-flex flex-wrap justify-content-around  align-items-center">

                <section className=' w-md-48 px-3'>
                    <h3
                        className=' display-5 fw-bold'>
                        Get a free consultation to boost your buisness
                    </h3>

                    <p 
                    className=' fw-semibold py-4 border-bottom border-white'>
                        A marketing audit entails assessing your company’s marketing endeavors and gauging their efficacy. Here’s what you can expect:
                    </p>

                    <ul className=' my-3'>
                        <li className=' my-3 lh-lg'>
                            Assess your target audience to determine whether there have been shifts or adjustments needed in your messaging to enhance your communication with them.
                        </li>
                        <li className=' my-3 lh-lg'>
                            Engage in a marketing audit, a comprehensive assessment of your company's marketing endeavors and their impact.
                        </li>
                        <li className=' my-3 lh-lg'>
                            Analyze your website to ensure it is user-friendly, mobile-responsive, and optimized for search engines.
                        </li>
                        <li className=' my-3 lh-lg'>
                            Review your content marketing efforts, including your blog posts, social media, and email marketing.
                        </li>
                    </ul>
                </section>

                <section className=' w-md-48'>
                    <ContactCard />
                    <div
                        className=' d-flex justify-content-around gap-3 mt-5 align-items-center'>
                        <div className=' col-md-4'>
                            <p className='fw-semibold'>
                                AWARDED MARKETTING AGENCY
                            </p>
                        </div>
                        <div 
                        className=' logo-container-2 py-4  custom-w-flex-2'>
                            <img src="/assets/clutch.png" width={"100%"} height={"100%"} alt='logo' />
                        </div>
                        <div 
                        className=' logo-container-2 py-4  custom-w-flex-2'>
                            <img src="/assets/expertize.png" width={"100%"} height={"100%"} alt='logo' />
                        </div>
                        <div 
                        className=' logo-container-2 py-4  custom-w-flex-2'>
                            <img src="/assets/excellence.png" width={"100%"} height={"100%"} alt='logo' />
                        </div>
                    </div>
                </section>

            </div>

            <MetaFooter/>
            <FooterItems/>

        </footer>
    )
}

export default Footer
