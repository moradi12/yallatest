import React, { useState } from "react";
import "./LargeDonation.css";
import { Donation } from "../../Model/Donation";
import axios, { AxiosResponse } from "axios";
import { SingleDonation } from "../SingleDonation/SingleDonation";

export function LargeDonation(): JSX.Element {
  const [amount, setAmount] = useState(0);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const getData = () => {
    axios
      .get<Donation[]>(`/api/donations/amount/greater_than/${amount}`)
      .then((res: AxiosResponse<Donation[]>) => {
        console.log(res.data);
        setDonations(res.data);
        setMessage("Donations fetched successfully!");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      });
  };

  return (
    <div className="LargeDonation">
      <div className="Box">
        <input
          type="number"
          placeholder="Enter amount"
          onChange={(args) => setAmount(+args.target.value)}
        />
        <input type="button" value="Search" onClick={getData} />
      </div>
      <hr />
      {error && <div className="error">{error}</div>}
      {message && <div className="message">{message}</div>}
      {donations.map((item) => (
        <SingleDonation
          key={item.id}
          donationAmount={item.donationAmount}
          name={item.name}
          id={item.id}
          blessing={item.blessing}
        />
      ))}
    </div>
  );
}
