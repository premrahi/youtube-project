import React from "react";
import { timeAgo } from "./Description";

const Comment = ({ comments }) => {  // ✅ destructure properly
  return (
    <div>
      {comments?.map((item, i) => {
        const c = item?.snippet?.topLevelComment?.snippet; // ✅ correct path
        console.log(c);
        return (
          <div key={i} className="flex gap-3 my-3">
            <img
              alt="user"
              src={c?.authorProfileImageUrl}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex gap-2 items-center">
                <h1 className="font-semibold text-sm">{c?.authorDisplayName}</h1>
                <p className="text-xs text-gray-500">{timeAgo(c?.publishedAt)}</p>
              </div>
              <p className="text-sm mt-1">{c?.textDisplay}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;