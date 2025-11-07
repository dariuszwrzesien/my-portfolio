import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import { CONTACT_FORM_FIELDS } from '../libs/types/ContactForm.types';
import TextBlock from '../components/TextBlock';
import ContactCode from '../components/ContactCode';
import ContactSuccess from '../components/ContactSuccess';
import ContactError from '../components/ContactError';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successSent, setSuccessSent] = useState(false);
  const [errorSent, setErrorSent] = useState(false);

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

  const handleOnSuccess = () => {
    setSuccessSent(true);
    setErrorSent(false);
  };

  const handleOnError = () => {
    setErrorSent(true);
    setSuccessSent(false);
  };

  const handleOnSendNewMessage = () => {
    setSuccessSent(false);
    setErrorSent(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex z-1 gap-4 h-full overflow-hidden">
      <section className="flex overflow-auto flex-col justify-center items-center w-full p-8">
        <div className="w-full max-w-2xl">
          {!successSent && !errorSent && (
            <ContactForm onChange={handleOnChange} onSuccess={handleOnSuccess} onError={handleOnError} />
          )}
          {successSent && <ContactSuccess onSendMessage={handleOnSendNewMessage} />}
          {errorSent && <ContactError onSendMessage={handleOnSendNewMessage} />}
        </div>
      </section>
      <section className="flex flex-col justify-center border-l bg-background/70">
        <ContactCode name={name} email={email} message={message} className="w-xl" />
      </section>
    </div>
  );
};

export default Contact;
