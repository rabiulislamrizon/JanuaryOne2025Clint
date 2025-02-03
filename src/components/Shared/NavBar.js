import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createPopper } from '@popperjs/core';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap's JS includes Popper.js

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';








const NavBar = () => {
  const [user] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  const [logo, setLogo] = useState([]);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/'); // Navigate to the home page after successful sign-out
      })
      .catch((error) => {
        console.error('Sign out error: ', error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const logoResponse = await fetch("http://localhost:5000/logo");
        const logoData = await logoResponse.json();
        setLogo(logoData);

        const usersResponse = await fetch("http://localhost:5000/users");
        const usersData = await usersResponse.json();
        setUsers(usersData);

        const profileResponse = await fetch("http://localhost:5000/profiles/");
        const profileData = await profileResponse.json();
        setProfile(profileData);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };




  const button = document.querySelector('#button');
  const tooltip = document.querySelector('#tooltip');

  const popperInstance = createPopper(button, tooltip, {
    placement: 'right', // Adjust the position as needed
  });


  return (





    <> <header className="site-header site-header--absolute is--white py-3" id="sticky-menu">
      <div className="global-container">
        <div className="flex items-center justify-between gap-x-8">
          {/* Header Logo */}
          {
            logo.map(l => <a href="/" className>
              <img src={l.logo} alt="AIMass" />
            </a>)
          }

          {/* Header Logo */}
          {/* Header Navigation */}
          <div className="menu-block-wrapper">
            <div className="menu-overlay" />
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <img className="dropdown-icon" src="assets/img/icon-black-long-arrow-right.svg" alt="cheveron-right" width={16} height={16} />
                </div>
                <div className="current-menu-title" />
                <div className="mobile-menu-close">×</div>
              </div>
              <ul className="site-menu-main is-text-white">

               
                <li className="nav-item">
                  <a href="/" className="nav-link-item">Home</a>
                </li>
                <li className="nav-item">
                  <a href="/home-one" className="nav-link-item">Home One</a>
                </li>
                <li className="nav-item">
                  <a href="/home-two" className="nav-link-item">Home Two</a>
                </li>
                <li className="nav-item">
                  <a href="#services-sec" className="nav-link-item">Services</a>
                </li>
                <li className="nav-item">
                  <a href="#pricing-sec" className="nav-link-item">Pricing</a>
                </li>
                <li className="nav-item">
                  <a href="/blog" className="nav-link-item">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="#contact-sec" className="nav-link-item">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Header Navigation */}
          {/* Header User Event */}
          <div className="flex items-center gap-6">
            <div>  <div className="">
              {user?.email ? (
                <>

                  {profile.map((pro) =>
                    pro.userEmail === user?.email && (
                      <div className="nav-item dropdown mt-1 me-3" key={pro._id}>
                        <a
                          className=""
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src={
                              pro.profileImg ||
                              "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            }
                            alt="Profile"
                            className="rounded-circle me-2"
                            style={{
                              width: "40px",
                              height: "40px",
                            }}
                          />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end p-3 mt-3 text-black">
                          <li>
                            <Link className="dropdown-item" to="/dashboard">
                              <i className="fa-solid fa-bars text-primary"></i> Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/my-order/">
                              <i className="fa-solid fa-cart-shopping text-primary"></i> My Orders
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li className="dropdown-item">
                            <i className="fa-solid fa-user text-primary"></i> {pro.userName}
                          </li>
                          <li className="dropdown-item">{pro.userEmail}</li>
                          <li>
                            <Link
                              to={`/update-profile/${pro._id}`}
                              className="dropdown-item mt-2 mb-2"
                            >
                              Edit Profile
                              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <button className="dropdown-item" onClick={handleSignOut}>
                              <i className="fa-solid fa-right-from-bracket text-primary"></i> Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    )
                  )}

                </>
              ) : (
                <ul className="list-unstyled">
                  <li className="nav-item d-flex align-items-center">
                    <Link to="/login" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white mt-3">
                      Log in
                    </Link>
                  </li>
                </ul>

              )}





            </div></div>

            {users.map(
              (u, index) =>
                u.userEmail === user?.email &&
                u.userRole === "Admin" && (
                  <li className="nav-item d-flex align-items-center" key={index}>
                    <Link to="/admin" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white">
                      Admin
                    </Link>
                  </li>
                )
            )}




            {/* Responsive Offcanvas Menu Button */}
            <div className="block lg:hidden">

              <div className="d-lg-none ">
                <a
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                  className="d-lg-none"
                >
                  <img
                    src="https://i.ibb.co.com/pddtCHt/screencapture-localhost-3000-2024-09-28-17-36-48.png"
                    alt="Menu"
                    style={{ width: '50px', height: '30px' }}
                  />
                </a>

                <div
                  className="offcanvas offcanvas-start"
                  tabIndex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header p-4 border-bottom">
                    <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">
                      Menu
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body p-4">
                    <ul className="navbar-nav text-start">

                      <li className="nav-item shadow-sm border rounded mb-3">
                        <a
                          className="nav-link text-dark fw-semibold py-2 close-offcanvas"
                          href="/"
                        >
                          <i className="bi bi-house-door me-2"></i> Home
                        </a>
                      </li>

                      <li className="nav-item shadow-sm border rounded mb-3">
                        <a
                          className="nav-link text-dark fw-semibold py-2 close-offcanvas"
                          href="#services-sec"
                        >
                          <i className="bi bi-wrench me-2"></i> Services
                        </a>
                      </li>
                      <li className="nav-item shadow-sm border rounded mb-3">
                        <a
                          className="nav-link text-dark fw-semibold py-2 close-offcanvas"
                          href="#pricing-sec"
                        >
                          <i className="bi bi-currency-dollar me-2"></i> Pricing
                        </a>
                      </li>
                      <li className="nav-item shadow-sm border rounded mb-3">
                        <a
                          className="nav-link text-dark fw-semibold py-2 close-offcanvas"
                          href="/blog"
                        >
                          <i className="bi bi-currency-dollar me-2"></i> Blog
                        </a>
                      </li>
                      <li className="nav-item shadow-sm border rounded mb-3">
                        <a
                          className="nav-link text-dark fw-semibold py-2 close-offcanvas"
                          href="#contact-sec"
                        >
                          <i className="bi bi-envelope me-2"></i> Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Header User Event */}
        </div>
      </div>
    </header>
    </>


  );
};

export default NavBar;
