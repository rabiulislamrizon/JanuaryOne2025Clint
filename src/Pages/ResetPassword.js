import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../components/Shared/Loading';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import MargingTop from '../components/HomePage/MargingTop';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (email) {
      await sendPasswordResetEmail(email);
      setEmail(''); // Clear the form
      setSuccessMessage('Password reset email sent successfully!');
    } else {
      alert('Please enter your email.');
    }
  };

  if (sending) {
    return <Loading />;
  }

  return (
   <>
   <HeaderBottom></HeaderBottom>
    <div className="main-content d-flex vh-100 justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card auth-box mb-15" style={{ background: "#6600FF" }}>
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="auth-content card-body p-5 h-100  text-white">
                    <div className="w-100">
                      <div className="text-center mb-4">
                        <h2 className="text-white">Reset Password</h2>
                        <p className="text-white">
                          Enter your email to reset your password
                        </p>
                      </div>
                      {successMessage && (
                        <div className="alert alert-success text-center" role="alert">
                          {successMessage}
                        </div>
                      )}
                      <form onSubmit={handleResetPassword} className="auth-form">
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className={`form-control bg-white ${error ? "is-invalid" : ""}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          {error && (
                            <div className="invalid-feedback">
                              {error.message}
                            </div>
                          )}
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-outline-light btn-lg px-5  circle btn-theme-effect">
                            Send Reset Link
                          </button>
                        </div>
                      </form>
                      <div className="mt-4 text-center">
                        <p className="mb-0 text-white">
                          Remember your password?{" "}
                          <Link to="/login" className="fw-medium text-white text-decoration-underline">
                            Login Now
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  text-center">
                  <div className="card-body p-4">
                    <div className="mt-5">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/mobile-app-d6c0d.appspot.com/o/images%2Fforgot-password-concept-illustration_114360-1328.avif?alt=media&token=f75fa63f-6950-40fa-a89e-aade32d4e951"
                        alt="Reset Password Illustration"
                        className="img-fluid login__img border-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
     
    </div>
    <MargingTop></MargingTop>
    </>
  );
};

export default ResetPassword;
