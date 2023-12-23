import React from "react";
import { Link } from "react-router-dom";
import AuthorPosts from "./AuthorPosts";
import Thumbnail1 from "../images/mern-blog-assets-main/blog22.jpg";
import { MdEditDocument } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function PostDetail() {
  return (
    <section className="post-detail">
      <div className="containers post-detail__container">
        <div className="post-detail__header">
          <AuthorPosts />
          <div className="post-detail__buttons">
            <Link to={`/posts/werer/edit`} className="btn sm primary flex gap-1">
              <MdEditDocument className="text-[1rem] text-white" /> <span>Edit</span>
            </Link>
            <Link to={`/posts/werer/delete`} className="btn sm danger flex gap-1 ">
              <MdDelete className="text-[1rem] text-white" /><span>Delete</span>
            </Link>
          </div>
        </div>
        <h1>Post Title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail1} alt="humbnail" />{" "}
        </div>
        <p>
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <p>
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <p>
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <p>
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <p>
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
    </section>
  );
}

export default PostDetail;
