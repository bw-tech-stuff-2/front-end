import * as yup from "yup";

const SignupFormSchema = yup.object().shape({
    username: yup.string()
        .trim()
        .min(4, "The username must be at least four characters long.")
        .required("The username is a required field."),
    password: yup.string()
        .trim()
        .min(6, "Your password must be at least 6 characers long.")
        .required("The password is a required field."),
    email: yup.string()
        .trim()
        .email("The email must be a valid email."),
    fullName: yup.string()
        .trim()
        .required("The full name is a required field.")
})

export default SignupFormSchema