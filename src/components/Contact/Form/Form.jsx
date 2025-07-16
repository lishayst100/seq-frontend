import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { initialValues, validationSchema } from "../../../validations/contact";
import { BASE_URL } from "../../../utils/utils";
import animationData2 from '../../../lottie/send_04.json';
import Lottie from "lottie-react";

const FormContact = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const sendRef = useRef(null);

  const handleForm = async (formValues, resetForm) => {
    setIsLoading(true);
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
        resetForm();
        sendRef.current.play();
        setError('');
      } else {
        const errorText = await response.text();
        setError(errorText || 'Error sending the email');
        setMessage('');
      }
    } catch (error) {
      setError('Error sending the email');
      setMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        handleForm(values, resetForm);
      }}
    >
      {({ handleSubmit }) => (
        <Form
          className="container mx-auto d-flex flex-column gap-5 justify-content-start align-items-center form-container"
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >

          {/* Name Field */}
          <div className="input-div d-flex gap-2 justify-content-start w-75 pb-2">
            <label htmlFor="name" className="visually-hidden">Name</label>
            <Field
              type="text"
              className="text-black contact-input flex-grow-1"
              name="name"
              id="name"
              placeholder='Name*'
              aria-describedby="name-error"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-danger error-message"
              id="name-error"
            />
          </div>

          {/* Email Field */}
          <div className="input-div d-flex gap-2 justify-content-start w-75 pb-2">
            <label htmlFor="email" className="visually-hidden">Email</label>
            <Field
              type="email"
              className="text-black contact-input flex-grow-1"
              name="email"
              id="email"
              placeholder='Email*'
              aria-describedby="email-error"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger error-message"
              id="email-error"
            />
          </div>

          {/* Message Field */}
          <div className="input-div d-flex gap-2 justify-content-start w-75 pb-2 mb-5">
            <label htmlFor="message" className="visually-hidden">Message</label>
            <Field
              placeholder='Your Message:'
              name="message"
              id="message"
              component="textarea"
              rows={3}
              className="text-black contact-input flex-grow-1"
              aria-describedby="message-error"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-danger error-message"
              id="message-error"
            />
          </div>

          {/* Submit Button */}
          <div className="w-75">
            <button
              type="submit"
              className="send-btn d-flex justify-content-center align-items-center text-center"
              style={{ width: 300 }}
              aria-label="Send message"
              disabled={isLoading}
            >
              <Lottie
                animationData={animationData2}
                autoplay={false}
                loop={false}
                lottieRef={sendRef}
              />
              <span className="visually-hidden">Send message</span>
            </button>

            {isLoading && (
              <div role="status" aria-live="polite" className="visually-hidden">
                Sending message...
              </div>
            )}
          </div>

          {/* Success Message */}
          {message && (
            <div className="text-success" role="status" aria-live="polite">
              {message}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="text-danger" role="alert">
              {error}
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
