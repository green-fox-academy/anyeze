/*Reservations
Create a Reservation class by implementing all the features as required by the interface.
The booked reservations should look like the output below.
Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
Also, the DOW is randomly ordered to the bookings from an array.
DOW stands for Day of the Week (MON, TUE, etc.)*/

interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}

function generateBookingNumber() {
    let codeCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let bookingCode = "";
    for (let i = 0; i < 8; i++) {
        bookingCode += codeCharacters.charAt(Math.floor(Math.random() * codeCharacters.length));
    }
    return bookingCode;
}

class Reservation implements Reservationy {
    getDowBooking() {
        let DOW: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        return DOW[Math.floor(Math.random() * DOW.length)]
    }
    getCodeBooking() {
        return generateBookingNumber();
    }
    bookingDetail() {
        return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`;
    }
};


let reservationTheFirst = new Reservation;
let reservationTheSecond = new Reservation;
let reservationTheThird = new Reservation;
let reservationTheFourth = new Reservation;
let reservationTheFifth = new Reservation;
let reservationTheSixth = new Reservation;
let reservationTheSeventh = new Reservation;
let reservationTheEighth = new Reservation;
let reservationTheNinth = new Reservation;
let reservationTheTenth = new Reservation;

console.log(reservationTheFirst.bookingDetail());
console.log(reservationTheSecond.bookingDetail());
console.log(reservationTheThird.bookingDetail());
console.log(reservationTheFourth.bookingDetail());
console.log(reservationTheFifth.bookingDetail());
console.log(reservationTheSixth.bookingDetail());
console.log(reservationTheSeventh.bookingDetail());
console.log(reservationTheEighth.bookingDetail());
console.log(reservationTheNinth.bookingDetail());
console.log(reservationTheTenth.bookingDetail());
