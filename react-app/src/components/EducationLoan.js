import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export default function HomeLoan() {
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
    const data = await fetch(`${baseUrl}/education-loans?populate=%2A`);
    const json = await data.json();
    console.log(json);
    SetPersonal(json.data || []);
  };
  const baseImgUrl = process.env.REACT_APP_IMG_BASE_URL;
  return (
    <div className="personal">
        <div className="banner-middle"><div className="text"><h1 className="txt-medium cc-head">Education Loan</h1><p className="pd-bt-10">Education loan helps facilitate young minds to pursue their academic dreams. Get a good loan amount and flexible tenure period with tax benefits. Collateral free loans for premier institution. Apply now through CreditMantri!</p></div></div>
    {personal.map((item, index) => (
      <div key={index} className="personal-list">
        <div className="list">
        <div className="image">
          <img
            src={`${baseImgUrl}${item.attributes.Bank_logo.data.attributes.url}`}
            alt={item.attributes.Bank_logo.data.attributes.alternativeText || "Bank logo"}
          />
        </div>
        <div className="content">
          <h4>{item?.attributes?.Bank_name}</h4>
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
