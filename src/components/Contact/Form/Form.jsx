import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { initialValues, validationSchema } from "../../../validations/contact";
import { BASE_URL } from "../../../utils/utils";


import animationData2 from '../../../lottie/send_04.json'
import Lottie from "lottie-react";



const FormContact = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const sendRef = useRef(null)


  

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
        sendRef.current.play()
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
        resetForm(); 
      }}
    >
      {({ handleSubmit }) => (
        <Form
          className="container  mx-auto d-flex flex-column gap-5 justify-content-start align-items-center form-container"
          onSubmit={handleSubmit}
        >
          <div className="input-div d-flex gap-2 justify-content-start w-75 pb-2">
           
            <Field
              type="text"
              className="text-black contact-input flex-grow-1"
              name="name"
              id="name"
              placeholder='Name*'
            />
            <ErrorMessage name="name" id="id" component={'div'} className="text-danger error-message" />
          </div>
          <div className="input-div d-flex gap-2 justify-content-start w-75 pb-2">
            
            <Field
              placeholder='Email*'
              type="email"
              className="text-black contact-input flex-grow-1"
              name="email"
              id="email"
            />
            <ErrorMessage  name="email" id="id" component={'div'} className="text-danger error-message" />
          </div>
          <div className="input-div d-flex gap-2 justify-content-start w-75 pb-2 mb-5">
            
            <Field
            placeholder='Your Message:'
              name="message"
              id="message"
              component="textarea"
              rows={3}
              className="text-black contact-input flex-grow-1"
            />
          </div>

         
          

          

          <div className="   w-75">
            <button  type="submit" className=" send-btn  d-flex justify-content-center align-items-center text-center" style={{width: 300}} >
                {<Lottie animationData={animationData2} autoplay={false} loop={false} lottieRef={sendRef} />}
            </button>
              

            
          </div>
          
         
            

            {/* <button type="submit" className="contact-btn" disabled={isLoading ? true : false}>
              {isLoading ? 'Sending...' : 'Send'}
            </button> */}
          

          {error && <div className="text-danger">{error}</div>}
         
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
