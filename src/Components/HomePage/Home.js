import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingScreen from "../SharedPageSection/LoadingScreen";
import BooksCard from "./BooksCard";
import Carousol from "./Carousol";
import Testimonials from "./Testimonials";
import TrandingSection from "./TrandingSection";

const Home = () => {
  const [homebooks, gethomebooks] = useState([]);
  const navigate = useNavigate();

//   useEffect(() => {
//     console.log(homebooks.length);
//     fetch("https://bengliyan-server-lizafaria.vercel.app/homebooks")
//       .then((res) => res.json())
//       .then((data) => {
//         gethomebooks(data);
//       });
//   }, []);

  const updatebtnHandle = (_id) => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <div className="mb-72">
      <Carousol></Carousol>
      <TrandingSection></TrandingSection>

      <div>
        <div className="pt-11 space-y-3 ">
          <h1 className="text-gray-900 font-roboto text-center text-4xl font-bold">
            Books Collection
          </h1>
          <p className="text-center text-gray-500">
            Reading helps you developing your communication skills
          </p>
        </div>
        <div className="container mx-auto  pt-5 grid grid-cols-1  gap-7 md:grid-cols-2 lg:grid-cols-3">
          {homebooks.map((book) => (
            <BooksCard
              updatebtnHandle={updatebtnHandle}
              book={book}
              key={book._id}
            ></BooksCard>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to={"/all"}>
            <button className="px-7 py-1.5 text-xl bg-green-600 text-gray-200 font-semibold rounded-3xl">
              See ALL
            </button>
          </Link>
        </div>
      </div>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
