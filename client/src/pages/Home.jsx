import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Top  */}
      <div className="flex flex-col gap-6 p-28 px-3 max-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find you next <span className="text-slate-500">perfect</span> <br />
          place with ease
        </h1>

        <div className=" text-gray-400 text-xs sm:text-sm ">
          Real Estate will help you find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>

        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's Start now...
        </Link>
      </div>
      <div className="w-full">
        <img
          className="h-[600px] w-[95%] ml-8 mr-8 object-fit "
          src="https://source.unsplash.com/random/900×900/?building"
          alt="this building image"
        />
      </div>
    </div>
  );
}
