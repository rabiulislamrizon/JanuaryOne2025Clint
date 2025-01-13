import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import MargingTop from '../../components/HomePage/MargingTop';

const PayNow = () => {
  const [paypal, setPaypal] = useState([]);
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const currentDomain = window.location.origin;

  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`)
      .then((res) => res.json())
      .then((info) => setOrder(info));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/paypal-email`)
      .then((res) => res.json())
      .then((info) => setPaypal(info));
  }, []);

  return (
    <>
          <HeaderBottom />
      <section id="services" className="services-area vh-100">
      <MargingTop></MargingTop>
    
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              {/* Bootstrap Card for Payment */}
              <div className="card shadow-lg border-0">
                <div className="card-body p-4">
                  <h3 className="card-title text-center mb-4">Complete Your Payment</h3>
                  <h5 className="text-center text-muted mb-4">
                    Package Name : {order.packageName} Plan
                  </h5>
                  <h5 className="text-center text-muted mb-4">
                    Order #{order._id} - Total: ${order.packagePrice}
                  </h5>
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_top"
                    className="text-center"
                  >
                    {paypal.map((e, index) => (
                      <input
                        key={index}
                        name="business"
                        hidden
                        value={e.paypalEmail}
                      />
                    ))}

                    <input type="hidden" name="item_number" value="1" />
                    <input type="hidden" name="amount" value={order.packagePrice} />
                    <input type="hidden" name="no_shipping" value="1" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input
                      type="hidden"
                      name="notify_url"
                      value="http://sitename/paypal-payment-gateway-integration-in-php/notify.php"
                    />
                    <input
                      type="hidden"
                      name="cancel_return"
                      value={`${currentDomain}/order-cancelled/${order._id}/${order.paymentId}`}
                    />
                    <input
                      type="hidden"
                      name="return"
                      value={`${currentDomain}/order-cancelled/${order._id}/${order.paymentId}`}
                    />
                    <input type="hidden" name="cmd" value="_xclick" />
                    <button
                      type="submit"
                      className="py-3 px-4  jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white  mt-3"
                    >
                      <i className="bi bi-paypal me-2"></i>Pay Now with PayPal
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default PayNow;
