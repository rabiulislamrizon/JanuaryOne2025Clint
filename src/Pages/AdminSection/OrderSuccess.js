import React from "react";
import { useParams } from "react-router-dom";
import HeaderBottom from "../../components/HomePage/HeaderBottom";
import MargingTop from "../../components/HomePage/MargingTop";

const OrderSuccess = () => {
  const { orderId, paymentId } = useParams();

  return (
    <>
      <HeaderBottom />
      <section id="order-success" className="vh-100 d-flex align-items-center">
        <MargingTop />
        <div className="container text-center">
          <div className="card shadow-lg border-0 p-4">
            <div className="card-body">
              <h2 className="text-success mb-3">Payment Successful!</h2>
              <p className="text-muted">Thank you for your payment.</p>
              <h5 className="mt-3">Order ID: {orderId}</h5>
              <h5 className="mb-3">Payment ID: {paymentId}</h5>
              <a href="/dashboard" className="btn btn-primary mt-3">Go to Dashboard</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderSuccess;