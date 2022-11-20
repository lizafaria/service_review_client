import React, { useState } from "react";
import swal from "sweetalert";

const Reviews = ({ review }) => {
  const { _id, title, email, bookDetails, bookID } = review;
  const [books, setBooks] = useState([]);
  console.log(review);
  const handleDelete = (_id) => {
    const confirm = window.confirm("Do You Want to Delete this Review?");
    if (confirm) {
      fetch(`https://bengliyan-server-lizafaria.vercel.app/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            swal("Deleted Successfully");
            const rest = books.filter((rRev) => rRev._id !== _id);
            setBooks(rest);
          }
        });
    }
  };
  return (
    <div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400 border">
        <p>Product: {title}</p>
        <p>Review: {bookDetails}</p>
        <p>ID: {bookID}</p>
        <p>Reviewer Email: {email}</p>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-blue-500 p-2 rounded"
        >
          {" "}
          Delete
        </button>
        <button className="bg-blue-500 p-2 rounded"> Update</button>
      </div>
    </div>
  );
};

export default Reviews;
