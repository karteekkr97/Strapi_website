import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function PersonalLoan() {
  const [personal, SetPersonal] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  const navigate = useNavigate();
  const handleButtonClick = (bank) => {
    setSelectedBank(bank);
    navigate('/form', { state: { bank } });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const data = await fetch(`${baseUrl}/personal-loans?populate=%2A`);
    const json = await data.json();
    console.log(json);
    SetPersonal(json.data || []);
  };
  const baseImgUrl = process.env.REACT_APP_IMG_BASE_URL;
  return (
    <div className="personal">
        <div className="banner-middle"><div className="text"><h1 className="txt-medium cc-head">Personal Loan</h1><p className="pd-bt-10">Get personal loans starting at 7.99% interest rate. Flexible loan tenures ranging from 1 month to 6 years. High loan amounts. Minimal documentation. Quick Approval. Hassle-Free instant disbursal. Compare and apply for the best loan offer from 30 + lenders.</p></div></div>
    {personal.map((item, index) => (
      <div key={index} className="personal-list">
        <div className="list">
        <div className="image">
          <img
            src={`${baseImgUrl}${item.attributes.logo.data.attributes.url}`}
            alt={item.attributes.logo.data.attributes.alternativeText || "Bank logo"}
          />
        </div>
        <div className="content">
          <h4>{item?.attributes?.Bank_name}</h4>
        </div>
        <div className="content">
          <h4>Loan Amount</h4>
          <p>{item?.attributes?.Loan_amount}</p>
        </div>
        <div className="content">
          <h4>Max Tenure</h4>
          <p>{item?.attributes?.Max_tenure}</p>
        </div>
        <div className="content">
          <h4>Best Rate</h4>
          <p>{item?.attributes?.Interest_rate}</p>
        </div>
        <div className="content">
          <h4>Processing Fee</h4>
          <p>{item?.attributes?.Processing_fee}</p>
        </div>
        <div className="content">
          <button className="available" onClick={() => handleButtonClick(item)}>Check Availability</button>
        </div>
        </div>
      </div>
    ))}
  </div>
  );
}
