import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

const Contact = ({ onClose }) => {
  const [formData, setFormData] = useState({
    workEmail: '',
    firstName: '',
    lastName: '',
    termsCheck: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('workEmail', formData.workEmail);
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('termsCheck', formData.termsCheck);

    try {
      const response = await axios.post('https://getform.io/f/paqgpwxa', data);

      if (response.status === 200) {
        alert('Form submitted successfully!');
        
        setFormData({
          workEmail: '',
          firstName: '',
          lastName: '',
          termsCheck: false,
        });
        onClose();
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="containercontact mt-5">
          <form className="custom-form" onSubmit={handleSubmit}>
            <h2 className="pb-3">Talk to us</h2>
            <div className="mb-3">
              <label htmlFor="workEmail" className="form-label">Work Email</label>
              <input
                type="email"
                className="form-control"
                id="workEmail"
                name="workEmail"
                placeholder="Enter your work email"
                value={formData.workEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="termsCheck"
                name="termsCheck"
                checked={formData.termsCheck}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="termsCheck">
                I agree to Fyle's terms and conditions and provide consent to send me communication.
              </label>
            </div>
            <button type="submit" className="btncontact py-3">Contact Us</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
