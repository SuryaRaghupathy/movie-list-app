import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PopUpDetails from "./PopUpDetails";

const FilmDetails = () => {
  const [filmDetails, setFilmDetails] = useState([]);
  const [copiedMoviesArray, setCopiedMoviesArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://imdb-top-100-movies.p.rapidapi.com/",
        headers: {
          "X-RapidAPI-Key":
            "9090a5ca60msh62c3aed47d41960p17b592jsn864effd55a3f",
          "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const moviesArray = response.data || [];
        console.log(moviesArray);
        setFilmDetails(moviesArray);
        setCopiedMoviesArray(moviesArray); // Directly pass moviesArray without spreading
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("copiedMoviesArray:", copiedMoviesArray);
  }, [copiedMoviesArray]);

  return (
    <>
      <div className="h-screen p-4 mb-2 overflow-hidden">
        <h2 className="font-bold text-lg mb-5">Film Details</h2>
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
        </div>
      </div>
    </>
  );
};

export default FilmDetails;
