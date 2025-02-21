import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function FamilyInsurance() {
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
    const data = await fetch(`${baseUrl}/family-insurances?populate=%2A`);
    const json = await data.json();
    console.log(json);
    SetPersonal(json.data || []);
  };
  const baseImgUrl = process.env.REACT_APP_IMG_BASE_URL;
  return (
    <div className="personal health">
        <div className="banner-middle"><div className="text"><h1 className="txt-medium cc-head">Family Insurance</h1><p className="pd-bt-10">
        Family insurance is a type of policy that provides coverage for the entire family, including health, life, and sometimes even auto or home insurance. It helps manage risks and expenses by offering financial protection and support for various family needs</p></div></div>
    {personal.map((item, index) => (
      <div key={index} className="personal-list">
        <div className="list">
            <div className="attributes">
        <div className="image">
          <img
            src={`${baseImgUrl}${item?.attributes?.logo?.data[0].attributes?.url}`}
            alt={item?.attributes?.logo?.data?.attributes?.alternativeText || "Bank logo"}
          />
        </div>
        <div className="content">
        <h4>{item?.attributes?.Insurance_plan}</h4>
          <p>{item?.attributes?.Insurance_name}</p>
        </div>
        <div className="content">
          <h4>Coverage</h4>
          <p>{item?.attributes?.Coverage}</p>
        </div>
        <div className="content">
          <h4>Premium</h4>
          <p>{item?.attributes?.Premium}</p>
        </div>
        <div className="content">
          <button className="available" onClick={() => handleButtonClick(item)}>Get Quote</button>
        </div>
        </div>
        <div className="description">
          <h4>Description</h4>
          <p>{item?.attributes?.Description}</p>
        </div>
        </div>
      </div>
    ))}
  </div>
  );
}
