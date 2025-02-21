import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function HealthInsurance() {
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
    const data = await fetch(`${baseUrl}/health-insurances?populate=%2A`);
    const json = await data.json();
    console.log(json);
    SetPersonal(json.data || []);
  };
  const baseImgUrl = process.env.REACT_APP_IMG_BASE_URL;
  return (
    <div className="personal health">
        <div className="banner-middle"><div className="text"><h1 className="txt-medium cc-head">Health  Insurance</h1><p className="pd-bt-10">Health insurance helps cover the costs of medical care and treatments by paying for a portion of your expenses. It typically involves regular premiums, deductibles, and co-pays, offering financial protection against high medical bills.</p></div></div>
    {personal.map((item, index) => (
      <div key={index} className="personal-list">
        <div className="list">
            <div className="attributes">
        <div className="image">
          <img
            src={`${baseImgUrl}${item?.attributes?.logo?.data.attributes?.url}`}
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
