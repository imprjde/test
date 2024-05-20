import React from "react";

export default function () {
  return (
    <>
      <div className="bg-green-4 items- m-auto min-h-screen w-full justify-center py-20 font-bold text-white">
        <div className="bg-opacity- mx-4 rounded-md bg-neutral-700 py-10 md:mx-40">
          <div
            id="profile"
            className="m-auto flex h-[50%] w-[90%] flex-col justify-center space-y-4 rounded-md bg-zinc-800 py-4 md:w-[72%]"
          >
            <span className="m-auto flex w-full justify-center">
              <span
                id="profileImage"
                className="h-32 min-h-32 w-32 min-w-32 animate-pulse rounded-full bg-white"
              ></span>
            </span>

            <span className="m-auto flex min-h-7 w-fit min-w-48 animate-pulse justify-center rounded-md bg-white text-xl font-semibold tracking-wider"></span>
            <span className="m-auto flex min-h-7 w-fit min-w-48 animate-pulse justify-center rounded-md bg-white text-xl font-semibold tracking-wider"></span>

            <div className="m-auto flex w-full justify-center space-x-5">
              <div className="m mx-3 flex w-full justify-center space-x-14 rounded-lg bg-stone-900 py-2">
                <div className="flex min-h-10 min-w-10 animate-pulse cursor-pointer items-center space-x-2 rounded-md bg-white"></div>
                <div className="flex min-h-10 min-w-10 animate-pulse cursor-pointer items-center space-x-2 rounded-md bg-white"></div>
              </div>
            </div>
          </div>

          <div className="bg-500 m-auto mt-3 flex min-h-8 max-w-24 animate-pulse rounded-md bg-white text-center text-lg tracking-widest"></div>

          <div
            id="photos"
            className="bg-orange-5 m-auto mt-4 flex w-[95%] justify-center px-2 py-2 md:w-[100%]"
          >
            <div className="grid grid-cols-3 gap-2 rounded-md bg-zinc-800 px-2 py-2 md:grid-cols-4">
              <div
                id="Grid-1"
                className="relative h-[100px] w-[100px] animate-pulse cursor-pointer bg-purple-100 bg-opacity-20 px-2 py-2 md:h-44 md:w-44"
              >
                <span
                  id="PostImage"
                  className="h-full w-full object-cover"
                ></span>
                <div className="bg-yellow-0 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center transition-opacity duration-300"></div>
              </div>
              <div
                id="Grid-1"
                className="relative h-[100px] w-[100px] animate-pulse cursor-pointer bg-purple-100 bg-opacity-20 px-2 py-2 md:h-44 md:w-44"
              >
                <span
                  id="PostImage"
                  className="h-full w-full object-cover"
                ></span>
                <div className="bg-yellow-0 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center transition-opacity duration-300"></div>
              </div>
              <div
                id="Grid-1"
                className="relative h-[100px] w-[100px] animate-pulse cursor-pointer bg-purple-100 bg-opacity-20 px-2 py-2 md:h-44 md:w-44"
              >
                <span
                  id="PostImage"
                  className="h-full w-full object-cover"
                ></span>
                <div className="bg-yellow-0 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center transition-opacity duration-300"></div>
              </div>
              <div
                id="Grid-1"
                className="relative h-[100px] w-[100px] animate-pulse cursor-pointer bg-purple-100 bg-opacity-20 px-2 py-2 md:h-44 md:w-44"
              >
                <span
                  id="PostImage"
                  className="h-full w-full object-cover"
                ></span>
                <div className="bg-yellow-0 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center transition-opacity duration-300"></div>
              </div>
              <div
                id="Grid-1"
                className="relative h-[100px] w-[100px] animate-pulse cursor-pointer bg-purple-100 bg-opacity-20 px-2 py-2 md:h-44 md:w-44"
              >
                <span
                  id="PostImage"
                  className="h-full w-full object-cover"
                ></span>
                <div className="bg-yellow-0 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center transition-opacity duration-300"></div>
              </div>
              <div
                id="Grid-1"
                className="relative h-[100px] w-[100px] animate-pulse cursor-pointer bg-purple-100 bg-opacity-20 px-2 py-2 md:h-44 md:w-44"
              >
                <span
                  id="PostImage"
                  className="h-full w-full object-cover"
                ></span>
                <div className="bg-yellow-0 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
