import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik, Field, ErrorMessage } from 'formik';
 import InputGroup from 'react-bootstrap/InputGroup';


export const Forms = () => {
  return (
    <div>
      <Formik
       initialValues={{ email: '', password: '',firstName: '',
         lastName: '',}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.password) {
           errors.password = 'Required';
         }else if (
  values.password.length >= 8 &&
  values.password.length <= 20 &&
  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(values.password)
) {
  errors.password = 'Password must include uppercase, lowercase, number, and special character';
}
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
           console.log(values);
         }, 400);
       }}
     >
      {({ isSubmitting,values,errors, touched }) => (
            <Form>
              
    <InputGroup className="mb-3">
      <InputGroup.Text>First and last name</InputGroup.Text>
      <Form.Control aria-label="First name" />
      
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
      <Form.Control aria-label="Last name" />
      
    </InputGroup>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group> */}
      <Form.Group>
        <>
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
    </>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox"><label>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label>
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        
       )}
     </Formik>
      
    </div>
  )
}

