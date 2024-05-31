export class Donation {
    public donationAmount: number;
    public name: string;
    public id: number;
    public blessing: string;

    constructor(donationAmount: number, name: string, id: number, blessing: string) {
        this.donationAmount = donationAmount;
        this.name = name;
        this.id = id;
        this.blessing = blessing;
    }
}
