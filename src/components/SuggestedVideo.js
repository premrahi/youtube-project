
const SuggestedVideo = (info) => {
  return (
    <div className="flex m-1 p-1 shadow-md h-24">
      <img
      className="rounded-md"
        alt="thumbnail"
        src={info?.info?.snippet?.thumbnails?.default?.url}
      />
      <div className="ml-2">
        <h2 className="text-sm h-1/2">{info?.info?.snippet?.title}</h2>
        <h3 className="text-xs mt-4 text-gray-700">
          {info?.info?.snippet?.channelTitle}
        </h3>
      </div>
    </div>
  );
};

export default SuggestedVideo;
