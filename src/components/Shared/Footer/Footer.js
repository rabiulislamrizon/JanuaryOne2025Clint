import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);
  const [logo, setLogo] = useState([]);
  const [footerAddress, setFooterAddress] = useState([]);
  const [isScrollVisible, setIsScrollVisible] = useState(false); // State for "Scroll to Top" button visibility

  // Fetch logo data
  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);

  // Fetch footer address
  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, []);

  // Fetch social links
  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  // Fetch copyright
  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, []);

  // Handle form submission for subscribers
  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;

    const addItem = { subemail };

    fetch(`http://localhost:5000/add-subscriber`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Subscription request sent successfully!");
      });
  };

  // Show "Scroll to Top" button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsScrollVisible(true);
      } else {
        setIsScrollVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (



    <>

      {
        footerSocial.map(s => <footer id="footer-2" className="relative">
          <div className="absolute -top-[77px] left-1/2 z-10 h-[77px] w-full -translate-x-1/2 bg-[url(../img/th-2/arc-bottom-shape-1.svg)] bg-cover bg-center bg-no-repeat">
          </div>
          <div className="relative z-[1] overflow-hidden bg-black text-white">
            {/* Section Container */}
            <div className="pb-10 pt-1 lg:pt-7 xl:pt-[68px]">
              {/* Footer Top */}
              <div>
                {/* Section Container */}
                <div className="global-container">
                  {/* Section Content Block */}
                  <div className="mx-auto mb-10 text-center md:mb-16 md:max-w-lg lg:mb-20 lg:max-w-xl xl:max-w-3xl">
                    <h2 className="font-clashDisplay text-4xl font-medium leading-[1.06] text-white sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                      Let's get started and enjoy the Newsletter
                    </h2>
                  </div>
                  {/* Section Content Block */}
                  {/* Footer Subscriber Form */}
                  <form onSubmit={handleSubscriber} action="#" method="post">
                    <div className="relative mx-auto h-[60px] max-w-[500px]">
                      <input type="email" name="subemail" id="newsletter-email" placeholder="Enter your email" className="p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-white bg-transparent px-[24px] pr-20 outline-none sm:pr-48" required />
                      <button type="submit" className="absolute right-[5px] top-[50%] inline-flex h-[50px] -translate-y-[50%] items-center gap-x-[10px] rounded-[50px] bg-colorViolet px-6 transition-all duration-300 hover:bg-colorOrangyRed">
                        <span className="hidden sm:inline-block">Get Started</span>
                        <img src="assets/img/th-1/arrow-right-large.svg" alt="newsletter" />
                      </button>
                    </div>
                  </form>
                  {/* Footer Subscriber Form */}
                </div>
                {/* Section Container */}
              </div>
              {/* Footer Top */}
              {/* Footer Center */}
              <div className="mt-16 xl:mt-20 xxl:mt-[100px]">
                {/* Section Container */}
                <div className="global-container">
                  {/* Footer Widgets Block */}
                  <div className="grid gap-x-10 gap-y-[60px] sm:grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between lg:gap-x-20 text-white">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                      {/* About Company Section */}
                      <div className="flex flex-col gap-y-6 ">
                        {/* <h4 className="text-[21px] font-semibold capitalize text-white">
                          About Company
                        </h4> */}
                        <div>
                          {
                            logo.map(l => <a href="/">
                              <img src={l.logo} alt="logo-light" width={200} height={75} />
                            </a>)
                          }

                          <p className="mt-5">
                            {s.aboutText}
                          </p>
                        </div>
                      </div>

                      {/* Quick Links Section */}
                      <div className="flex flex-col gap-y-6 items-center justify-center">
                        <h4 className="text-[21px] font-semibold capitalize text-white">
                          Quick Links
                        </h4>
                        <ul className="flex flex-col gap-y-[10px] capitalize text-center">
                          <li>
                            <a href="/" className="transition-all duration-300 ease-linear hover:text-colorOrangyRed text-white">Home</a>
                          </li>
                          <li>
                            <a href="#services-sec" className="transition-all duration-300 ease-linear hover:text-colorOrangyRed text-white">Services</a>
                          </li>
                          <li>
                            <a href="#pricing-sec" className="transition-all duration-300 ease-linear hover:text-colorOrangyRed text-white">Pricing</a>
                          </li>
                          <li>
                            <a href="#contact-sec" className="transition-all duration-300 ease-linear hover:text-colorOrangyRed text-white">Contact</a>
                          </li>
                        </ul>
                      </div>

                      {/* Socials Section */}
                      <div className="flex flex-col gap-y-6 items-center justify-center">
                        <h4 className="text-[21px] font-semibold capitalize text-white">
                          Socials
                        </h4>
                        <ul className="flex flex-col gap-y-[15px] capitalize text-center">
                          <li>
                            <a href={s.fblink} className="group flex items-center gap-x-3 text-white">
                              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-colorViolet">
                                <img src="assets/img/th-1/facebook-icon-white.svg" alt="facebook-icon-white" width={14} height={14} />
                              </div>
                              <span className="inline-block flex-1">Facebook</span>
                            </a>
                          </li>
                          <li>
                            <a href={s.youlink} className="group flex items-center gap-x-3 text-white">
                              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-colorViolet">
                                <img src="assets/img/th-1/twitter-icon-white.svg" alt="twitter-icon-white" width={14} height={14} />
                              </div>
                              <span className="inline-block flex-1">Twitter</span>
                            </a>
                          </li>
                          <li>
                            <a href={s.inslink} className="group flex items-center gap-x-3 text-white">
                              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-colorViolet">
                                <img src="assets/img/th-1/instagram-icon-white.svg" alt="instagram-icon-white" width={14} height={14} />
                              </div>
                              <span className="inline-block flex-1">Instagram</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>



                  </div>
                  {/* Footer Widgets Block */}
                </div>
                {/* Section Container */}
              </div>
              {/* Footer Center */}
              {/* Footer Separator */}
              <div className="global-container">
                <div className="mb-10 mt-[60px] h-[1px] w-full bg-white" />
              </div>
              {/* Footer Separator */}
              {/* Footer Bottom */}
              <div>
                <div className="global-container">
                  <div className=" items-center justify-center gap-5 text-center md:justify-between md:text-left">

                    {
                      footerCopyright.map(c => <p>{c.copyrightText}</p>)
                    }


                  </div>
                </div>
              </div>
              {/* Footer Bottom */}
            </div>
            {/* Section Container */}
            {/* Background Gradient */}
            <div className="absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#5636C7] to-[#5028DD] blur-[250px]">
            </div>
            {/* Scroll to Top Button */}
            {isScrollVisible && (
              <button
                className="btn position-fixed bottom-0 end-0 m-3"
                onClick={scrollToTop}
                style={{
                  zIndex: 1000,
                  backgroundColor: '#ff0000',  // Red color for the button
                  borderRadius: '50%',         // Make the button fully round
                  padding: '20px',              // Adjust padding for appropriate size
                  color: 'white',              // White text color for contrast
                  border: 'none',              // Remove border
                  fontSize: '15px',            // Make text size appropriate and readable
                  fontWeight: 'bold',          // Bold text for better visibility
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Add subtle shadow for modern look
                  cursor: 'pointer',          // Pointer cursor to indicate it's clickable
                  transition: 'all 0.3s ease', // Smooth transition on hover
                  width: '60px',              // Ensure the button has a fixed width
                  height: '60px',             // Ensure the button has a fixed height (making it a perfect circle)
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.1)'; // Button scale on hover
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';   // Revert button scale when hover ends
                }}
              >
                ↑
              </button>
            )}



          </div>
        </footer>)
      }




    </>
  );
};

export default Footer;
