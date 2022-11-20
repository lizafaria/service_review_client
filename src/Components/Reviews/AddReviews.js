import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import swal from "sweetalert";
import auth from "../../Firebase.init";

const AddReviews = ({ details }) => {
  const { user } = useAuthState(auth);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();

    const review = {
      title: e.target.title.value,
      email: e.target.email.value,
      bookDetails: e.target.bookDetails.value,
      bookID: e.target.bookID.value,
    };

    fetch("https://bengliyan-server-lizafaria.vercel.app/addreviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal("Thanks for your Precious Review");
        } else {
          swal(data.error);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="mr-5">
      <section className="p-6 bg-red-100 text-gray-900">
        <form
          onSubmit={handleSubmit}
          action=""
          className="container flex flex-col mx-auto  ng-untouched ng-pristine ng-valid"
        >
          <p className="font-medium text-md">How was your experience?</p>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Product Title</label>

              <input
                defaultValue={details?.title}
                id="title"
                name="title"
                type="text"
                required
                placeholder="Product Title"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-200 dark:border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">email</label>

              <input
                disabled
                defaultValue={details?.email}
                id="email"
                name="email"
                type="text"
                required
                placeholder="User Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="title" className="text-sm">
                Book ID
              </label>

              <input
                defaultValue={details?._id}
                disabled
                id="bookID"
                name="bookID"
                type="text"
                required
                placeholder="bookID"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label for="bookDetails" className="text-sm">
                Review
              </label>
              <textarea
                id="bookDetails"
                name="bookDetails"
                required
                placeholder="Your Service bookDetails"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
              ></textarea>
            </div>
            <div className="text-right">
              <button className="py-2 px-6 bg-gray-800 rounded-lg text-white font-bold">
                Add
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddReviews;
