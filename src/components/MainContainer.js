import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex-grow min-w-0 overflow-hidden">
      <ButtonList />
    <VideoContainer />
    </div>
  );
};

export default MainContainer;
