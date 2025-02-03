import React, { useEffect, useState } from 'react';

const VideoSectionHomeTwo = () => {

  const [stepwork, setWork] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/videos-two`)
      .then((res) => res.json())
      .then((info) => setVideo(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/worksec`)
      .then((res) => res.json())
      .then((info) => setWork(info));
  }, []);


  return (







    <>

      {
        video.map(a => <section id="content-intregrates-section">
          <div className="relative z-[1] overflow-hidden bg-colorCodGray text-white">
            {/* Section Spacer */}
            <div className="py-20 xl:py-[130px]">
              {/* Section Spacer */}
              <div className="global-container">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1fr)_.8fr] xl:gap-28 xxl:gap-[134px]">
                  <div className="jos">
                    {/* Section Content Block */}
                    <div className="mb-6">
                      <h2 className="font-clashDisplay text-4xl font-medium leading-[1.06] text-white sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                        {a.headingVideoTwo}
                      </h2>
                    </div>
                    {/* Section Content Block */}
                    <p className="mb-7 last:mb-0">
                      {a.videoImageTwo}
                    </p>
                    <ul className="my-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]">
                      <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet">
                        {a.videopointOneTwo}
                      </li>
                      <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet">
                        {a.videopointTwoTwo}
                      </li>
                    </ul>
                    <a href={a.videoButtonURLTwo} className="button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[18px] text-white after:bg-colorOrangyRed hover:text-white">
                      {a.videoButtonTextTwo}
                      <img src="assets/img/th-2/icon-white-long-arrow-right.svg" alt="icon-white-long-arrow-right" /></a>
                  </div>
                  <div className="flex flex-col p-5 rounded-[30px] bg-gradient-to-t from-[rgba(255,255,255,.1)] to-[rgba(0,0,0,0.5)] py-[124px]">
                    {/* Logo Horizontal Animation */}
                    <div className="">









                    </div>
                    {/* Logo Horizontal Animation */}
                    {/* Logo Horizontal Animation */}
                    <div className="relative w-full max-w-[500px] mx-auto overflow-hidden rounded-lg lg:max-w-[700px]" style={{ paddingTop: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={a.videoLinkTwo}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Logo Horizontal Animation */}
                  </div>

                </div>
              </div>
              {/* Section Spacer */}
            </div>
            {/* Section Spacer */}
            <div className="absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#5636C7] to-[#5028DD] blur-[250px]">
            </div>
          </div>
        </section>)
      }


    </>




  );
};

export default VideoSectionHomeTwo;