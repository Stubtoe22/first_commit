import React, { useState, useEffect } from "react";
import Card from "../componets/GeneriCard";
import { CardProps } from "@patternfly/react-core";

type Post = {
  userId: number;
  id: number;
  title: string;
  body?: string;
};

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.map(({ id, title, body }: Post) => ({
          id,
          title,
          body,
        }));
        setPosts(filteredData);
      })
      .catch((error) => console.error(error));
  }, []);
  const cardConfigs = posts.slice(0, 15).map((post) => ({
    key: `card${post.id}`,
    title: `ID ${post.id}`,
    children: <p></p>,
    url: `/posts/${post.id}`,
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

export default PostList;
