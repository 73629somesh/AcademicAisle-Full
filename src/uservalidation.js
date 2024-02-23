import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import validator from 'validator'

const uservalidation = (values) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let errors = {}

    if (values.name.length === 0) {
        errors.name = "Name is required";
        console.log(errors.name);
        toast.error("Name cannot be empty")
    }else if(values.name.search(/^[a-zA-Z ]{2,40}$/)){
        errors.name = "Enter valid name";
        toast.error("Enter valid name")
    }

    if (values.city.length === 0) {
        errors.city = "City is required";
        console.log(errors.city);
        toast.error("City is required")
    }
    if (values.state == "") {
        errors.state = "State is required";
        console.log(errors.city);
        toast.error("State is required")
    }

    if (values.email === "") {      //npm install validator (used library) 
        errors.email = "Email is required";
        console.log(errors.email);
        toast.error("Email is required")
    } else if(!regex.test(values.email)) {
        errors.email = "Please enter a valid email address";
        toast.error("Enter a valid email address");
    }

    if (values.phone.length === 0) {
        errors.phone = "Phone number is required";
        console.log(errors.city);
        toast.error("Contact Number is required")
    } else if (values.phone.search(/^\d{10}$/)) {
        errors.phone = "please enter valid phone number";
        toast.error("Enter valid phone Number")

    }


    if (values.password === "") {
        errors.password = "Password is required";
        console.log(errors.password);
        toast.error("Password cannot be empty")
    } else if (!validator.isStrongPassword(values.password, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
        errors.password = "Weak Password";
    }


    if (values.cpassword.length === 0) {
        errors.cpassword = "Confirm Password is required";
        console.log(errors.cpassword);
        toast.error("Confirming Password is mandatory")
    }
    if (values.password && values.cpassword && values.password !== values.cpassword) {
        errors.cpassword = "Password does not match";
        console.log(errors.cpassword);
        toast.error("Password does not match");
    }

    return errors;

}

export default uservalidation;