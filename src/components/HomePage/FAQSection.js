import React, { useEffect, useState } from 'react';

const FAQSection = () => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const [faq, setFAQsection] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/faq`)
      .then((res) => res.json())
      .then((info) => setFAQsection(info));
  }, []);

  // Fetch FAQ items data
  useEffect(() => {
    fetch(`http://localhost:5000/faq-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);

  // Accordion toggle handler
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq-section">
      {/* Section Spacer */}
      <div className="pb-40 xl:pb-[220px]">
        {/* Section Container */}
        <div className="global-container">
          {/* Section Content Block */}
          {
            faq.map(b => <div className="jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]">
              <h2 className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                {b.faqHeading}
              </h2>
            </div>)

          }

          {/* Section Content Block */}
          {/* Accordion */}
          <ul className="accordion flex flex-col gap-y-6">
            {items.map((item, index) => (
              <li
                key={index}
                className={`jos accordion-item rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${activeIndex === index ? 'active' : 'active'
                  }`}
              >
                <div
                  className="accordion-header flex items-center justify-between cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h5 className="font-clashDisplay text-xl font-medium leading-[1.2] tracking-[1px] lg:text-[28px]">
                    {item.accodingTitle}
                  </h5>
                  <div className="accordion-icon is-blue">
                    {activeIndex === index ? (
                      <img src="https://i.ibb.co.com/FkQmwp6/plus-white-1.png" alt="minus" />
                    ) : (
                      <img src="https://i.ibb.co.com/FkQmwp6/plus-white-1.png" alt="plus" />
                    )}
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="accordion-content mt-4 text-lg text-[#2C2C2C]">
                    <p>{item.accodingText}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {/* Accordion */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default FAQSection;
