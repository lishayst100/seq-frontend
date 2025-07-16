import React from "react";
import "./Contact.scss";
import Text from "../../components/Contact/Text/Text";
import Carusela from "../../components/Contact/Carusel/Carusela";
import Form from "../../components/Contact/Form/Form";
import transition from "../../transition";

const Contact = () => {
  return (
    <main className="contact">
      <section aria-label="מידע טקסטואלי ליצירת קשר">
        <Text />
      </section>

      <section aria-label="סליידר עם תמונות או תוכן">
        <Carusela />
      </section>

      <section aria-label="טופס יצירת קשר">
        <Form />
      </section>
    </main>
  );
};

export default transition(Contact);
