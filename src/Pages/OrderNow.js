import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';
import MargingTop from '../components/HomePage/MargingTop';

const OrderNow = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { id } = useParams();
    const [prices, setPrice] = useState([]);
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);  // New state for loading

    useEffect(() => {
        fetch(`http://localhost:5000/pricing/${id}`)
            .then((res) => res.json())
            .then((info) => setPrice(info));
    }, [id]);

    useEffect(() => {
        setCountries([
            'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
            'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas',
            'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin',
            'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei',
            'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon',
            'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia',
            'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia',
            'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt',
            'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia',
            'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
            'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti',
            'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
            'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
            'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya',
            'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia',
            'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia',
            'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
            'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger',
            'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine',
            'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
            'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Samoa', 'San Marino',
            'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
            'Slovakia', 'Slovenia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname',
            'Sweden', 'Switzerland', 'Syria', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad',
            'Tunisia', 'Turkey', 'Uganda', 'Ukraine', 'United Kingdom', 'United States',
            'Uruguay', 'Uzbekistan', 'Vietnam', 'Zambia', 'Zimbabwe'
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
        setLoading(true);  // Set loading to true when order is being placed

        const paymentId = generateUniquePaymentId();
        const packagePrice = event.target.packagePrice.value;
        const packageName = event.target.packageName.value;
        const customerEmail = event.target.customerEmail.value;
        const customerName = event.target.customerName.value;
        const customerAddress = event.target.customerAddress.value;
        const customerCountry = event.target.customerCountry.value;

        const order = {
            paymentId,
            packageName,
            packagePrice,
            customerEmail,
            customerName,
            customerAddress,
            customerCountry,
            paymentStatus: "UnPaid",
            orderStatus: "Pending",
            orderDate: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }),
        };

        fetch(`http://localhost:5000/new-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then(() => {
                setLoading(false);  // Set loading to false after the order is placed
                navigate('/pending-order');
            });
    };

    return (
        <>
            <HeaderBottom />
            <section id="order" className="vh-100">
                <MargingTop></MargingTop>
                
                <div className="container">
                    <h2 className="text-center mb-4">You Order {prices.packageName || ''}  SEO Plan</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form className="bg-light p-4 rounded shadow" onSubmit={handleNewOrder}>
                                <div className="form-group mb-3">
                                    <label htmlFor="packageName">Package Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="packageName"
                                        value={prices.packageName || ''}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="packagePrice">Package Price</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="packagePrice"
                                        value={prices.packagePrice || ''}
                                        readOnly
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
                                    <label htmlFor="customerName">Your Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="customerEmail"
                                        placeholder="your@gmail.com"
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
                                {loading && (
                                    <div className="text-center mb-3">
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                )}
                                <div className="d-flex justify-content-center">
                                    <button className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" type="submit" disabled={loading}>
                                        {loading ? 'Placing Order...' : 'Place Order Now'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderNow;
