import React, { useEffect, useState } from "react";
import "./user-lists.css";

const UserLists = () => {
  const [userLists, setUserLists] = useState([]);

  const getUserLists = async () => {
    const response = await fetch("https://dummyapi.io/data/v1/user?limit=10", {
      headers: { "app-id": "64ba4b25a3aa935817b41816" },
    });
    console.log(response);
    const users = await response.json();
    setUserLists(users?.data);
  };

  useEffect(() => {
    getUserLists();
  }, []);

  console.log(userLists);

  return (
    <main className="user-lists">
      {userLists.map((user, id) => {
        return (
          <div key={id} className="user" data-testid={`user-${id}`}>
            <img src={user.picture} alt={id} />
            <p>
              {user.firstName} {user.lastName}
            </p>
          </div>
        );
      })}
    </main>
  );
};

export default UserLists;
