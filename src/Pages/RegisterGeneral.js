import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Loading from "../components/Shared/Loading";
import HeaderBottom from "../components/HomePage/HeaderBottom";
import auth from "../firebase.init";

const RegisterGeneral = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let signInError;

  const onSubmit = async (data) => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(data.email, data.password);

      if (userCredential.user) {
        // User created successfully
        // Update profile with display name
        await updateProfile({ displayName: data.name });

        // Default image URL
        const defaultImgUrl = "https://firebasestorage.googleapis.com/v0/b/mobile-app-d6c0d.appspot.com/o/images%2Fpng-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png?alt=media&token=277b1fbd-04d1-4c8a-a749-f4c3d6c6d282";

        // Prepare the user data to send to the database
        const userUpdate = {
          userName: data.name,
          userEmail: data.email,
          profileStatus: "Approved",
          profileImg: defaultImgUrl,
        };

        // Send the user data to the database
        const url = `http://localhost:5000/add-profile-info`;
        await axios.post(url, userUpdate, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Navigate to the user dashboard
        navigate("/pending-order");
        window.location.href = "/pending-order";
      } else {
        throw new Error("User creation failed");
      }
    } catch (error) {
      console.error("Error during signup or data submission:", error);
      // Handle the error, e.g., show a message to the user
    }
  };

  // Navigate after successful registration
  useEffect(() => {
    if (user || gUser) {
      navigate("/pending-order");
    }
  }, [user, gUser, navigate]);
  // Function to get custom error messages
  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "The email address is already in use by another account.";
      case "auth/invalid-email":
        return "The email address is not valid.";
      case "auth/operation-not-allowed":
        return "Email/Password accounts are not enabled. Enable email/password in the Firebase console.";
      case "auth/weak-password":
        return "The password is too weak. Please choose a stronger password.";
      case "auth/popup-closed-by-user":
        return "The popup has been closed before completing the sign in.";
      case "auth/cancelled-popup-request":
        return "Popup request was canceled. Please try again.";
      case "auth/invalid-login-credentials":
        return "Invalid login credentials. Please check your email and password.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };

  if (loading || gLoading || updating) {
    return <Loading />;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-warning text-center">
        {getErrorMessage(error?.code || gError?.code || updateError?.code)}
      </p>
    );
  }

  return (
    <>
      <HeaderBottom />
      <div
        className="main-content payment-setting  "
       
      >
        <div className="page-content vh-100">
          <section className="bg-auth">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div
                    className="card auth-box mb-15"
                    style={{
                     
                      background: "linear-gradient(to right, #6B58D9, #FC466B)", // Gradient from #6B58D9 to #FC466B
                    }}
                  >
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="auth-content card-body p-5 h-100  text-white">
                          <div className="w-100">
                            <div className="text-center mb-4">
                              <h2 className="text-white">Welcome!</h2>
                              <p className="text-white">
                                Register to continue
                              </p>
                            </div>
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="auth-form"
                            >
                              <div className="mb-3">
                                <label
                                  htmlFor="usernameInput"
                                  className="form-label"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  placeholder="Your Name"
                                  className={`form-control bg-white ${errors.name ? "is-invalid" : ""}`}
                                  {...register("name", {
                                    required: {
                                      value: true,
                                      message: "Name is Required",
                                    },
                                  })}
                                />
                                {errors.name && (
                                  <div className="invalid-feedback">{errors.name.message}</div>
                                )}
                              </div>
                              <div className="">
                                <label
                                  htmlFor="usernameInput"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="usernameInput"
                                  placeholder="Enter your Email"
                                  {...register("email", {
                                    required: {
                                      value: true,
                                      message: "Email is Required",
                                    },
                                    pattern: {
                                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                      message: "Provide a Valid Email",
                                    },
                                  })}
                                />
                                <label className="label">
                                  {errors.email?.type === "required" &&
                                    errors.email.message}
                                  {errors.email?.type === "pattern" &&
                                    errors.email.message}
                                </label>
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="passwordInput"
                                  className="form-label"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="passwordInput"
                                  placeholder="Enter your password"
                                  {...register("password", {
                                    required: {
                                      value: true,
                                      message: "Password is Required",
                                    },
                                    minLength: {
                                      value: 6,
                                      message: "Minimum 6 Characters",
                                    },
                                  })}
                                />
                                <label className="label">
                                  {errors.password?.type === "required" &&
                                    errors.password.message}
                                  {errors.password?.type === "minLength" &&
                                    errors.password.message}
                                </label>
                              </div>

                              <div className="text-center">
                                <button
                                  type="submit"
                                  className="btn btn-outline-light btn-lg px-5  circle btn-theme-effect"
                                >
                                  <span> Register</span>
                                </button>
                              </div>
                            </form>
                            {signInError}
                            <div className="mt-4 text-center">
                              <p className="mb-0 text-white">
                                Have an account?{" "}
                                <Link
                                  to="/login"
                                  className="fw-medium text-white text-decoration-underline"
                                >
                                  {" "}
                                  Login Now{" "}
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
                              src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg"
                              alt=""
                              className="img-fluid login__img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </div>
        <HeaderBottom />
      </div>
      <HeaderBottom />
    </>
  );
};

export default RegisterGeneral;