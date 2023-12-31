import React, { useState } from "react";
import { IMG_CDN_URL } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { BsFillCartPlusFill } from "react-icons/bs";
import lang from "../../utils/languageConstant";

const MovieCard = ({ posterPath, movies }) => {
  const [isHovered, setIsHovered] = useState(false);
  const languageKey = useSelector((store) => store.config.lang);

  const dispatch = useDispatch();

  if (!posterPath) return null;

  const videoPlay = () => {
    setIsHovered(true);
  };

  const videoPlay1 = () => {
    setIsHovered(false);
  };

  const handleAddItem = (posterPath) => {
    dispatch(addItem(posterPath));
    toast.success("Movie Added to Cart");
  };

  return (
    <>
      <div
        className="md:w-[200px] pr-4 w-40 cursor-pointer"
        onMouseEnter={videoPlay}
        onMouseLeave={videoPlay1}
      >
        {isHovered ? (
          <>
            <div className="">
              <iframe
                className="w-[185px] h-[210px] "
                // src={`https://www.youtube.com/embed/${playVideo?.key}?&autoplay=1&mute=1`}
                src={`https://www.youtube.com/embed/dG91B3hHyY4?&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>

              <button
                className="text-white bg-red-600 p-1 rounded-lg mt-2 ml-12"
                onClick={() => handleAddItem(posterPath)}
              >
                <div className="flex ">
                  {lang[languageKey].addButton} :{" "}
                  <div className="mt-1 ">
                    <BsFillCartPlusFill />
                  </div>
                </div>
              </button>
              <ToastContainer />
            </div>
          </>
        ) : (
          <img alt="Movie card" src={IMG_CDN_URL + posterPath} />
        )}
      </div>
    </>
  );
};

export default MovieCard;
