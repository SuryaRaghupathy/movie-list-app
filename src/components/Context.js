import { createContext, useState } from "react";

const FilmDetailsContext = createContext([]);
const FilmDetailsProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  // You can use the context here if needed, even though it's not necessary in this example

  return (
    <FilmDetailsContext.Provider value={[movies, setMovies]}>
      {children}
    </FilmDetailsContext.Provider>
  );
};

export { FilmDetailsContext, FilmDetailsProvider };
