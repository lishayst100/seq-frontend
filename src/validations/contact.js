import * as yup from 'yup'


export const initialValues = {
    name: '',
    email: '',
    message: ''
} 


export const validationSchema = yup.object({
    name: yup.string().required('Name is Required'),
    email: yup.string().email("Type a Valid Email").required("Email is Required"),
    message: yup.string()
  });  