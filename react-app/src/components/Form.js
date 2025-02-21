import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import instantloan from '../assets/images/instantloan.jpg';

const Form = () => {
  const location = useLocation();
  const { bank } = location.state || {};
  const { Insurance_name } = location.state || {};

  const [formData, setFormData] = useState({
    Name: "",
    Phone_number: "",
    Email: "",
    Date_of_birth: "",
    Residence_city: "",
    Residence_pincode: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      data: {
        Name: formData.Name,
        Phone_number: formData.Phone_number,
        Email: formData.Email,
        Date_of_birth: formData.Date_of_birth,
        Residence_city: formData.Residence_city,
        Residence_pincode: formData.Residence_pincode,
        Bank_name: bank?.attributes?.Bank_name, // Include the bank name in the submission
        Insurance_name: Insurance_name?.attributes.attributes,
        website: formData.website,
      },
    };

    try {
      const baseUrl = process.env.REACT_APP_BASE_URL;
      const response = await fetch(`${baseUrl}/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse);
        alert("Form submitted successfully!");
      } else {
        console.error("Failed to submit form");
        alert("Form submission failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred!");
    }
  };

  return (
    <div>
      <h2>Please fill the details below</h2>
      {bank && (
        <div class="bank-name">
          <h3>Applying for: {bank.attributes.Bank_name}</h3>
        </div>
      )}
      <form onSubmit={handleSubmit} className="form">
        <div className="fields-img">
          <div className="image">
             <img src={instantloan} alt="login" className="image" />
          </div>
          <div className="fields">
          <div className="field">
            <label>Name:</label>
            <input
             type="text"
             placeholder="Full Name"
             name="Name"
             value={formData.Name}
             onChange={(e) => {
               const value = e.target.value;
               // Allow only alphabets and spaces
               if (/^[a-zA-Z\s]*$/.test(value)) {
                 handleChange(e); // Update the state only if valid
               }
             }}
             required
            />
          </div>

          <div className="field">
            <label>Phone Number:</label>
            <input
              type="number"
              placeholder="Phone Number"
              name="Phone_number"
              value={formData.Phone_number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Email:</label>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="Date_of_birth"
              value={formData.Date_of_birth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Residence City:</label>
            <input
              type="text"
              name="Residence_city"
              placeholder="Residence City"
              value={formData.Residence_city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Residence Pincode:</label>
            <input
              type="number"
              name="Residence_pincode"
              placeholder="Pincode"
              value={formData.Residence_pincode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Website:</label>
            <input
              type="text"
              name="website"
              placeholder="Website URL"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
