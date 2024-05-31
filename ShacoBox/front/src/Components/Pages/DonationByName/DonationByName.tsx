




import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import "./DonationByName.css";
import { SingleDonation } from "../SingleDonation/SingleDonation";

export function DonationByName(): JSX.Element {
  const [searchName, setSearchName] = useState<string>("");
  const [donations, setDonations] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const getData = () => {
    axios
      .get(`/api/donations/name/${searchName}`)
      .then((res: AxiosResponse) => {
        console.log(res.data);
        setDonations([res.data]);
        setMessage("Donation fetched successfully!");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      });
  };

  const handleSearchButtonClick = () => {
    if (searchName.trim() !== "") {
      getData();
    } else {
      setError("Please enter a name to search.");
    }
  };

  return (
    <div className="DonationByName">
      <div className="Box">
        <input
          type="text"
          placeholder="Enter name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input type="button" value="Search" onClick={handleSearchButtonClick} />
      </div>
      <hr />
      {error && <div className="error">{error}</div>}
      {message && <div className="message">{message}</div>}
      {donations.map((donation: any, index: number) => (
        <div key={index}>
          <h2>Donation form {searchName}:</h2>
          <p>Name: {donation.name}</p>
          <p>Donation Amount: {donation.donationAmount}</p>
          {donation.blessing && <p>Blessing: {donation.blessing}</p>}
        </div>
      ))}
    </div>
  );
}




// import React, { useState } from "react";
// import axios, { AxiosResponse } from "axios";
// import "./DonationByName.css";

// export function DonationByName(): JSX.Element {
//   const [searchName, setSearchName] = useState<string>("");
//   const [donor, setDonor] = useState<any>(null);
//   const [error, setError] = useState<string>("");

//   const handleSearch = () => {
//     axios.get(`/api/donations/name/${searchName}`)
//       .then((res: AxiosResponse) => {
//         setDonor(res.data);
//         setError("");
//       })
//       .catch((error) => {
//         console.error("Error searching donation:", error);
//         setError("Error searching donation. Please try again later.");
//         setDonor(null);
//       });
//   };

//   const handleSearchButtonClick = () => {
//     if (searchName.trim() !== "") {
//       handleSearch();
//     } else {
//       setError("Please enter a name to search.");
//     }
//   };

//   return (
//     <div className="DonationByName">
//       <div>
//         <label htmlFor="searchName">Search by Name:</label>
//         <input
//           type="text"
//           id="searchName"
//           value={searchName}
//           onChange={(e) => setSearchName(e.target.value)}
//           required
//         />
//         <button onClick={handleSearchButtonClick}>Search</button>
//       </div>
//       {error && <div className="error">{error}</div>}
//       {donor && (
//         <div>
//           <h2>Donation for {searchName}:</h2>
//           <p>Name: {donor.name}</p>
//           <p>Donation Amount: {donor.donationAmount}</p>
//           {donor.blessing && <p>Blessing: {donor.blessing}</p>}
//         </div>
//       )}
//     </div>
//   );
// }
