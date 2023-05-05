import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const Modal = ({ open, setOpen, detailData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setOpen(false);
    toast.success("Booked successfully");
    localStorage.setItem("username", data.username);
    localStorage.setItem("email", data.email);
  };
  return (
    <div
      className={`fixed md:mx-1 md:left-1/3 top-9 ${open ? "block" : "hidden"}`}
    >
      <div className=" w-96 mx-auto bg-slate-400 p-10 md:p-7 rounded-md">
        <div className=" text-right">
          <button
            className="bg-blue-400 rounded-md px-3 pb-1 text-white"
            onClick={() => setOpen(false)}
          >
            x
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="movie"
              className=" text-start ml-2 block mb-2 text-sm font-medium text-gray-900"
            >
              Movie
            </label>
            <input
              {...register("movie", { required: true })}
              type="text"
              name="movie"
              id="movie"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={detailData[0].show.name}
              readOnly
            />
            {errors.movie && <span>This field is required</span>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="schedule"
              className=" text-start ml-2 block mb-2 text-sm font-medium text-gray-900"
            >
              Time
            </label>
            <input
              {...register("schedule", { required: true })}
              type="text"
              name="schedule"
              id="schedule"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={`${detailData[0].show.schedule.days}, ${detailData[0].show.schedule.time}`}
              readOnly
            />
            {errors.schedule && <span>This field is required</span>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="language"
              className=" text-start ml-2 block mb-2 text-sm font-medium text-gray-900"
            >
              Language
            </label>
            <input
              {...register("language", { required: true })}
              type="text"
              name="language"
              id="language"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={detailData[0].show.language}
              readOnly
            />
            {errors.language && <span>This field is required</span>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="username"
              className=" text-start ml-2 block mb-2 text-sm font-medium text-gray-900"
            >
              Your name
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John doe"
            />
            {errors.username && <span>This field is required</span>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className=" text-start ml-2 block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="johndoe@email.com"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <input
            type="submit"
            className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm block w-full p-2.5"
            value="Book Now"
          />
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Modal;
