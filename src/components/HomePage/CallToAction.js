import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CallToAction = () => {

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));


  }, []);


  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        Navigate('/all-subscriber');
        alert('Subscribers is Updated');
      });


  }







  return (



    <>

      {
        action.map(a => <section className="cta-section">
          <div className="bg-color" />
          <div className="auto-container">
            <div className="inner-container">
              <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-23.png)' }} />
                <div className="pattern-2 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-24.png)' }} />
                <div className="pattern-3 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-25.png)' }} />
                <div className="pattern-4 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }} />
              </div>
              <div className="inner-box">
                <h2>{a.heading} <br /></h2>
                <div className="btn-box">
                  <a href="http://localhost:3000/support" className="theme-btn btn-two mr_20 blink" target="_blank" rel="noopener noreferrer">Need Support</a>
                </div>
              </div>
            </div>
          </div>
        </section>)
      }




    </>
  );
};

export default CallToAction;