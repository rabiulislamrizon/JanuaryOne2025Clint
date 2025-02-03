import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import navigation styles

const TestimonialSectionTwo = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials-two`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);
  const [testimonialtext, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  return (
    <section id="testimonial-section">
      <div className="py-20 xl:py-[130px]">
        <div className="global-container">
          {
            testimonialtext.map(t=> <div className="jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]">
              <h2 className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
               {t.testimonialHeading}
              </h2>
            </div>)
          }
          

          {/* Swiper Carousel */}
          <Swiper
            
          >
            {testimonial.map((a, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-x-16 md:flex-row lg:gap-x-28 items-center xxl:items-baseline xl:gap-x-[134px]">
                  <div className="h-auto w-[300px] self-center overflow-hidden rounded-[10px] lg:w-[375px] xl:h-[494px] xl:w-[526px]">
                    <img
                      src={a.imageTwo}
                      alt="testimonial-img"
                      width={526}
                      height={494}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-[30px] flex-1 text-center md:text-left">
                    <div className="mb-5 font-clashDisplay text-2xl font-medium leading-[1.28] tracking-[1px] lg:mb-9 lg:text-[28px]">
                      {a.titleTwo}
                    </div>
                    <p className="mb-9 leading-[1.33] lg:mb-[50px] lg:text-lg xl:text-2xl">
                      {a.descTwo}
                    </p>
                    <div className="text-[21px] font-semibold leading-[1.42]">
                      - {a.personNameTwo}
                      <span className="mt-1 block text-lg font-normal leading-[1.66]">
                        {a.personTitleTwo}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionTwo;
