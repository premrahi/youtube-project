import React, { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";

const Description = ({
  videoTitle,
  description,
  channelId,
  viewCount,
  publishedAt,
}) => {
  const [channelName, setChannelName] = useState("");
  const [channelImg, setChannelImg] = useState("");
  const [subCount, setSubCount] = useState("");
  const [expanded, setExpanded] = useState(false);

  const channelInfo = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_API(channelId));
    const json = await data.json();

    // console.log(json);
    setChannelName(json?.items?.[0]?.snippet?.title); // channel title
    setChannelImg(json?.items?.[0]?.snippet?.thumbnails?.default?.url); // channel image
    setSubCount(json?.items?.[0]?.statistics?.subscriberCount);
  };

  useEffect(() => {
    if (!channelId) return; // early return
    channelInfo();
  }, [channelId]); // on every change in channel id it is recalled

  const formatCount = (count) => {
    // formats the count of subscribers in million and 100thousands
    if (count >= 1000000) return (count / 1000000).toFixed(1) + "M";
    if (count >= 1000) return (count / 1000).toFixed(1) + "K";
    return count;
  };

  const formatDescription = (text) => {
    //formats the description
    if (!text) return null;

    return text.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line.split(/(\bhttps?:\/\/\S+|\b\d+:\d+\b|#\w+)/g).map((part, j) => {
          // URLs
          if (/^https?:\/\//.test(part)) {
            return (
              <a
                key={j}
                href={part}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                {part}
              </a>
            );
          }
          // Timestamps
          if (/^\d+:\d+$/.test(part)) {
            return (
              <span
                key={j}
                className="text-blue-400 cursor-pointer hover:underline"
              >
                {part}
              </span>
            );
          }
          // Hashtags
          if (/^#\w+/.test(part)) {
            return (
              <span
                key={j}
                className="text-blue-400 cursor-pointer hover:underline"
              >
                {part}
              </span>
            );
          }
          return part;
        })}
        <br />
      </React.Fragment>
    ));
  };

  const timeAgo = (dateString) => {
    // formats the date and time
    const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} days ago`;

    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} weeks ago`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;

    const years = Math.floor(days / 365);
    return `${years} years ago`;
  };
  console.log("publishedAt:", publishedAt);

  return (
    <div className="mt-4">
      <h1 className="font-bold text-xl">{videoTitle}</h1>

      {/* channel name and logo*/}
      <div className="flex mt-3 h-12 items-center ">
        {channelImg && (
          <img
            alt="logo"
            src={channelImg}
            className="w-10 h-10 rounded-full cursor-pointer"
          ></img>
        )}
        <div className="mx-4 mt-1">
          <h3 className="  font-semibold text-lg cursor-pointer">
            {channelName}
          </h3>
          <p className="text-xs text-gray-500">
            {formatCount(subCount)} subscribers
          </p>
        </div>

        <button className="bg-black px-3 py-2 rounded-full hover:bg-gray-900 text-white font-semibold justify-center item-center">
          subscribe
        </button>
      </div>


      {/* description */}
      <div className="bg-slate-100 p-5 my-4 rounded-lg">
        <div className="flex -mt-2">
          <p className="font-semibold ">
            {formatCount(viewCount)} views{}
          </p>
          {publishedAt && (
            <p className="mx-4 font-semibold">{timeAgo(publishedAt)}</p>
          )}
        </div>
        <div className="bg-slate-100 my-4 rounded-lg">
          <p className="text-sm whitespace-pre-line">
            {expanded
              ? description
              : description?.split("\n").slice(0, 3).join("\n")}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-bold text-sm mt-1"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>
      </div>





    </div>
  );
};

export default Description;
