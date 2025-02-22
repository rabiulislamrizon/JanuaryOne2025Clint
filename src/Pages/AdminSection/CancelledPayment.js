import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../components/Shared/Loading";
import HeaderBottom from "../../components/HomePage/HeaderBottom";

const CancelledPayment = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updatePaymentStatus = async () => {
      try {
        const updateOrder = { paymentStatus: "Cancelled" };
        const url = `http://localhost:5000/order-cancelled/${id}`;
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateOrder),
        });

        if (response.ok) {
          setLoading(false);
          setTimeout(() => navigate("/dashboard"), 1500);
        } else {
          console.error("Payment update failed.");
          setLoading(false);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    };

    updatePaymentStatus();
  }, [id, navigate]);

  return (
  <> 
  <HeaderBottom></HeaderBottom>
  
   <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
  {loading ? (
    <Loading />
  ) : (
    <div className="text-center bg-white p-5 shadow rounded">
      <div className="mb-3">
        <i className="bi bi-x-circle-fill text-danger" style={{ fontSize: "3rem" }}></i>
      </div>
      <h3 className="text-danger mb-3">Payment Cancelled</h3>
      <p className="text-muted">
        Your payment process has been cancelled. You can go back to the dashboard or retry the payment.
      </p>
      <div className="mt-4">
        <button
          className="btn btn-primary me-3"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
        
      </div>
    </div>
  )}
</div></>
  );
};

export default CancelledPayment;
