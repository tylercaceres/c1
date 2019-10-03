import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const getData1 = async () => {
    try {
      const data = await axios.get("https://jsonplaceholder.typicode.com/comments");
      setLoading(false);
      setComments(data.data);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const commentMap = comments.map((comment) => {
    return (
      <ul style={{ border: "5px solid red" }} key={comment.id}>
        <li>Post ID: {comment.postId}</li>
        <li>Name: {comment.name}</li>
        <li>Email: {comment.email}</li>
        <li>Body: {comment.body}</li>
      </ul>
    );
  });

  const content = loading ? <p>loading ...</p> : commentMap;

  return (
    <div>
      <h1>NEWEST TESTING ON 03 OCTOBER 2019 - Tyler Caceres</h1>
      <button onClick={getData1}>get data btn</button>
      {content}
    </div>
  );
};

export default App;
