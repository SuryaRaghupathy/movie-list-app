import React from "react";
import CategoryList from "./CategoryList";
import MovieList from "./MovieList";

const MainPage = () => {
  return (
    <React.Fragment>
      <style>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
      <div className="flex">
        <div className="w-1/4 p-4 h-screen bg-[#eee477]">
          <CategoryList />
        </div>

        <div className="w-3/4 h-screen bg-slate-300 p-4">
          <MovieList />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
