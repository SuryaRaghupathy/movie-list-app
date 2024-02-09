// MovieSelector.js

import React, { useContext } from "react";
import { FilmDetailsContext } from "./Context";
import MultipleSelect from "./TitleSelector";

const MovieSelector = () => {
  const movies = useContext(FilmDetailsContext);

  return <MultipleSelect movies={movies} />;
};

export default MovieSelector;
