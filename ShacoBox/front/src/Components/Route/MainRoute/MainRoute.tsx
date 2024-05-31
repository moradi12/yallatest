import { Route, Routes } from "react-router-dom";
import "./MainRoute.css";
import { Main } from "../../Layout/Main/Main";
import { AddDonation } from "../../Pages/AddDonation/AddDonation";
import { AllDonation } from "../../Pages/AllDonation/AllDonation";
import { SmallDonation } from "../../Pages/SmallDonation/SmallDonation";
import { LargeDonation } from "../../Pages/LargeDonation/LargeDonation";
import { DonationByName } from "../../Pages/DonationByName/DonationByName";
import { Page404 } from "../../Pages/page404/page404";

export function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/" element = {<Main/>} />
                <Route path="/add" element = {<AddDonation/>} />
                <Route path="/all" element = {<AllDonation/>} />
                <Route path="/lower" element = {<SmallDonation/>} />
                <Route path="/higher" element = {<LargeDonation/>} />
                <Route path="byName" element = {<DonationByName/>} />
                <Route path="*" element = {<Page404/>} />



            </Routes>
        </div>
    );
}
