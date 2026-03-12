import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="m-2 p-2  shadow-md w-56">
      <Link to="/">
        <h1 className="font-semibold text-center text-lg m-4 shadow-md rounded-2xl p-2 ">
          🛖 Home
        </h1>
      </Link>
      <h1 className="font-semibold text-center text-lg m-4 shadow-md rounded-2xl p-2 ">
        Shorts🩳
      </h1>
      <hr></hr>

      <h1 className="font-semibold text-lg m-4 shadow-md rounded-2xl p-2 ">
        Subscription {">"}
      </h1>
      <ul>
        <li className="mx-8">Sports</li>
        <li className="mx-8">Music</li>
        <li className="mx-8">Movies</li>
        <li className="mx-8">Gaming</li>
      </ul>
      <br></br>
      <hr></hr>

      <h1 className="font-semibold text-lg m-4 mt-5 shadow-md rounded-2xl p-2 ">
        Trending {">"}
      </h1>
      <ul>
        <li className="mx-8">Sports</li>
        <li className="mx-8">Music</li>
        <li className="mx-8">Movies</li>
        <li className="mx-8">Gaming</li>
      </ul>

      <br></br>
      <hr></hr>

      <h1 className="font-semibold text-lg m-4 mt-5 shadow-md rounded-2xl p-2 ">
        You {">"}
      </h1>
      <ul>
        <li className="mx-8">History</li>
        <li className="mx-8">Playlist</li>
        <li className="mx-8">Watch later</li>
        <li className="mx-8">Liked videos</li>
        <li className="mx-8">Your videos</li>
        <li className="mx-8">Show more</li>
      </ul>

      <br></br>
      <hr></hr>

      <h1 className="font-semibold text-lg m-4 mt-5 shadow-md rounded-2xl p-2 ">
        You {">"}
      </h1>
      <ul>
        <li className="mx-8">History</li>
        <li className="mx-8">Playlist</li>
        <li className="mx-8">Watch later</li>
        <li className="mx-8">Liked videos</li>
        <li className="mx-8">Your videos</li>
        <li className="mx-8">Show more</li>
      </ul>

      <br></br>
      <hr></hr>

      <h1 className="font-semibold text-lg m-4 mt-5 shadow-md rounded-2xl p-2 ">
        You {">"}
      </h1>
      <ul>
        <li className="mx-8">History</li>
        <li className="mx-8">Playlist</li>
        <li className="mx-8">Watch later</li>
        <li className="mx-8">Liked videos</li>
        <li className="mx-8">Your videos</li>
        <li className="mx-8">Show more</li>
      </ul>
    </div>
  );
};

export default Sidebar;
