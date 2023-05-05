import React, { useState } from "react";
import DetailCard from "./DetailCard";
import { useLoaderData, useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import { Toaster } from "react-hot-toast";

const Detail = () => {
  const [open, setOpen] = useState(false);
  const data = useLoaderData();

  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);

  const detailData = data.filter((flt) => flt.show.id === id);

  return (
    <div>
      <Modal open={open} setOpen={setOpen} detailData={detailData} />
      <div className="w-full md:w-3/4 p-6 bg-white rounded-md mx-auto my-10">
        <DetailCard detailData={detailData[0]} setOpen={setOpen} />
        <Toaster />
      </div>
    </div>
  );
};

export default Detail;
