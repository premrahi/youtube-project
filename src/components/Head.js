import { useDispatch } from "react-redux";
import mic from "../assets/mic.png";
import user from "../assets/user.png";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (searchQuery.length === 0) {
      setSuggestion([]);
      setShowSuggestions(false);
      return;
    }
    const timer = setTimeout(() => getSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API(searchQuery));
      const json = await data.json();
      setSuggestion(json[1]);
      setShowSuggestions(true);
    } catch (e) {
      console.log("Error fetching suggestions", e);
    }
  };

  return (
    <div className="flex items-center justify-between shadow-md px-4 py-2">
      {/* Left - Logo */}
      <div className="flex items-center flex-shrink-0">
        <img
          onClick={() => toggleMenuHandler()}
          alt="menu"
          className="w-8 p-1 mr-3 h-8 cursor-pointer hover:bg-gray-200 rounded-full"
          src="https://static.vecteezy.com/system/resources/previews/046/501/988/non_2x/hamburger-menu-bar-flat-icon-for-apps-and-websites-website-navigation-hamburger-menu-icons-vector.jpg"
        />
        <div className="relative">
          <img
            alt="yt-icon"
            className="w-24 cursor-pointer"
            src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
          />
          <span className="absolute top-0 -right-4 text-gray-500 text-xs">
            IN
          </span>
        </div>
      </div>

      {/* Center - Search Bar */}
      <div className="relative">
        <div className="flex items-center justify-center mx-4">
          <input
            type="text"
            className="border border-gray-300 border-r-0 w-[37rem] px-4 rounded-l-full focus:outline-none focus:border-blue-500 text-sm h-10"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="border border-gray-300 border-l-0 bg-gray-100 hover:bg-gray-200 px-5 h-10 rounded-r-full flex items-center justify-center">
            <img
              alt="search"
              src="https://www.freeiconspng.com/uploads/search-icon-png-21.png"
              className="w-5 h-5"
            />
          </button>
          <button className="ml-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <img alt="voice" src={mic} className="w-5 h-5" />
          </button>
        </div>

        {showSuggestions && suggestion?.length > 0 && (
          <div className="absolute bg-white py-2 shadow-lg rounded-lg border w-[37rem] ml-4 border-gray-200 z-50">
            <ul className="mx-5 py-3">
              {suggestion?.map((s) => (
                <li
                  key={s}
                  className="hover:bg-gray-100 py-1 px-2 rounded cursor-pointer text-sm flex"
                  onClick={() => {
                    setSearchQuery(s);
                    setShowSuggestions(false);
                  }}
                >
                  <img alt="search" className="w-5 h-5 mr-5" src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" /> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right - User Icon */}
      <div className="flex-shrink-0 ">
        <img alt="user" src={user} className="w-10 " />
      </div>
    </div>
  );
};

export default Head;
