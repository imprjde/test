import React from "react";

export default function CardLoader() {
  return (
    <>
      <div className="my-2 h-fit w-full space-x-4 rounded-md bg-neutral-800 p-1 py-3 md:my-3 md:flex">
        <div
          id="image"
          className="h-auto w-full space-y-2 px-2 md:w-1/2 md:px-4"
        >
          <div className="mt-1 space-y-2">
            <div className="flex items-center justify-between space-x-2 px-1">
              <div className="flex cursor-pointer items-center space-x-2">
                <span className="inline-block min-h-7 min-w-7 animate-pulse rounded-full bg-white"></span>
                <span className="m-auto h-6 min-w-36 animate-pulse rounded-md bg-white px-5 text-sm font-medium text-white"></span>
              </div>
              <div className="cursor-pointer">
                <span className="text-sky-500" />
              </div>
            </div>
            <span
              id="thumbnailImage"
              className="inline-block min-h-56 min-w-full animate-pulse rounded-md bg-white"
            ></span>
          </div>

          <div className="m-auto m flex  md:justify-center space-y-3 ml-2 md:ml-0">
            <div className="inline-block  min-h-8 w-full animate-pulse space-x-4 rounded-md bg-white"></div>
          </div>
        </div>

        <div
          id="content"
          className=" m-auto mt-2 flex w-auto flex-col justify-start text-white md:mt-10 md:w-1/2"
        >
          <div className="cl inline-block min-h-6 min-w-4 max-w-[8.5rem] animate-pulse space-x-3 rounded-md bg-white"></div>
          <div className="flex flex-col space-y-4 pr-2">
            <span></span>

            <span
              id="title"
              className="inline-block min-h-10 min-w-4 animate-pulse rounded-md bg-white font-bold "
            ></span>

            <div className="hidden min-h-20 min-w-4 animate-pulse rounded-md bg-white md:flex">
              <span id="description"> </span>
            </div>
            <div className="m-auto flex w-full justify-end pr-2 md:justify-start md:pr-0">
              <div className="flex h-full w-fit items-center justify-end space-x-2 rounded-md">
                <span className="inline-block min-h-6 min-w-24 animate-pulse rounded-md bg-white font-normal"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 h-fit w-full space-x-4 rounded-md bg-neutral-800 p-1 py-3 md:my-3 md:flex">
        <div
          id="image"
          className="h-auto w-full space-y-2 px-2 md:w-1/2 md:px-4"
        >
          <div className="mt-1 space-y-2">
            <div className="flex items-center justify-between space-x-2 px-1">
              <div className="flex cursor-pointer items-center space-x-2">
                <span className="inline-block min-h-7 min-w-7 animate-pulse rounded-full bg-white"></span>
                <span className="m-auto h-6 min-w-36 animate-pulse rounded-md bg-white px-5 text-sm font-medium text-white"></span>
              </div>
              <div className="cursor-pointer">
                <span className="text-sky-500" />
              </div>
            </div>
            <span
              id="thumbnailImage"
              className="inline-block min-h-56 min-w-full animate-pulse rounded-md bg-white"
            ></span>
          </div>

          <div className="m-auto m flex  md:justify-center space-y-3 ml-2 md:ml-0">
            <div className="inline-block  min-h-8 w-full animate-pulse space-x-4 rounded-md bg-white"></div>
          </div>
        </div>

        <div
          id="content"
          className=" m-auto mt-2 flex w-auto flex-col justify-start text-white md:mt-10 md:w-1/2"
        >
          <div className="cl inline-block min-h-6 min-w-4 max-w-[8.5rem] animate-pulse space-x-3 rounded-md bg-white"></div>
          <div className="flex flex-col space-y-4 pr-2">
            <span></span>

            <span
              id="title"
              className="inline-block min-h-10 min-w-4 animate-pulse rounded-md bg-white font-bold "
            ></span>

            <div className="hidden min-h-20 min-w-4 animate-pulse rounded-md bg-white md:flex">
              <span id="description"> </span>
            </div>
            <div className="m-auto flex w-full justify-end pr-2 md:justify-start md:pr-0">
              <div className="flex h-full w-fit items-center justify-end space-x-2 rounded-md">
                <span className="inline-block min-h-6 min-w-24 animate-pulse rounded-md bg-white font-normal"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 h-fit w-full space-x-4 rounded-md bg-neutral-800 p-1 py-3 md:my-3 md:flex">
        <div
          id="image"
          className="h-auto w-full space-y-2 px-2 md:w-1/2 md:px-4"
        >
          <div className="mt-1 space-y-2">
            <div className="flex items-center justify-between space-x-2 px-1">
              <div className="flex cursor-pointer items-center space-x-2">
                <span className="inline-block min-h-7 min-w-7 animate-pulse rounded-full bg-white"></span>
                <span className="m-auto h-6 min-w-36 animate-pulse rounded-md bg-white px-5 text-sm font-medium text-white"></span>
              </div>
              <div className="cursor-pointer">
                <span className="text-sky-500" />
              </div>
            </div>
            <span
              id="thumbnailImage"
              className="inline-block min-h-56 min-w-full animate-pulse rounded-md bg-white"
            ></span>
          </div>

          <div className="m-auto m flex  md:justify-center space-y-3 ml-2 md:ml-0">
            <div className="inline-block  min-h-8 w-full animate-pulse space-x-4 rounded-md bg-white"></div>
          </div>
        </div>

        <div
          id="content"
          className=" m-auto mt-2 flex w-auto flex-col justify-start text-white md:mt-10 md:w-1/2"
        >
          <div className="cl inline-block min-h-6 min-w-4 max-w-[8.5rem] animate-pulse space-x-3 rounded-md bg-white"></div>
          <div className="flex flex-col space-y-4 pr-2">
            <span></span>

            <span
              id="title"
              className="inline-block min-h-10 min-w-4 animate-pulse rounded-md bg-white font-bold "
            ></span>

            <div className="hidden min-h-20 min-w-4 animate-pulse rounded-md bg-white md:flex">
              <span id="description"> </span>
            </div>
            <div className="m-auto flex w-full justify-end pr-2 md:justify-start md:pr-0">
              <div className="flex h-full w-fit items-center justify-end space-x-2 rounded-md">
                <span className="inline-block min-h-6 min-w-24 animate-pulse rounded-md bg-white font-normal"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 h-fit w-full space-x-4 rounded-md bg-neutral-800 p-1 py-3 md:my-3 md:flex">
        <div
          id="image"
          className="h-auto w-full space-y-2 px-2 md:w-1/2 md:px-4"
        >
          <div className="mt-1 space-y-2">
            <div className="flex items-center justify-between space-x-2 px-1">
              <div className="flex cursor-pointer items-center space-x-2">
                <span className="inline-block min-h-7 min-w-7 animate-pulse rounded-full bg-white"></span>
                <span className="m-auto h-6 min-w-36 animate-pulse rounded-md bg-white px-5 text-sm font-medium text-white"></span>
              </div>
              <div className="cursor-pointer">
                <span className="text-sky-500" />
              </div>
            </div>
            <span
              id="thumbnailImage"
              className="inline-block min-h-56 min-w-full animate-pulse rounded-md bg-white"
            ></span>
          </div>

          <div className="m-auto m flex  md:justify-center space-y-3 ml-2 md:ml-0">
            <div className="inline-block  min-h-8 w-full animate-pulse space-x-4 rounded-md bg-white"></div>
          </div>
        </div>

        <div
          id="content"
          className=" m-auto mt-2 flex w-auto flex-col justify-start text-white md:mt-10 md:w-1/2"
        >
          <div className="cl inline-block min-h-6 min-w-4 max-w-[8.5rem] animate-pulse space-x-3 rounded-md bg-white"></div>
          <div className="flex flex-col space-y-4 pr-2">
            <span></span>

            <span
              id="title"
              className="inline-block min-h-10 min-w-4 animate-pulse rounded-md bg-white font-bold "
            ></span>

            <div className="hidden min-h-20 min-w-4 animate-pulse rounded-md bg-white md:flex">
              <span id="description"> </span>
            </div>
            <div className="m-auto flex w-full justify-end pr-2 md:justify-start md:pr-0">
              <div className="flex h-full w-fit items-center justify-end space-x-2 rounded-md">
                <span className="inline-block min-h-6 min-w-24 animate-pulse rounded-md bg-white font-normal"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 h-fit w-full space-x-4 rounded-md bg-neutral-800 p-1 py-3 md:my-3 md:flex">
        <div
          id="image"
          className="h-auto w-full space-y-2 px-2 md:w-1/2 md:px-4"
        >
          <div className="mt-1 space-y-2">
            <div className="flex items-center justify-between space-x-2 px-1">
              <div className="flex cursor-pointer items-center space-x-2">
                <span className="inline-block min-h-7 min-w-7 animate-pulse rounded-full bg-white"></span>
                <span className="m-auto h-6 min-w-36 animate-pulse rounded-md bg-white px-5 text-sm font-medium text-white"></span>
              </div>
              <div className="cursor-pointer">
                <span className="text-sky-500" />
              </div>
            </div>
            <span
              id="thumbnailImage"
              className="inline-block min-h-56 min-w-full animate-pulse rounded-md bg-white"
            ></span>
          </div>

          <div className="m-auto m flex  md:justify-center space-y-3 ml-2 md:ml-0">
            <div className="inline-block  min-h-8 w-full animate-pulse space-x-4 rounded-md bg-white"></div>
          </div>
        </div>

        <div
          id="content"
          className=" m-auto mt-2 flex w-auto flex-col justify-start text-white md:mt-10 md:w-1/2"
        >
          <div className="cl inline-block min-h-6 min-w-4 max-w-[8.5rem] animate-pulse space-x-3 rounded-md bg-white"></div>
          <div className="flex flex-col space-y-4 pr-2">
            <span></span>

            <span
              id="title"
              className="inline-block min-h-10 min-w-4 animate-pulse rounded-md bg-white font-bold "
            ></span>

            <div className="hidden min-h-20 min-w-4 animate-pulse rounded-md bg-white md:flex">
              <span id="description"> </span>
            </div>
            <div className="m-auto flex w-full justify-end pr-2 md:justify-start md:pr-0">
              <div className="flex h-full w-fit items-center justify-end space-x-2 rounded-md">
                <span className="inline-block min-h-6 min-w-24 animate-pulse rounded-md bg-white font-normal"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
