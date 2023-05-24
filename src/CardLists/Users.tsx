import React, { useState, useEffect } from "react";
import Card from "../componets/GeneriCard";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cardConfigs = users.slice(0, 15).map((user) => ({
    key: `card${user.id}`,
    title: user.name,
    url: `/users/${user.id}`,
    children: (
      <>
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

export default UserList;
