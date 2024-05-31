import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import "./AddDonation.css";

export function AddDonation(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [blessing, setBlessing] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newDonation = {
      name,
      donationAmount,
      blessing,
    };

    axios
      .post(`/api/donations/add`, newDonation)
      .then((res: AxiosResponse) => {
        console.log(res.data);
        setMessage("Donation added successfully!");
        setError("");
        // Clear the form
        setName("");
        setDonationAmount(0);
        setBlessing("");
      })
      .catch((error) => {
        console.error("Error adding donation:", error);
        setError("Error adding donation. Please try again later.");
        setMessage("");
      });
  };

  return (
    <div className="AddDonation">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="donationAmount">Donation Amount:</label>
          <input
            type="number"
            id="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(+e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="blessing">Blessing:</label>
          <input
            type="text"
            id="blessing"
            value={blessing}
            onChange={(e) => setBlessing(e.target.value)}
          />
        </div>
        <button type="submit">Add Donation</button>
      </form>
      {error && <div className="error">{error}</div>}
      {message && <div className="message">{message}</div>}
    </div>
  );
}
