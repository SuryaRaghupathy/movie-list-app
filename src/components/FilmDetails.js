import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PopUpDetails from "./PopUpDetails";
import { FilmDetailsContext } from "./Context";
import { mockData } from "../data/mockData";
import FilteredComponent from "./FilteredList";

const FilmDetails = ({ titles, years }) => {
  const [filmDetails, setFilmDetails] = useContext(FilmDetailsContext);
  const [showFilmDetails, setShowFilmDetails] = useState(false);
  const [movieTitles, setMovieTitles] = useState(titles);

  const filteringArray = titles.concat(years);
  console.log("Filtering array:", filteringArray);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://imdb-top-100-movies.p.rapidapi.com/",
        headers: {
          "X-RapidAPI-Key":
            "fd48f6bbf7msh99da97f72555bd8p177503jsn09ef48db0f80",
          "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
          "Retry-After": "3600",
        },
      };

      try {
        // Use mock data for testing purposes
        const response = await axios.request(options);
        let moviesArray = response.data || [];
        moviesArray = mockData;
        setFilmDetails(moviesArray);
        console.log(moviesArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      console.log("unmounting");
    };
  }, [setFilmDetails]);

  const handleRemoveFilter = () => {
    setMovieTitles([]);
  };

  return (
    <>
      <div className="h-screen p-4 mb-2 overflow-hidden">
        <h2 className="flex font-bold text-lg mb-5">
          <div className="p-4"> Film Details</div>
        </h2>
        <div
          style={{
            maxHeight: "650px",
            overflowY: "auto",
            paddingRight: "10px",
          }}
        >
          {filteringArray.length === 0 ? (
            <FilteredComponent />
          ) : (
            <ul>
              {filmDetails
                .filter((movie) => {
                  return filteringArray.some(
                    (value) =>
                      movie.year === value || movie.title.includes(value)
                  );
                })
                .map((movie, index) => (
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
                        <div className="font-bold text-lg pt-3">
                          Year: {movie.year}
                        </div>
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
          )}
        </div>
      </div>
    </>
  );
};

export default FilmDetails;
