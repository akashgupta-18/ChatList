import React, { useState, useEffect } from "react";
import ChatItem from "./ChatItem";
import './chatlist.css';

const ChatList = () => {
  const [filteredList, setFilteredList] = useState([]);

  const fetchChatList = () => {
    const url = "https://my-json-server.typicode.com/codebuds-fk/chat/chats";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilteredList(data);
      });
  };

  const handleChange = (event) => {
    const query = event.target.value;
    var updatedList = [...filteredList];
    updatedList = updatedList.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.orderId.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    let timer = setTimeout(() => {
        setFilteredList(updatedList);
    },3000)
    return () => clearTimeout(timer)
  }

  useEffect(() => {
    fetchChatList();
  }, []);


  return (
    <>
      <div className="container">
        <span className="inner-container">
          <h3 className="heading">Filter by Title / Order ID</h3>
          <input type="text" placeholder="Start typing to search" onChange={handleChange}/>
        </span>
      </div>
      <div className="listitems">
        {filteredList != undefined &&
          filteredList.length !== 0 &&
          filteredList.map((item) => {
            return <ChatItem data={item} />;
          })}
      </div>
    </>
  );
};

export default ChatList;
