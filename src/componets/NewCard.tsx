import React, { useState } from "react";

import { Link } from "react-router-dom";
export type NewCardProps = {
  title: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  url?: string;
};

const NewCard = ({ title, children, footer, url }: NewCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    
  <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
      {url && <Link to={url} content="View Page"/>} 

    </div>
  );
};

export default NewCard;
