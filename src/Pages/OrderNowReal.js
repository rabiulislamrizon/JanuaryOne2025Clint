import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';

const OrderNowReal = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { id } = useParams();
    const [prices, setPrices] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null); // State to store selected package details

    useEffect(() => {
        fetch(`http://localhost:5000/pricings-real`)
            .then((res) => res.json())
            .then((info) => setPrices(info));  // Fetch all pricing plans
    }, []);

    useEffect(() => {
        setCountries([
            'United States', 'Canada', 'Bangladesh', 'United Kingdom', 'Australia', 'India',
            'Germany', 'France', 'Italy', 'Spain', 'Brazil', 'Japan', 'China',
            'South Korea', 'Mexico', 'Argentina', 'South Africa'
        ]);
    }, []);

    const generateUniquePaymentId = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let paymentId = "";
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            paymentId += characters.charAt(randomIndex);
        }
        return paymentId;
    };

    const handleNewOrder = (event) => {
        event.preventDefault();
        const paymentId = generateUniquePaymentId();
        const customerEmail = event.target.customerEmail.value;
        const customerName = event.target.customerName.value;
        const customerAddress = event.target.customerAddress.value;
        const customerCountry = event.target.customerCountry.value;
        const OrderFor = event.target.OrderFor.value;
        const paymentStatus = "UnPaid";
        const orderStatus = "Pending";
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });

        const order = {
            paymentId,
            packageName: selectedPackage.packageNameReal,
            packagePrice: selectedPackage.packagePriceReal,
            customerEmail,
            customerName,
            OrderFor,
            customerAddress,
            customerCountry,
            paymentStatus,
            orderStatus,
            orderDate: formattedDate,
        };

        const url = `http://localhost:5000/new-order`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
        .then((res) => res.json())
        .then(() => {
            navigate('/pending-order');
        });
    };

    const handlePackageSelection = (event) => {
        const selectedPackageId = event.target.value;
        const packageDetails = prices.find((plan) => plan._id === selectedPackageId);
        setSelectedPackage(packageDetails);  // Set selected package details
    };

    return (
        <>
            <HeaderBottom />
            <section id="order" className="vh-100">
                <div className="container">
                    <h2 className="text-center mb-4">Order This SEO Plan</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form className="bg-light p-4 rounded shadow" onSubmit={handleNewOrder}>
                                <div className="form-group mb-3">
                                    <label htmlFor="package">Package</label>
                                    <select className="form-control" name="package" onChange={handlePackageSelection} required>
                                        <option value="">Select Package</option>
                                        {prices.map((plan, index) => (
                                            <option key={plan._id} value={plan._id}>
                                                {plan.packageNameReal} - ${plan.packagePriceReal}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {selectedPackage && (
                                    <>
                                        <div className="form-group mb-3">
                                            <label>Package Name: {selectedPackage.packageNameReal}</label>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>Package Price: ${selectedPackage.packagePriceReal}</label>
                                        </div>
                                    </>
                                )}
                                <div className="form-group mb-3">
                                    <label htmlFor="customerEmail">Email</label>
                                    <input
                                        disabled
                                        type="email"
                                        className="form-control"
                                        name="customerEmail"
                                        value={user?.email}
                                        required
                                    />
                                    <input
                                        hidden
                                        type="text"
                                        className="form-control"
                                        name="OrderFor"
                                        value='Real-Estate-DB'
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="customerName">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="customerName"
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="customerAddress">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="customerAddress"
                                        placeholder="Your Address"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="customerCountry">Country</label>
                                    <select
                                        className="form-control"
                                        name="customerCountry"
                                        required
                                    >
                                        <option value="">Select Your Country</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <input type="hidden" name="paymentStatus" value="UnPaid" />
                                <input type="hidden" name="orderStatus" value="Pending" />
                                <div className="d-flex justify-content-center">
                                    <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" type="submit">Place Order Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderNowReal;
