import React from "react";
import CategoryList from "./CategoryList";
import MovieList from "./MovieList";
import { FilmDetailsProvider } from "./Context";

const MainPage = () => {
  return (
    <FilmDetailsProvider>
      <div className="flex overflow-hidden">
        <div className="w-1/4 p-4 h-screen bg-[#eee477]">
          <CategoryList />
        </div>

        <div className="w-3/4 h-screen bg-slate-300 p-4">
          <MovieList />
        </div>
      </div>
    </FilmDetailsProvider>
  );
};

export default MainPage;
