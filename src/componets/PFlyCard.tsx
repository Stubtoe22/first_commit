import React from "react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardActions,
  CardTitle,
  CardBody,
  Checkbox,
  Dropdown,
  DropdownItem,
  EmptyStateVariant,
  KebabToggle,
  PageSectionVariants,
} from "@patternfly/react-core";

type CardProps = {
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  url: string;
};

const newCard = ({ title, children, footer, url }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewPage = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

    const handleGoToPage = () => {
    if (url.startsWith("/comments")) {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments/${url.slice(
        10
        )}`;
        window.open(commentUrl, "_blank");
    } else if (url.startsWith("/user")) {
        const userUrl = `https://jsonplaceholder.typicode.com/users/${url.slice(
        7
        )}`;
        window.open(userUrl, "_blank");
    } else {
        const postUrl = `https://jsonplaceholder.typicode.com/posts/${url.slice(
        7
        )}`;
        window.open(postUrl, "_blank");
    }
    }
  return (
    <Card>
      <CardHeader>
        <CardActions></CardActions>
      </CardHeader>
      <CardTitle>{}</CardTitle>
      <CardBody>
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
          </div>)};
      </CardBody>
    </Card>
  );
};

export default newCard;
