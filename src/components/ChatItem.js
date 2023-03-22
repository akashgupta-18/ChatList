import React from "react";
import "./chatitem.css";

const ChatItem = (props) => {
  const { data } = props;
  const { title, imageURL, messageList, orderId, latestMessageTimestamp } = data;
  const time = new Date(latestMessageTimestamp);

  return (
    <div className="list-container">
      <div className="content-info">
        <img src={imageURL} className="image" />
        <ul>
          <li>{title}</li>
          <li>Order {orderId}</li>
          {messageList && <li></li>}
        </ul>
      </div>
      <div className="time">{time.toLocaleDateString("en-US")}</div>
    </div>
  );
};

export default ChatItem;
