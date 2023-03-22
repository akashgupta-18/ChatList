import React from "react";
import "./chatitem.css";

const ChatItem = (props) => {
  const { data } = props;
  const { title, imageURL, messageList, orderId, latestMessageTimestamp } = data;
  const time = new Date(latestMessageTimestamp);
  const lastmessage = messageList.length != 0 ? messageList[messageList.length -1] : '';

  return (
    <div className="list-container">
      <div className="content-info">
        <img src={imageURL} className="image" />
        <ul>
          <li>{title}</li>
          <li>Order {orderId}</li>
          {lastmessage != undefined && <li className="msgtxt">{lastmessage?.message}</li>}
        </ul>
      </div>
      <div className="time">{time.toLocaleDateString("en-US")}</div>
    </div>
  );
};

export default ChatItem;
