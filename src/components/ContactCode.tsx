interface ContactCodeProps {
  name: string;
  email: string;
  message: string;
  className?: string;
}

const ContactCode = ({ name, email, message, className }: ContactCodeProps) => {
  return (
    <pre className={`w-xl ${className}`}>
      <p>
        <span className="text-right-aligned-numbers">1</span>
        <span className="pl-4">
          <span className="text-indigo-500">const</span> <span className="text-heading-foreground">button</span> ={' '}
          <span className="text-rose-400">document.querySelector</span>
          <span className="text-heading-foreground">(</span>
          <span className="text-teal-400">"#sendBtn"</span>
          <span className="text-heading-foreground">)</span>;
        </span>
      </p>
      <p>
        <span className="text-right-aligned-numbers">2</span>
        <span className="pl-4">
          <span className="text-indigo-500">const</span>{' '}
          <span className="text-heading-foreground">message = {'{'}</span>
        </span>
      </p>
      <p className="overflow-hidden text-ellipsis">
        <span className="text-right-aligned-numbers">3</span>
        <span className="pl-8">
          <span className="text-primary-background">name:</span> <span className="text-teal-400">"{name}"</span>,
        </span>
      </p>
      <p className="overflow-hidden text-ellipsis">
        <span className="text-right-aligned-numbers">4</span>
        <span className="pl-8">
          <span className="text-primary-background">email:</span> <span className="text-teal-400">"{email}"</span>,
        </span>
      </p>
      <p className="overflow-hidden text-ellipsis">
        <span className="text-right-aligned-numbers">5</span>
        <span className="pl-8">
          <span className="text-primary-background">message:</span>{' '}
        </span>
        <span className="text-teal-400">"{message.replace(/\n/g, ' ')}"</span>
      </p>
      <p>
        <span className="text-right-aligned-numbers">6</span>
        <span className="pl-4">
          <span className="text-heading-foreground">{'}'}</span>
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
          <span className="text-teal-400">"click"</span>,{' '}
          <span className="text-heading-foreground">
            () ={'>'} {'{'}
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
          <span className="text-heading-foreground">{'})'}</span>
        </span>
      </p>
    </pre>
  );
};

export default ContactCode;
