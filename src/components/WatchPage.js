import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SUGGESTIONS_API, GOOGLE_API_KEY } from "../utils/constants";
import SuggestedVideo from "./SuggestedVideo";
import Description from "./Description";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v"); // id from ?v=videoId
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [videoTitle, setVideoTitle] = useState("");

  // first fetch the video details to get the title
  const getVideoDetails = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${GOOGLE_API_KEY}`,
    );
    const json = await data.json();
    const title = json?.items[0]?.snippet?.title;
    setVideoTitle(title);
    console.log(title);
    
    getSuggestedVideos(title); // 👈 then fetch suggestions using the title
  };

  const getSuggestedVideos = async (title) => {
    const data = await fetch(YOUTUBE_SUGGESTIONS_API(title));
    const json = await data.json();
    setSuggestedVideos(json?.items);
  };

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, [videoId]);

  //   console.log(videoTitle);

  return (
    <div className="flex">
      <div>
        <iframe
          width="1100"
          height="550"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div>
            <Description  />
        </div>
      </div>
      <div>
        {suggestedVideos && (
          <div>
            {suggestedVideos.map((vid) => (
              <SuggestedVideo key={vid.id.videoId} info={vid} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchPage;
