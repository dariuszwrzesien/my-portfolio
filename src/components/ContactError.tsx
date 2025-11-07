import React from 'react';
import { Button } from './ui';
import { RiErrorWarningLine } from '@remixicon/react';

const ContactError = ({ onSendMessage }: { onSendMessage: () => void }) => (
  <div className="flex flex-col justify-center items-center gap-4">
    <RiErrorWarningLine className="text-6xl text-red-500" />
    <h4 className="text-heading-foreground">Oh no!</h4>
    <p>Something went wrong. Please try again later.</p>
    <Button onClick={onSendMessage}>send-new-message</Button>
  </div>
);

export default ContactError;
