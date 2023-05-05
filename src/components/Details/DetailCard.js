import React from "react";

const DetailCard = ({ detailData, setOpen }) => {
  const privateR = () => {
    setOpen(true);
  };

  return (
    <div className=" lg:flex gap-3 items-center shadow-2xl bg-slate-300 rounded-lg mx-auto lg:h-96">
      <div>
        {detailData.show.image?.original && (
          <img
            src={detailData.show.image.original}
            alt=""
            className="lg:w-96 lg:h-96 rounded-l-lg rounded-r-lg"
          />
        )}
      </div>
      <div className="p-5 md:py-5 md:px-16 md:flex-1">
        <h1 className="text-start my-2 text-2xl font-bold tracking-tight text-gray-900">
          {detailData.show.name}
        </h1>
        <p className=" text-start">{detailData.show.summary}</p>
        <h4 className="text-start mb-2 text-lg font-semibold tracking-tight text-gray-500">
          {detailData.company_name}
        </h4>
        <div className=" grid grid-cols-3 md:grid-cols-4 gap-3 lg:flex lg:gap-10 mt-5">
          <div>
            <h4 className="text-start text-lg font-semibold tracking-tight text-gray-500">
              Rating
            </h4>
            <p className="text-start text-normal tracking-tight text-gray-900">
              {detailData.show.rating.average
                ? detailData.show.rating.average
                : "N/A"}
            </p>
          </div>
          <div>
            <h4 className="text-start text-lg font-semibold tracking-tight text-gray-500">
              Watch
            </h4>
            <p className="text-start text-normal tracking-tight text-gray-900">
              {detailData.show.runtime
                ? `${detailData.show.runtime} mins`
                : "N/A"}
            </p>
          </div>
          <div>
            <h4 className="text-start text-lg font-semibold tracking-tight text-gray-500">
              Premiered
            </h4>
            <p className="text-start text-normal tracking-tight text-gray-900">
              {detailData.show.premiered ? detailData.show.premiered : "N/A"}
            </p>
          </div>
          <div>
            <h4 className="text-start text-lg font-semibold tracking-tight text-gray-500">
              Status
            </h4>
            <p className="text-start text-normal tracking-tight text-gray-900">
              {detailData.show.status ? detailData.show.status : "N/A"}
            </p>
          </div>
          <div>
            <h4 className="text-start text-lg font-semibold tracking-tight text-gray-500">
              Language
            </h4>
            <p className="text-start text-normal tracking-tight text-gray-900">
              {detailData.show.language ? detailData.show.language : "N/A"}
            </p>
          </div>
        </div>
        <div className="flex gap-4 my-5">
          {detailData.show.genres.map((gnr, i) => (
            <p
              key={i}
              className="text-start text-xs tracking-tight text-gray-600 bg-gray-200 rounded-md px-2 py-1"
            >
              {gnr}
            </p>
          ))}
        </div>
        <div className="text-start">
          <button
            onClick={() => {
              privateR();
            }}
            className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
