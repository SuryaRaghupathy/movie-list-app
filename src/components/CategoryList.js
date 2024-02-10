// CategoryList.js
import React, { useContext } from "react";
import { FilmDetailsContext } from "./Context";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import MovieSelector from "./MovieSelector";

const CategoryList = () => {
  const [isToggleOn1, setIsToggleOn1] = useState(false);
  const [isToggleOn2, setIsToggleOn2] = useState(false);

  const [movies, setMovies] = useContext(FilmDetailsContext);
  console.log(movies);

  const handleClick1 = () => {
    setIsToggleOn1(!isToggleOn1);
  };

  const handleClick2 = () => {
    setIsToggleOn2(!isToggleOn2);
  };

  return (
    <div>
      <ul>
        <li>
          <div className="flex my-5">
            <div className="font-bold text-lg flex-grow">Name</div>
            <div
              className="flex items-center justify-end"
              onClick={handleClick1}
            >
              {isToggleOn1 ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </div>
          </div>
          <MovieSelector movies={movies} />{" "}
          {/* Use MovieSelector component here */}
        </li>

        <hr className="border-black" />

        <li>
          <div className="flex my-5">
            <div className="font-bold text-lg flex-grow">Genre</div>
            <div
              className="flex items-center justify-end"
              onClick={handleClick2}
            >
              {isToggleOn2 ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </div>
          </div>
          <div
            style={{
              maxHeight: "500px",
              // overflowY: "hidden",
              paddingRight: "10px",
            }}
          >
            {/* <FilmDetails /> Use MovieSelector component here */}
          </div>
        </li>

        <hr className="border-black" />
      </ul>
    </div>
  );
};

export default CategoryList;
