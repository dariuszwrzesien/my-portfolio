import { Button } from './ui';

const ContactSuccess = ({ onSendMessage }: { onSendMessage: () => void }) => (
  <div className="flex flex-col justify-center items-center gap-4">
    <h4 className="text-heading-foreground">Thank You!</h4>
    <p>Your message has been sent successfully.</p>
    <Button onClick={onSendMessage}>send-new-message</Button>
  </div>
);

export default ContactSuccess;
