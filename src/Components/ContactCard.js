import React from "react";
import user from "../image/user.png";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img
        className="ui avtar image"
        src={user}
        alt="user"
        style={{ height: "50px", width: "50px" }}
      />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", float: "right" }}
      ></i>
    </div>
  );
};

export default ContactCard;
