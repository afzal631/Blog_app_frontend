import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditPosts() {
  const [title, setTitle] = useState("");
  const [selectcategory, setSelectcategory] = useState("");

  const module = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "-1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formate = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockqoute",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const POST_CATEGORIES = [
    "Agriculture",
    "Bussiness",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
  ];
  return (
    <section className="creat-post">
      <div className="containers">
        <h2 className="text-[32px] font-semibold mb-7">Update Post</h2>
        <p className="form__error-message ">this is an error message</p>
        <form className="form create-post__form mt-3 grid gap-3">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            className=" py-2 px-4 flex w-full rounded-md "
            type="text"
            placeholder="Title"
            autoFocus
          />
          <select
            className="py-2 px-4 flex w-full rounded-md"
            name="Category"
            onChange={(e) => {
              setSelectcategory(e.target.value);
            }}
            value={selectcategory}
          >
            <option className="text-gray-500 font-sans">
              <i> Please select a category</i>
            </option>
            {POST_CATEGORIES.map((category) => {
              return (
                <>
                  <option className="bg-gray-100  my-5" key={category}>
                    {category}
                  </option>
                </>
              );
            })}
          </select>
          <ReactQuill
            modules={module}
            formats={formate}
            className="overflow-scroll h-[15rem] bg-[#ffebd1]"
          />
          <input type="file" accept="png,jpg,jpeg" />
          <button type="submit" className="btn primary">
            Update
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditPosts;
