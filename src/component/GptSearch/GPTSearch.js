import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar.js";
import { BackgroundImg } from "../../utils/constant";

const GPTSearch = () => {
  return (
    <>
      <div className="-z-10 fixed">
        <img
          className="h-screen object-cover md:w-screen "
          src={BackgroundImg}
          alt="Background Image"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
