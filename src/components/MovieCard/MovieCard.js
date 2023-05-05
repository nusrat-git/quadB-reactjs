import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className=" lg:flex items-center shadow-2xl bg-slate-300 rounded-lg mx-auto lg:h-96">
        <div>
          {movie.show.image?.original && (
            <img
              src={movie.show.image.original}
              alt=""
              className="md:w-full lg:h-96 rounded-l-lg rounded-r-lg"
            />
          )}
        </div>
        <div className="md:py-5 px-4 md:px-10 lg:px-10 py-6">
          <h1 className="text-start my-2 text-4xl lg:text-2xl font-bold tracking-tight text-gray-900">
            {movie.show.name}
          </h1>
          <div className="flex gap-3">
            <h6 className="text-start mb-2 text-normal tracking-tight text-gray-900">
              Status: {movie.show.status}
            </h6>
          </div>
          <div className="flex lg:gap-4 gap-10">
            <div>
              <h4 className="text-start text-lg font-semibold tracking-tight text-gray-500">
                Rating
              </h4>
              <p className="text-start text-normal tracking-tight text-gray-900">
                {movie.show.rating.average ? movie.show.rating.average : "N/A"}
              </p>
            </div>
            <div>
              <h4 className="text-start text-lg font-semibold tracking-tight text-gray-500">
                Watch
              </h4>
              <p className="text-start text-normal tracking-tight text-gray-900">
                {movie.show.runtime ? `${movie.show.runtime} mins` : "N/A"}
              </p>
            </div>
          </div>
          <div className="flex gap-4 my-5">
            {movie.show.genres.map((gnr, i) => (
              <p
                key={i}
                className="text-start text-xs tracking-tight text-gray-600 bg-gray-200 rounded-md px-2 py-1"
              >
                {gnr}
              </p>
            ))}
          </div>
          <div className="text-start">
            <Link
              to={`/movies/${movie.show.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
