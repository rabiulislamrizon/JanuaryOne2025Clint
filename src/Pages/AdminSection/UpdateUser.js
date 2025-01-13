import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
            .then((res) => res.json())
            .then((info) => setUser(info));
    }, [id]);

    const handleUser = (event) => {
        event.preventDefault();
        const userEmail = event.target.userEmail.value;
        const userRole = event.target.userRole.value;

        const userEdit = {
            userEmail,
            userRole
        };

        fetch(`http://localhost:5000/upadete-users/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userEdit),
        })
            .then((res) => res.json())
            .then(() => {
                alert('User Is Updated');
            });
    };

    return (
        <>
        <HeaderBottom></HeaderBottom>
            <section id="services" className="services-area vh-100 d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <h3 className="text-center mb-4">Update User Email</h3>
                            <form className="contact-form" onSubmit={handleUser}>
                                <div className="form-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg shadow-lg p-3 mb-3 bg-white rounded"
                                        name="userEmail"
                                        defaultValue={user.userEmail || ''}
                                        placeholder="User Email"
                                        required
                                    />
                                </div>
                                <input
                                    type="hidden"
                                    name="userRole"
                                    defaultValue={user.userRole || 'Admin'}
                                />
                                <div className="text-center">
                                    <button type="submit" className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white" data-animation="fadeInRight" data-delay=".8s">
                                        Update User Email
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

export default UpdateUser;
