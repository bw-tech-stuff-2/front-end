import * as yup from "yup";

const LoginFormSchema = yup.object().shape({
    username: yup.string()
        .trim()
        .min(4, "The username must be at least four characters long.")
        .required("The username is a required field."),
    password: yup.string()
        .trim()
        .min(6, "Your password must be at least 6 characers long.")
        .required("The password is a required field."),
    fullName: yup.string()
        .trim()
        .required("The full name is a required field."),
    userType: yup.string()
        .trim()
        .required("You must select if you are an owner and a renter.")
})

export default LoginFormSchema