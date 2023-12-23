import React from "react";
import Avatar from "../images/mern-blog-assets-main/avatar13.jpg";

function AuthorPosts() {
  return (
    <div className="post__author">
      <div className="post__author-avatar">
        <img src={Avatar} alt="author_profile" />
      </div>
      <div className="post__author-details">
        <h5>By: Mohammed Afzal</h5>
        <small>Just now</small>
      </div>
    </div>
  );
}

export default AuthorPosts;
