import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { initialValues, validationSchema } from "../../../validations/contact";
import { BASE_URL } from "../../../utils/utils";


const FormContact = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = async (formValues) => {
    setIsLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/mail/sendEmail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setMessage('Email sent successfully');
        setError('');
      } else {
        // Handle non-JSON response
        const errorText = await response.text();
        setError(errorText || 'Error sending the email');
        setMessage('');
      }
    } catch (error) {
      setError('Error sending the email');
      setMessage('');
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        handleForm(values);
        resetForm(); // Optional: Reset the form after successful submission
      }}
    >
      {({ handleSubmit }) => (
        <Form
          className="container mx-auto d-flex flex-column gap-5 justify-content-start align-items-center form-container"
          onSubmit={handleSubmit}
        >
          <div className="input-div d-flex gap-2 justify-content-start w-75 pb-2">
            <label htmlFor="name" className="text-black">
              Name*
            </label>
            <Field
              type="text"
              className="text-black contact-input flex-grow-1"
              name="name"
              id="name"
            />
            <ErrorMessage name="name" id="id" component={'div'} className="text-danger error-message" />
          </div>
          <div className="input-div d-flex gap-2 justify-content-start w-75 pb-2">
            <label htmlFor="email" className="text-black">
              Email*
            </label>
            <Field
              type="email"
              className="text-black contact-input flex-grow-1"
              name="email"
              id="email"
            />
            <ErrorMessage name="email" id="id" component={'div'} className="text-danger error-message" />
          </div>
          <div className="input-div d-flex gap-2 justify-content-start w-75 pb-2 mb-5">
            <label htmlFor="message" className="text-black">
              Your Message:
            </label>
            <Field
              name="message"
              id="message"
              component="textarea"
              rows={3}
              className="text-black contact-input flex-grow-1"
            />
          </div>

         
          {error && <div className="text-danger">{error}</div>}
         
          {message && <div className="text-success">{message}</div>}

          

          <div className="w-75  d-flex justify-content-start">
            <button type="submit" className="contact-btn" disabled={isLoading ? true : false}>
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
