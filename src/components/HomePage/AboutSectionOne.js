import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSectionOne = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about-one`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (



    <>

      {
        about.map(a => <div>
          {/* Separator */}
          <div className="global-container">
            <div className="h-[1px] w-full bg-[#EAEDF0]" />
          </div>
          {/* Separator */}
          {/*...::: Content Section Start :::... */}
          <section id="content-section-1">
            {/* Section Spacer */}
            <div className="pb-20  md:pb-36 md:pt-32 lg:pb-28 xl:pb-[220px] xl:pt-[130px] xxl:pt-[200px]">
              {/* Section Container */}
              <div className="global-container">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_.8fr)_1fr] xl:gap-28 xxl:gap-[134px]">
                  {/* Content Left Block */}
                  <div className="jos order-2 mt-16 rounded-md md:order-1 md:mt-0" >
                    <div className=" relative h-[494px] rounded-tl-[20px] rounded-tr-[20px] bg-[url('https://i.ibb.co/CBSxWgm/content-shape.png')] bg-cover bg-no-repeat">
                      <img src={a.aboutImgOneOne} alt="th2-content-img-1.png" />
                    </div>
                  </div>
                  {/* Content Left Block */}
                  {/* Content Right Block */}
                  <div className="jos order-1 md:order-2" data-jos_animation="fade-right">
                    {/* Section Content Block */}
                    <h3 className="">
                    {a.aboutTextOne}
                    </h3>
                    <div className="mb-6">

                      <h2 className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                      {a.aboutHeadingOne}
                      </h2>
                    </div>
                    {/* Section Content Block */}
                    <div className="text-lg leading-[1.66]">
                      <p className="mb-7 last:mb-0">
                      {a.aboutDetailsOne}
                      </p>
                      <ul className="mt-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]">
                        <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet">
                        {a.pointOneOne}
                        </li>
                        <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet">
                        {a.pointOneTextOne}
                        </li>
                        <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet">
                        {a.pointTwoOne}
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Content Right Block */}
                </div>
              </div>
              {/* Section Container */}
            </div>
            {/* Section Spacer */}
          </section>
          {/*...::: Content Section End :::... */}
        </div>)
      }


    </>


  );
};

export default AboutSectionOne;
