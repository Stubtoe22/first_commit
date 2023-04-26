import React, { useState, useEffect } from "react";
import Card from "../../componets/GeneriCard";
import type CardProps from "../../componets/GeneriCard";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const CommentList = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cardConfigs = comments.slice(0, 15).map((comment) => ({
    key: `card${comment.id}`,
    title: `Comment ${comment.id}`,
    url: `/comment/${comment.id}`,
    children: (
      <>
        <p></p>
        <p></p>
        <p></p>
      </>
    ),
  }));

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cardConfigs.map(({ key, ...cardProps }) => (
        <div key={key} style={{ flex: "1 0 0" }}>
          <Card {...cardProps} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
