import { Donation } from "../../Model/Donation";
import "./SingleDonation.css";

export function SingleDonation(props:Donation): JSX.Element {
    return (
        <div className="SingleDonation Box ">
			<h1>{props.donationAmount}</h1><hr />
            <h2>{props.blessing}</h2><hr />
            <h4>{props.name}</h4><hr />

        </div>
    );
}
