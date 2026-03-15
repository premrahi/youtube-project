import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isWatchPage = location.pathname === "/watch";

  return (
    <div
      className={`
      ${
        isWatchPage
          ? "absolute z-10 bg-white shadow-lg" // ✅ floating on watch page
          : "relative" // ✅ normal on home page
      }
    `}
    >
      <div
        className={`
      m-2 p-2 shadow-md w-56
      ${isWatchPage ? "bg-white" : ""}
    `}
      >
        <Link to="/">
          <h1 className="font-semibold text-center text-lg m-4 shadow-md rounded-2xl p-2 flex">
            <img
              alt="icon"
              src="https://cdn-icons-png.flaticon.com/128/20/20176.png"
              className="w-7 mx-4"
            ></img>{" "}
            Home
          </h1>
        </Link>

        <h1 className="font-semibold text-center text-lg m-4 shadow-md rounded-2xl p-2 flex">
          <img
            src="https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg"
            alt="logo"
            className="w-11 mx-2"
          ></img>
          Shorts
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
    </div>
  );
};

export default Sidebar;
