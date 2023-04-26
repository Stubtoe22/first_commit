import React, { useState } from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  url: string;
};

const Card = ({ title, children, footer, url }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewPage = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleGoToPage = () => {
    if (url.startsWith("/comment")) {
      const commentUrl = `https://jsonplaceholder.typicode.com/comments/${url.slice(
        9
      )}`;
      window.open(commentUrl, "_blank");
    } else if (url.startsWith("/user")) {
      const userUrl = `https://jsonplaceholder.typicode.com/users/${url.slice(
        6
      )}`;
      window.open(userUrl, "_blank");
    } else {
      const postUrl = `https://jsonplaceholder.typicode.com/posts/${url.slice(
        7
      )}`;
      window.open(postUrl, "_blank");
    }
  };

  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
      <button className="viewpage" onClick={handleViewPage}>
        View Page
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{}</h2>
            <p>{}</p>
            <button onClick={handleGoToPage}>Go to page</button>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
