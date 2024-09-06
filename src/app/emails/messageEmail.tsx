import * as React from 'react';

interface MessageEmailTemplateProps {
  message: string;
}

export const MessageEmailTemplate: React.FC<Readonly<MessageEmailTemplateProps>> = ({
  message,
}) => (
  <div>
    <h3>Your have a new message:</h3>
    <hr />
    <p>{message}</p>
    <hr />
    <p style={{ fontSize: '12px' }}>Teext.me cannot see the content of this message.</p>
  </div>
);
