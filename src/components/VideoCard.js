import React from "react";

const VideoCard = ({ info }) => {
//   console.log(info);
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  if (!thumbnails.medium.url) return null;
  return (
    <div className="shadow-lg m-1 p-2 w-72 cursor-pointer hover:shadow-xl rounded-xl">
      <img
        className="rounded-lg w-full h-40 object-cover"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <h1 className="font-semibold text-sm mt-2 line-clamp-2">{title}</h1>
      <h2 className="text-gray-500 text-xs mt-1">{channelTitle}</h2>
      <h3 className="text-gray-500 text-xs">
        {(viewCount / 1000).toFixed(1)}k views
      </h3>
    </div>
  );
};

export default VideoCard;
