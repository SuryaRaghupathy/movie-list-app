import React, { useContext } from "react";
import { FilmDetailsContext } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PopUpDetails from "./PopUpDetails"; // Import PopUpDetails

const FilteredComponent = () => {
  const [filmDetails] = useContext(FilmDetailsContext);

  return (
    <div
      style={{
        maxHeight: "650px",
        overflowY: "auto",
        paddingRight: "10px",
      }}
    >
      <ul>
        {filmDetails.map((movie, index) => (
          <li
            key={index}
            className="bg-[#eee477] p-4 h-30 border-spacing-5 mb-2"
          >
            <div className="flex">
              <div>
                <img
                  src={movie.image}
                  alt={movie.title}
                  style={{ maxWidth: "100%", height: "120px" }}
                />
              </div>
              <div className="flex-grow flex flex-col justify-center pl-3">
                <div className="font-bold text-lg">
                  {index + 1}.{movie.title}
                </div>
                <div className="font-bold text-lg pt-3">Year: {movie.year}</div>
                <div className="font-bold text-lg pt-3">
                  <FontAwesomeIcon icon={faStar} /> {movie.rating} / 10
                </div>
              </div>
              <div className="flex items-center justify-end">
                <PopUpDetails movieDetails={movie} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredComponent;
