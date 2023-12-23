import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthorPosts from "../pages/AuthorPosts";
import { DUMMY_POSTS } from "../data";

function CategoryPosts() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts overflow-x-hidden">
      <div className="containers posts__container">
        {/* const randomIndex = Math.floor(Math.random() * array.length); for signgle blog on hero section*/}
        {posts && posts.length > 1 ? (
          posts.map(({ id, thumbnail, category, title, desc, authorID }) => {
            const shortdesc =
              desc.length > 145 ? desc.substr(0, 145) + "..." : desc;
            const shorttitle =
              title.length > 30 ? title.substr(0, 145) + "..." : title;
            return (
              <article className="post" key={id}>
                <div className="post__thumbnail">
                  <img src={thumbnail} alt="title" />
                </div>
                <div className="post__content">
                  <Link to={`/posts/${id}`} className="">
                    <h3 className="text-lg font-semibold">{shorttitle}</h3>
                  </Link>
                  <p>{shortdesc}</p>
                  <div className="post__footer">
                    <Link to={`/posts/${id}`}>
                      <AuthorPosts id={id} />
                    </Link>
                    <Link
                      to={`/posts/categories/${category}`}
                      className="btn category"
                    >
                      {category}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <h2>No Posts...</h2>
        )}
      </div>
    </section>
  );
}

export default CategoryPosts;
