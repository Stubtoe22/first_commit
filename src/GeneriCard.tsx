import React from 'react';

type CardProps = {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

const Card = ({ title, children, footer }: CardProps) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
