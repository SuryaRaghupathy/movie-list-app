// MovieSelector.js
import React from "react";
import MultipleSelect from "./TitleSelector";

const MovieSelector = ({ movies }) => {
  console.log(movies);
  // Now you can use the "movies" prop within this component

  return <MultipleSelect movies={movies} />;
};

export default MovieSelector;
