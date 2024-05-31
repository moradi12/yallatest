import { useEffect, useState } from "react";
import { Donation } from "../../Model/Donation";
import "./AllDonation.css";
import axios, { Axios } from "axios";
import { error } from "console";
export function AllDonation(): JSX.Element {
  const [donations, setDonations] = useState<Donation[]>([]);
  useEffect(() => {
    axios
      .get<Donation[]>(`/api/donations/list`)
      .then((response) => {
        setDonations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        "Error fetching data";
      });

    // if [] - what is inside here - will be executed when screen loads
    // for example - call to server, setDonation
  }, []);
  return (
    <div className="AllDonation">
      <div className="Box">
        {donations.map((donation, key) => (
          <div key={key}>
            <h1>{donation.name}</h1>
            <p>{donation.donationAmount}</p>
            <p>{donation.blessing}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
