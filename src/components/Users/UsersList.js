import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, index) => {
          return (
            <li key={index}>
              {user.name} ({user.age} years Old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
