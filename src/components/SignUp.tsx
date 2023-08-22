import { Formik } from "formik";
import * as Yup from "yup";
import { Container, Paper, Button, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface FormModel{
    name: string,
    phone: string,
    email: string
}

const ValidateForm = Yup.object().shape({
    name: Yup.string()
        .required('*Name is required')
        .min(2, '*Name is too short'),
    phone: Yup.string()
        .required('*Phone Number is required')
        .matches(/^[0-9\b]+$/, '*Enter number only')
        .min(10, '*Phone Number not less than 10 digits')
        .max(10, '*Phone Number not exceed 10 digits'),
    email: Yup.string()
        .required('*Email is required!')
        .email('*Invalid Email')
});

const SignUp = () => {

    const navigate = useNavigate();

    return(
        <Container>
            <h1>SignUp</h1>
            <Paper>
                <Formik<FormModel>
                    initialValues={{
                        name: "",
                        phone: "",
                        email: ""
                    }}
                    validationSchema={ValidateForm}
                    onSubmit={(values) => {
                        localStorage.setItem('form', JSON.stringify(values));
                        navigate('/second-page');
                    }}
                >
                    { ({handleSubmit, values, errors, touched, handleChange, handleBlur}) => (
                        <form  className="form_container" onSubmit={handleSubmit}>
                            <div className="input_container">
                                <TextField className="input" type="text" id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} label="Name" variant="outlined" />
                                {touched.name && errors.name && (<p className="error">{errors.name}</p>)}
                            </div>

                            <div className="input_container">
                                <TextField className="input" type="text" id="phone" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} label="Phone Number" variant="outlined" />
                                {touched.phone && errors.phone && (<p className="error">{errors.phone}</p>)}
                            </div>

                            <div className="input_container">
                                <TextField className="input" type="email" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} label="Email" variant="outlined" />
                                {touched.email && errors.email && (<p className="error">{errors.email}</p>)}
                            </div>
                            
                            <Button variant="contained" endIcon={<Send />} type="submit">Submit</Button>
                        </form>
                    )}
                </Formik>
            </Paper>
        </Container>
    )
};

export default SignUp;