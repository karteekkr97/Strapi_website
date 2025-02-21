import React, { useState, useEffect } from "react";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(30000);
  const [months, setMonths] = useState(120);
  const [interestRate, setInterestRate] = useState(8.0);
  const [emi, setEmi] = useState(null);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  // Function to calculate EMI and amortization schedule
  const calculateEMI = () => {
    const P = loanAmount;
    const N = months;
    const R = interestRate / (12 * 100);

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emi.toFixed(2));

    // Calculate the amortization schedule
    let balance = P;
    let schedule = [];

    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principal = emi - interest;
      balance -= principal;

      schedule.push({
        paymentNo: i,
        beginningBalance: (balance + principal).toFixed(2),
        emi: emi.toFixed(2),
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        endingBalance: balance.toFixed(2),
      });
    }
    setAmortizationSchedule(schedule);
  };

  // Use useEffect to calculate EMI whenever loanAmount, months, or interestRate changes
  useEffect(() => {
    calculateEMI();
  }, [loanAmount, months, interestRate]);

  return (
    <div className="loan-calculator">
      <div className="main-section">
      <div className="input-section">
        <div>
          <label>Loan Amount is</label>
          <input
            type="range"
            min="10000"
            max="1000000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <span>{loanAmount}</span>
        </div>

        <div>
          <label>No. of Month is</label>
          <input
            type="range"
            min="12"
            max="360"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
          />
          <span>{months}</span>
        </div>

        <div>
          <label>Rate of Interest [ROI] is</label>
          <input
            type="range"
            min="1"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <span>{interestRate}</span>
        </div>
      </div>

      {emi && (
        <div className="output-section">
          <div>
            <p>Monthly EMI: <strong>{emi}</strong></p>
            <p>Total Interest: <strong>{(emi * months - loanAmount).toFixed(2)}</strong></p>
            <p>Payable Amount: <strong>{(emi * months).toFixed(2)}</strong></p>
            <p>Interest Percentage: <strong>{(((emi * months - loanAmount) / loanAmount) *  100).toFixed(2)}%</strong></p>
          </div>
        </div>
      )}
      </div>

      {amortizationSchedule.length > 0 && (
        <table className="amortization-table">
          <thead>
            <tr>
              <th>Payment No.</th>
              <th>Beginning Balance</th>
              <th>EMI</th>
              <th>Principal</th>
              <th>Interest</th>
              <th>Ending Balance</th>
            </tr>
          </thead>
          <tbody>
            {amortizationSchedule.map((payment) => (
              <tr key={payment.paymentNo}>
                <td>{payment.paymentNo}</td>
                <td>{payment.beginningBalance}</td>
                <td>{payment.emi}</td>
                <td>{payment.principal}</td>
                <td>{payment.interest}</td>
                <td>{payment.endingBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LoanCalculator;
