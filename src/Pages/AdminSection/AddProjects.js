import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const AddProjects = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/employees/${id}`)
            .then((res) => res.json())
            .then((info) => setEmployee(info));
    }, [id]);

    const handleProject = (event) => {
        event.preventDefault();
        const employeeId = event.target.employeeId.value;
        const projectName = event.target.projectName.value;
        const projectBudget = event.target.projectBudget.value;
        const advancePayment = event.target.advancePayment.value;
        const duePayment = event.target.duePayment.value;
        const projectStatus = event.target.projectStatus.value;

        // Format the date to dd/MM/yyyy
        const formattedDate = format(startDate, 'dd/MM/yyyy');

        const projectAdded = {
            employeeId,
            projectDate: formattedDate,
            projectName,
            projectBudget,
            advancePayment,
            duePayment,
            projectStatus,
        };

        const url = `http://localhost:5000/add-project`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(projectAdded),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Project Is Added');
                navigate('/employees');
            });
    };

    return (
        <>
        <HeaderBottom></HeaderBottom>
           
            <section id="services" className="services-area pb-90 fix  vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 col-md-12 text-center">
                            <h3 className="mb-4">Add Your Project</h3>
                            <form className="contact-form text-center" onSubmit={handleProject}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <input 
                                                className="form-control form-control-lg mb-3" 
                                                hidden 
                                                value={employee._id} 
                                                name="employeeId" 
                                                placeholder="Employee Id" 
                                                required 
                                                readOnly 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                className="form-control form-control-lg mb-3 text-center"
                                                name="projectDate"
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="Project Date"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <input 
                                                className="form-control form-control-lg mb-3 text-center" 
                                                name="projectName" 
                                                placeholder="Project Name" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <input 
                                                className="form-control form-control-lg mb-3 text-center" 
                                                name="projectBudget" 
                                                placeholder="Project Budget" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <input 
                                                className="form-control form-control-lg mb-3 text-center" 
                                                name="advancePayment" 
                                                placeholder="Advance Payment" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <input 
                                                className="form-control form-control-lg mb-3 text-center" 
                                                name="duePayment" 
                                                placeholder="Due Payment" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-name">
                                            <select className="form-control form-control-lg mb-3 text-center" name="projectStatus">
                                                <option value="Running">Running</option>
                                                <option value="Cancelled">Cancelled</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="slider-btn d-flex justify-content-center">
                                        <button 
                                            className="jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white btn btn-primary" 
                                            data-animation="fadeInRight" 
                                            data-delay=".8s"
                                        > 
                                            Add Project 
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

export default AddProjects;
