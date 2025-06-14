import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
 

export const Validation = () => {
  const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('First name is required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Last name is required'),
   email: Yup.string().email('Invalid email').required('Email is required'),
   mobile:Yup.string().required('Mobile number is required')
                        // .max(10,'Mobile must be atleast 10 digits')
                        // .matches(/[0-9]/,'Mobile number must be 10 digits'),
                    .matches(/^[0-9]{10}$/,'Mobile number be exactly 10 digits'),
   password:Yup.string().min(8,'Password must be atleast 8 characters')
                        .matches(/[A-Z]/,'Password must contain one uppercase letter')
                        .matches(/[a-z]/,'Password must contain one lowercase letter')
                        .matches(/\d/,'Password must contain atleast one number')
                        .matches(/[!@#$%^&*]/,'Password must contain at least one special character')
                        .required('Password is required'),
 });
  return (
    <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
         mobile:'',
         password:'',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <Field name="mobile" type="mobile" />
           {errors.mobile && touched.mobile ? <div>{errors.mobile}</div> : null}
           <Field name="password" type="password" />
           {errors.password && touched.password ? <div>{errors.password}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
  )
}
