import React from "react";
import { useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
}

function Post() {
  //  fetching the data
  const { data, isLoading, isError } = useQuery<Post>({
    queryKey: ["postId"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
      const json = await res.json();
      return json;
    },
  });

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (isError) {
    return <div>Error</div>;
  }

  // Data display
  return (
    <div>
      <p>{data.id}</p>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

export default Post;