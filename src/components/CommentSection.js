import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";
import sortLogo from "../assets/sort.png";
import Comment from "./Comment";

const CommentSection = ({ videoId, totalComments }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API(videoId));
    const json = await data.json();
    const CommentData = json?.items;
    // console.log(CommentData);
    setComments(CommentData);
  };

  useEffect(() => {
    getComments();
  }, [videoId]);

  return (
    <div className="bg-slate-100 p-5 rounded-lg">
      <div className="flex">
        <h2 className="text-lg font-bold">{totalComments} Comments </h2>
        <div className="flex mx-14 cursor-pointer">
          <img alt="sort logo" src={sortLogo} className="w-4 m-1 h-4" />
          <h2 className=" font-semibold text-sm"> Sort by</h2>
        </div>
      </div>
      {comments.length > 0 && <Comment comments={comments} />}
    </div>
  );
};

export default CommentSection;
