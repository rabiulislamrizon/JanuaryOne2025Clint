import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MargingTop from '../components/HomePage/MargingTop';

const ContactUs = () => {
  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);
  const [footerSocial, setFooterSocial] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;

    const addItem = {
      name,
      email,
      number,
      subject,
      message,
      messageStatus,
    };

    const url = `http://localhost:5000/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        alert('Message is sent');
        navigate('/thanks');  // Navigate to /thanks route
      })
      .catch((error) => {
        console.error('Error:', error);

      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);

  return (

    <><main className="main-wrapper relative overflow-hidden" id='contact-sec'>
    {/*...::: Breadcrumb Section Start :::... */}
    <section id="section-breadcrumb">
      {/* Section Spacer */}
      <div className="">
        {/* Section Container */}
        <div className="global-container">

          <div class="mb-8 text-left lg:mb-16 xl:mb-6 text-center">
          
            <div className="jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]">
            <h2 className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
            Get in touch with us directly
            </h2>
          </div>
          </div>

          <div className="order-1   ">
            {/* Contact Form */}
            <form

              onSubmit={handleMessage}
              method="post"
              className="flex flex-col gap-y-5"
            >
              {/* Form Group */}
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {/* Form Single Input */}
                <div className="flex flex-col gap-y-[10px]">
                  <label
                    htmlFor="contact-name"
                    className="text-lg font-bold leading-[1.6]"
                  >
                    Enter Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    placeholder="John Doe"
                    className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                    required="required"
                  />
                </div>
                {/* Form Single Input */}
                {/* Form Single Input */}
                <div className="flex flex-col gap-y-[10px]">
                  <label
                    htmlFor="contact-email"
                    className="text-lg font-bold leading-[1.6]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    placeholder="example@gmail.com"
                    className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                    required="required"
                  />
                </div>
                {/* Form Single Input */}
              </div>
              {/* Form Group */}
              {/* Form Group */}
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {/* Form Single Input */}
                <div className="flex flex-col gap-y-[10px]">
                  <label
                    htmlFor="contact-phone"
                    className="text-lg font-bold leading-[1.6]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="number"
                    id="contact-phone"
                    placeholder="(123) 456 - 7890"
                    className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                    required="required"
                  />
                </div>
                {/* Form Single Input */}
                {/* Form Single Input */}
                <div className="flex flex-col gap-y-[10px]">
                  <label
                    htmlFor="contact-company"
                    className="text-lg font-bold leading-[1.6]"
                  >
                    Your Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="contact-company"
                    placeholder="Subject"
                    className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                    required="required"
                  />
                </div>
                <div className="flex flex-col gap-y-[10px]">

                  <input
                    name="messageStatus"
                    value="UnRead"
                    hidden
                    placeholder="Message Status"
                  />
                </div>
                {/* Form Single Input */}
              </div>
              {/* Form Group */}
              {/* Form Group */}
              <div className="grid grid-cols-1 gap-6">
                {/* Form Single Input */}
                <div className="flex flex-col gap-y-[10px]">
                  <label
                    htmlFor="contact-message"
                    className="text-lg font-bold leading-[1.6]"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    className="min-h-[180px] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                    placeholder="Write your message here..."
                    required="required"
                    defaultValue={""}
                  />
                </div>
                {/* Form Single Input */}
              </div>
              <div className='text-center'>
                <button
                  type="submit"
                  className="button mt-5 rounded-[50px]   bg-colorViolet  py-6 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                >
                  Send your message
                </button>
              </div>
              {/* Form Group */}
            </form>
            {/* Contact Form */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
    {/*...::: Breadcrumb Section End :::... */}
    {/*...::: Contact Section Start :::... */}
    <section className="contact-section">
      {/* Section Spacer */}

      {/* Section Spacer */}
    </section>
    {/*...::: Contact Section End :::... */}
    {/*...::: Map Section Start :::... */}

    {/*...::: Map Section Start :::... */}
    <MargingTop></MargingTop>
  </main>
  <MargingTop></MargingTop>

  </>
  );
};

export default ContactUs;
