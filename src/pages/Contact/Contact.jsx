import React from "react";
import "./Contact.scss";
import Text from "../../components/Contact/Text/Text";
import Carusela from "../../components/Contact/Carusel/Carusela";
import Form from "../../components/Contact/Form/Form";

const Contact = () => {
  return (
    <div className="contact">
      <Text />
      <Carusela/>
      <Form/>
    </div>
  );
};

export default Contact;
