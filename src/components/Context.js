import React, { createContext, useState } from "react";

const FilmDetailsContext = createContext([]);
const FilmTitleContext = createContext([]);
const FilmYearContext = createContext([]);

const FilmDetailsProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  console.log(movies); // Define setMoviesList function
  const [titles, setTitles] = useState([]);
  console.log(titles);
  const [years, setYears] = useState([]);
  console.log(years);
  return (
    <FilmDetailsContext.Provider value={[movies, setMovies]}>
      <FilmTitleContext.Provider value={[titles, setTitles]}>
        <FilmYearContext.Provider value={[years, setYears]}>
          {children}
        </FilmYearContext.Provider>
      </FilmTitleContext.Provider>
    </FilmDetailsContext.Provider>
  );
};

export {
  FilmDetailsContext,
  FilmDetailsProvider,
  FilmTitleContext,
  FilmYearContext,
};
