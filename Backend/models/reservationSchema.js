import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain atleast 3 characters!"],
        maxLength: [30, "First name cannot exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain atleast 3 characters!"],
        maxLength: [30, "Last name cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail,"Provide a valid Email!"],
    },
    phone: {
        type: String,
        required: true,
        maxLength: [10, "Phone number must contain 10 digits!"],
        minLength: [10, "Phone number must contain 10 digits only !"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

const Reservation = mongoose.model('Reservation', reservationSchema);


export default Reservation;