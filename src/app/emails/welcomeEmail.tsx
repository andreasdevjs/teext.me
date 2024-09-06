import * as React from 'react';

interface WelcomeEmailTemplateProps {
  message: string;
}

export const WelcomeEmailTemplate: React.FC<Readonly<WelcomeEmailTemplateProps>> = ({
  message,
}) => (
  <div>
    <h1>Your message:</h1>
    <hr />
    <p>{message}</p>
  </div>
);
