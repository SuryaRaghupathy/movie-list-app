import React, { useContext } from "react";
import FilmDetails from "./FilmDetails";
import { FilmTitleContext, FilmYearContext } from "./Context";

const MovieList = () => {
  const [titles] = useContext(FilmTitleContext);
  const [years] = useContext(FilmYearContext);

  console.log(titles);
  console.log(years);

  return <FilmDetails titles={titles} years={years} />;
};

export default MovieList;
