import { useState } from "react";
import ContactForm, { CONTACT_FORM_FIELDS } from "../components/ContactForm";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOnChange = (fieldName: string, value: string) => {
    switch (fieldName) {
      case CONTACT_FORM_FIELDS.NAME:
        setName(value);
        break;
      case CONTACT_FORM_FIELDS.EMAIL:
        setEmail(value);
        break;
      case CONTACT_FORM_FIELDS.MESSAGE:
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-8">
      <div>
        <ContactForm onChange={handleOnChange} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Your Input</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Message:</strong> {message}
        </p>
      </div>
    </div>
  );
};

export default Contact;
