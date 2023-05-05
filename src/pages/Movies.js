import React from "react";
import { useLoaderData } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MovieCard from "../components/MovieCard/MovieCard";

const Movies = () => {
  const movies = useLoaderData();

  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-10 gap-10">
      {movies.map((movie, i) => (
        <MovieCard movie={movie} key={i} />
      ))}
      <Toaster />
    </div>
  );
};

export default Movies;
