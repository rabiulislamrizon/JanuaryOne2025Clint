import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddUser = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then((res) => res.json())
            .then((info) => setUser(info));
    }, []);

    const handleUser = (event) => {
        event.preventDefault();
        const userEmail = event.target.userEmail.value;
        const userRole = event.target.userRole.value;

        const userAdded = {
            userEmail,
            userRole
        };

        fetch(`http://localhost:5000/add-user`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userAdded),
        })
            .then((res) => res.json())
            .then(() => {
                alert('User Is Added');
            });
    };

    return (
        <>

        <HeaderBottom></HeaderBottom>
            
            <section id="services" className="services-area vh-100 d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 text-center">
                            <h3 className="mb-4">Add Admin User Email</h3>
                            {
                                users.length === 1 ?
                                users.map(a => (
                                    <Link key={a._id} className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white d-inline-block mb-3' to={`/admin-user/${a._id}`}>Update User</Link>
                                )) :
                                <form className="contact-form" onSubmit={handleUser}>
                                    <div className="form-group mb-3">
                                        <input
                                            type="email"
                                            className="form-control form-control-lg shadow-lg p-3 mb-3 bg-white rounded"
                                            name="userEmail"
                                            placeholder="User Email"
                                            required
                                        />
                                    </div>
                                    <input
                                        type="hidden"
                                        name="userRole"
                                        defaultValue="Admin"
                                    />
                                    <div className="text-center">
                                        <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">Add User</button>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddUser;
