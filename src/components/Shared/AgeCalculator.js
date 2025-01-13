import React, { useState } from 'react';
import moment from 'moment';
import HeaderBottom from '../HomePage/HeaderBottom';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));
  const [ageDetails, setAgeDetails] = useState(null);

  const calculateAge = () => {
    const start = moment(birthDate);
    const end = moment(currentDate);
    
    if (start.isValid() && end.isValid()) {
      const years = end.diff(start, 'years');
      const months = end.diff(start, 'months') % 12;
      const weeks = end.diff(start, 'weeks') % 4;
      const days = end.diff(start, 'days') % 7;
      const hours = end.diff(start, 'hours') % 24;
      const minutes = end.diff(start, 'minutes') % 60;
      const seconds = end.diff(start, 'seconds') % 60;

      setAgeDetails({ years, months, weeks, days, hours, minutes, seconds });
    }
  };

  return (
    <>

    <HeaderBottom></HeaderBottom>
    <div className="container mt-5">
  <div className="card shadow-lg">
    <div className="card-body">
      <h2 className="text-center mb-4">Age Calculator</h2>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Birth Date:</label>
          <input
            type="date"
            className="form-control"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Current Date:</label>
          <input
            type="date"
            className="form-control"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={calculateAge}>
          Calculate Age
        </button>
      </div>

      {ageDetails && (
        <div className="mt-4">
          <h3 className="text-center">Age Details</h3>
          <div className="row text-center">
            <div className="col-md-2">
              <p><strong>Years:</strong> {ageDetails.years}</p>
            </div>
            <div className="col-md-2">
              <p><strong>Months:</strong> {ageDetails.months}</p>
            </div>
            <div className="col-md-2">
              <p><strong>Weeks:</strong> {ageDetails.weeks}</p>
            </div>
            <div className="col-md-2">
              <p><strong>Days:</strong> {ageDetails.days}</p>
            </div>
            <div className="col-md-2">
              <p><strong>Hours:</strong> {ageDetails.hours}</p>
            </div>
            <div className="col-md-2">
              <p><strong>Minutes:</strong> {ageDetails.minutes}</p>
            </div>
          </div>
          <p className="text-center"><strong>Seconds:</strong> {ageDetails.seconds}</p>
        </div>
      )}
    </div>
  </div>
</div>
<HeaderBottom></HeaderBottom>
    </>
    
  );
};

export default AgeCalculator;
