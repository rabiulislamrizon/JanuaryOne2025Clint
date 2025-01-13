import React, { useEffect, useState } from 'react';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddEmployee = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/employees`)
            .then((res) => res.json())
            .then((info) => setEmployee(info));
    }, []);

    const handleEmployee = (event) => {
        event.preventDefault();
        const EmployeeName = event.target.EmployeeName.value;
        const EmployeeEmail = event.target.EmployeeEmail.value;
        const EmployeeRole = event.target.EmployeeRole.value;

        const employeeAdded = {
            EmployeeName,
            EmployeeEmail,
            EmployeeRole,
        };

        const url = `http://localhost:5000/add-employee`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(employeeAdded),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Employee Is Added');
            });
    };

    return (
        <>
            <HeaderBottom />

            <section id="services" className="services-area pb-90 fix vh-100 mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <form className="contact-form text-center" onSubmit={handleEmployee}>
                                <h3 className="mb-4"> Add Your Employee </h3>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <input 
                                                className="form-control form-control-lg mb-3 " 
                                                name="EmployeeName" 
                                                placeholder="Employee Name" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <input 
                                                className="form-control form-control-lg mb-3 " 
                                                name="EmployeeEmail" 
                                                placeholder="Employee Email" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <input 
                                                className="form-control form-control-lg mb-3 " 
                                                name="EmployeeRole" 
                                                placeholder="Employee Role" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="slider-btn d-flex justify-content-center">
                                        <button 
                                            className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white btn btn-primary" 
                                            data-animation="fadeInRight" 
                                            data-delay=".8s"
                                        > 
                                            Add Employee 
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddEmployee;
