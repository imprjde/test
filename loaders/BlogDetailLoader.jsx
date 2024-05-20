import React from "react";

export default function BlogDetailLoader() {
  return (
    <div className="w-full h-screen min my-6 m bg-yellow text-white flex m-auto justify-center items-center">
      <div className="w-full space-x-2 p-4 md:p-10 md:flex mx-3 md:mx-10 rounded-lg bg-zinc-800 ">
        <div className="mt-0  w-full md:w-[60%] py-3 px-2 rounded-lg bg-zinc-900  space-y-3 flex-col m-auto justify-center">
          <div className="w-full m-auto justify-center space-y-3 flex flex-col">
            <div>
              <div className=" inline-block min-h-8 min-w-64 rounded-md animate-pulse bg-white items-center space-x-2 pl-2 "></div>
            </div>
            <div className="w-full m-auto flex justify-center">
              <span
                id="thumbnail"
                className="inline-block min-h-96 min-w-full animate-pulse  bg-white rounded-lg object-cover"
              ></span>
            </div>
          </div>
          <div className="ml-0 md:ml- flex rounded-md justify-center m-auto animate-pulse space-y-3  min-h-9 min-w-full  bg-white"></div>
          <div
            id="content"
            className=" text-black md:hidden w-full md:w-[40%] px-2 md:px-3 py-2    bg-zinc-900 bg-lime- m-auto justify-start  mt-2 md:mt-0 "
          >
            <div className="flex space-x-3 bg-white w-fit  rounded-md animate-pulse min-h-8 min-w-52 "></div>
            <div className="flex flex-col space-y-4">
              <span></span>
              <span
                id="title"
                className="font-bold text-white min-w-full min-h-10 bg-white rounded-md animate-pulse"
              ></span>
              <span
                id="description"
                className=" md:flex text-white min-w-full min-h-96 bg-white rounded-md animate-pulse"
              ></span>
            </div>
          </div>
        </div>
        <div
          id="content"
          className="hidden h-screen md:flex md:flex-col text-black rounded-lg w-full md:w-[40%] px-3 py-4 bg-black bg-lime- m-auto justify-start  mt-2 md:mt-0 "
        >
          <div className=" animate-pulse flex justify-between bg-white w-fit rounded-md ">
            <div className="flex min-h-7 min-w-52 space-x-3  text-white font-semibold "></div>
          </div>
          <div className="flex flex-col space-y-4">
            <span></span>
            <span className="font-bold min-h-16 min-w-20 bg-white rounded-md animate-pulse text-white"></span>
            <span className=" md:flex bg-white min-w-full min-h-96 rounded-md animate-pulse font-medium text-sm text-white"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
