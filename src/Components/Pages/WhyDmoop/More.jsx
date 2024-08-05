import React, { useState } from 'react'
import BrandsContainer from '../../Utilities/BrandsContainer';

const More = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, title: "Edward kennedy", footer: "Director , Client Experience", content: `"Working with DMOOP digital marketting team provided us with the expert guidance we needed to take our firm's marketting , in the digital realm and beyond to another level. Early in the project , we threw a curveball in that we decided to refreshing our brand and launching a more robust digital presence."` },
    { id: 1, title: "Edward kennedy", footer: "Director , Client Experience", content: `The entire staff at DMOOP has been phenomenal. They are quick with their replies and incredibly helpful` }
  ];

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  return (
    <>
      <div
        className='d-flex flex-wrap align-items-center custom-h-50vh '>
        <section className=' col-md-6 px-5 border-end'>
          <h3
            className=' display-5 fw-bold my-3'>
            Driving digital
            <br />
            revenue for our 100+<br />
            satisfied customers
          </h3>
          <p
            className='d-flex bg-light w-fit px-5'>
            <strong className=' mx-4'>21%</strong>
            <p>
              Average traffic <br />
              increase for Clients
            </p>
          </p>
        </section>
        <section
          className='col-md-6 px-5 slider-container font-monospace'>
          <div className="slider">
            {slides.map((slide, index) => (
              <div key={slide.id} className={index === currentSlide ? "slide active" : "slide"}>
                <p>{slide.content}</p>
                <p className=' fw-light'>{slide.title}</p>
                <p className=' fw-lighter'>{slide.footer}</p>
              </div>
            ))}
          </div>
          <button id="prevBtn" onClick={prevSlide}>&larr; </button>
          <button id="nextBtn" onClick={nextSlide}>&rarr;</button>

        </section>

      </div>
      <div
      className=' col-md-10 mx-auto'>
        <BrandsContainer
      images={[
      "/assets/jockey-logo.png",
      "/assets/pizza-logo.png",
      "/assets/maple-logo.png",
      "/assets/Amar_Ujala-logo.png",
      "/assets/petmania-logo.svg",
      "/assets/unnamed-removebg-logo.png"]}/>
      </div>
    </>
  )
}

export default More
