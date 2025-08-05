import { useState } from "react";
import ContactForm, { CONTACT_FORM_FIELDS } from "../components/ContactForm";
import TextBlock from "../components/TextBlock";

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
    <div className="flex gap-4 h-full overflow-hidden">
      <section className="flex overflow-auto flex-col justify-center items-center w-full p-8">
        <div className="w-full max-w-2xl">
          <ContactForm onChange={handleOnChange} />
        </div>
      </section>
      <section className="flex flex-col justify-center border-l">
        <pre className="w-xl">
          <p>
            <span className="text-right-aligned-numbers">1</span>
            <span className="pl-4">
              <span className="text-indigo-500">const</span>{" "}
              <span className="text-heading-foreground">button</span> ={" "}
              <span className="text-rose-400">document.querySelector</span>
              <span className="text-heading-foreground">(</span>
              <span className="text-teal-400">"#sendBtn"</span>
              <span className="text-heading-foreground">)</span>;
            </span>
          </p>
          <p>
            <span className="text-right-aligned-numbers">2</span>
            <span className="pl-4">
              <span className="text-indigo-500">const</span>{" "}
              <span className="text-heading-foreground">message = {"{"}</span>
            </span>
          </p>
          <p className="overflow-hidden text-ellipsis">
            <span className="text-right-aligned-numbers">3</span>
            <span className="pl-8">
              <span className="text-primary-background">name:</span>{" "}
              <span className="text-teal-400">"{name}"</span>,
            </span>
          </p>
          <p className="overflow-hidden text-ellipsis">
            <span className="text-right-aligned-numbers">4</span>
            <span className="pl-8">
              <span className="text-primary-background">email:</span>{" "}
              <span className="text-teal-400">"{email}"</span>,
            </span>
          </p>
          <p className="overflow-hidden text-ellipsis">
            <span className="text-right-aligned-numbers">5</span>
            <span className="pl-8">
              <span className="text-primary-background">message:</span>{" "}
            </span>
            <span className="text-teal-400">
              "{message.replace(/\n/g, " ")}"
            </span>
          </p>
          <p>
            <span className="text-right-aligned-numbers">6</span>
            <span className="pl-4">
              <span className="text-heading-foreground">{"}"}</span>
            </span>
          </p>
          <p>
            <span className="text-right-aligned-numbers">7</span>
            <span></span>
          </p>
          <p>
            <span className="text-right-aligned-numbers">8</span>
            <span className="pl-4">
              <span className="text-rose-400">button.addEventListener</span>
              <span className="text-heading-foreground">(</span>
              <span className="text-teal-400">"click"</span>,{" "}
              <span className="text-heading-foreground">
                () ={">"} {"{"}
              </span>
            </span>
          </p>
          <p>
            <span className="text-right-aligned-numbers">9</span>
            <span className="pl-8">
              <span className="text-rose-400">form.send</span>
              <span className="text-heading-foreground">(message);</span>
            </span>
          </p>
          <p>
            <span className="text-right-aligned-numbers">10</span>
            <span className="pl-4">
              <span className="text-heading-foreground">{"})"}</span>
            </span>
          </p>
        </pre>
      </section>
    </div>
  );
};

export default Contact;
