import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";
import LoadingScreen from "../SharedPageSection/LoadingScreen";
import ManageCard from "../ManagePage.js/ManageCard";

const Myitems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myitems, setMyitems] = useState([]);
  //   const navigate = useNavigate();

  useEffect(() => {
    const getMyitems = async () => {
      const email = await user?.email;

      const url = `https://bengliyan-server-lizafaria.vercel.app/myitem?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyitems(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMyitems();
  }, [user]);

  const deleteHandle = (id) => {
    console.log(id);
    fetch(`https://bengliyan-server-lizafaria.vercel.app/remove/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confarm = window.confirm("Delete this item");
        if (confarm) {
          if (data?.deletedCount > 0) {
            const rest = myitems.filter((item) => item._id !== id);
            setMyitems(rest);
          }
        }
      });
  };
  if (loading) {
    return <LoadingScreen></LoadingScreen>;
  }
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mt-5">
        {" "}
        my total items: {myitems?.length}
      </h1>
      <div className="container flex justify-end">
        {user.displayName ? (
          <p>
            <span className="font-semibold">name:</span> {user?.displayName}{" "}
          </p>
        ) : (
          <p>
            <span className="font-semibold"></span>Email: {user?.email}{" "}
          </p>
        )}
      </div>

      {myitems.map((item) => (
        <ManageCard
          item={item}
          key={item._id}
          deleteHandle={deleteHandle}
        ></ManageCard>
      ))}
    </div>
  );
};

export default Myitems;
