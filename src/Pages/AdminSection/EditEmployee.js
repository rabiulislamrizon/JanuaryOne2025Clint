import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditEmployee = () => {
  const [employees, setEmployee] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/employees/${id}`)
      .then((res) => res.json())
      .then((info) => setEmployee(info));
  }, [id]);

  const handleEmployee = (event) => {
    event.preventDefault();
    const EmployeeName = event.target.EmployeeName.value;
    const EmployeeEmail = event.target.EmployeeEmail.value;
    const EmployeeRole = event.target.EmployeeRole.value;

    const employeeEdit = {
      EmployeeName,
      EmployeeEmail,
      EmployeeRole,
    };

    const url = `http://localhost:5000/upadete-employee/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(employeeEdit),
    })
      .then((res) => res.json())
      .then((result) => {
        alert('Employee Is Updated');
      });
  };

  return (
    <>
      <HeaderBottom />
      <div>
        <section id="services" className="services-area vh-100 mt-5">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 col-md-12 text-center">
              
                <form className="contact-form" onSubmit={handleEmployee}>
                <h3>Update Your Employee</h3>
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-name">
                        <input
                          className="form-control form-control-lg shadow-lg p-3 mb-3"
                          name="EmployeeName"
                          defaultValue={employees.EmployeeName}
                          placeholder="Employee Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-name">
                        <input
                          className="form-control form-control-lg shadow-lg p-3 mb-3"
                          name="EmployeeEmail"
                          defaultValue={employees.EmployeeEmail}
                          placeholder="Employee Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-name">
                        <input
                          className="form-control form-control-lg shadow-lg p-3 mb-3"
                          name="EmployeeRole"
                          defaultValue={employees.EmployeeRole}
                          placeholder="Employee Role"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                      <button className="  jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[8px] text-white after:bg-colorOrangyRed hover:text-white btn-lg" data-animation="fadeInRight" data-delay=".8s">
                        Update Employee
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditEmployee;
