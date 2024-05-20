// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
// import { useEffect, useState } from "react";
// export default function Pagination({
//   currentPage,
//   setCurrentPage,
//   setActiveIndex,
//   activeIndex,
//   totalPages,
//   totalBlogs,
//   handlePagination,
// }) {
//   //Dummy Code
//   const [isFetching, setIsFetching] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsFetching(false);
//     }, 3000);
//   }, []);
//   return (
//     <>
//       {/* PAGINATION  FOR LARGE SCREEN */}
//       {!isFetching ? (
//         <div className="md:flex hidden  w-[90%] md:w-[70%]  items-center justify-between  rounded-md w- px-4 py-3 sm:px-6">
//           <div className="hidden sm:flex sm:flex-1 sm:items-center bg-red0 sm:justify-between">
//             <div className="px-5 bg-yell">
//               <p className="text-sm text-white">
//                 Showing{" "}
//                 <span className="font-medium">{currentPage * 5 - 4}</span> to{" "}
//                 <span className="font-medium">
//                   {activeIndex !== totalPages ? currentPage * 5 : totalBlogs}
//                 </span>{" "}
//                 of <span className="font-medium">{totalBlogs}</span> results
//               </p>
//             </div>
//             <div className="px-3 bg-pink-5 w-">
//               <nav
//                 className="isolate inline-flex -space-x-0  rounded-md shadow-sm"
//                 aria-label="Pagination"
//               >
//                 <button
//                   onClick={() => {
//                     setCurrentPage(currentPage - 1);
//                     setActiveIndex(currentPage - 1);
//                   }}
//                   disabled={currentPage === 1}
//                   className="relative inline-flex items-center bg-zinc-950 text-white rounded-l-md px-3 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
//                 >
//                   <span className="sr-only">Previous</span>
//                   <ChevronLeftIcon className="h-8 w-8" aria-hidden="true" />
//                 </button>

//                 {Array(totalPages)
//                   .fill(0)
//                   .map((_, i) => (
//                     <span
//                       key={i}
//                       onClick={() => handlePagination(i + 1)}
//                       aria-current="page"
//                       className={`relative z-10 inline-flex cursor-pointer items-center ${
//                         activeIndex === i + 1
//                           ? "bg-white text-gray-900 border-0"
//                           : "text-white bg-zinc-950 ring-1 ring-inset ring-gray-300 hover:bg-stone-900 focus:outline-offset-0"
//                       } px-6 py-2 text-sm font-semibold   `}
//                     >
//                       {i + 1}
//                     </span>
//                   ))}

//                 <button
//                   onClick={() => {
//                     setCurrentPage(currentPage + 1);
//                     setActiveIndex(currentPage + 1);
//                   }}
//                   disabled={activeIndex === totalPages}
//                   className="relative inline-flex items-center rounded-r-md px-3 py-2 bg-zinc-950 text-white  ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
//                 >
//                   <span className="sr-only">Next</span>
//                   <ChevronRightIcon className="h-8 w-8" aria-hidden="true" />
//                 </button>
//               </nav>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="hidden md:flex w-[90%] items-center justify-between rounded-md bg-stone-600 px-4 py-3 sm:px-6 md:w-[70%]">
//           <div className="bg-red0 hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//             <div className="animate-pulse rounded-md bg-white px-5 py-3 text-transparent">
//               <p className="text-sm text-white">
//                 Showing <span className="font-medium">1</span> to{" "}
//                 <span className="font-medium">4</span> of{" "}
//                 <span className="font-medium">10</span> results
//               </p>
//             </div>
//             <div className="animate-pulse rounded-md bg-white px-3">
//               <nav
//                 className="isolate inline-flex -space-x-0 rounded-md shadow-sm"
//                 aria-label="Pagination"
//               >
//                 <button className="relative inline-flex items-center rounded-l-md px-3 py-2 text-white">
//                   <span className="h-8 w-8" aria-hidden="true" />
//                 </button>

//                 <span
//                   aria-current="page"
//                   className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
//                 >
//                   {" "}
//                   4{" "}
//                 </span>
//                 <span
//                   aria-current="page"
//                   className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
//                 >
//                   {" "}
//                   4{" "}
//                 </span>
//                 <span
//                   aria-current="page"
//                   className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
//                 >
//                   {" "}
//                   4{" "}
//                 </span>
//                 <span
//                   aria-current="page"
//                   className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
//                 >
//                   {" "}
//                   4{" "}
//                 </span>
//                 <span
//                   aria-current="page"
//                   className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
//                 >
//                   {" "}
//                   4{" "}
//                 </span>
//                 <span
//                   aria-current="page"
//                   className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
//                 >
//                   {" "}
//                   4{" "}
//                 </span>
//                 <span
//                   aria-current="page"
//                   className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
//                 >
//                   {" "}
//                   4{" "}
//                 </span>

//                 <button name="relative inline-flex items-center rounded-r-md px-3 py-2 bg-zinc-950 text-white  ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0">
//                   <span className="h-8 w-8" aria-hidden="true" />
//                 </button>
//               </nav>
//             </div>
//           </div>
//         </div>
//       )}

//       {/*PAGINATION FOR MOBILE SCREEN*/}

//       {!isFetching ? (
//         <div className=" flex space-y-2 py-2  flex-col md:hidden m-auto justify-center w-[90%]">
//           <div className="m-auto ">
//             <nav
//               className="isolate inline-flex -space-x-px rounded-md shadow-sm"
//               aria-label="Pagination"
//             >
//               <button
//                 onClick={() => {
//                   setCurrentPage(currentPage - 1);
//                   setActiveIndex(currentPage - 1);
//                 }}
//                 disabled={currentPage === 1}
//                 className="relative inline-flex bg-zinc-950 text-white   items-center rounded-l-md px-2 py-2  ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
//               >
//                 <span className="sr-only">Previous</span>
//                 <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
//               </button>

//               {Array(totalPages)
//                 .fill(0)
//                 .map((_, i) => (
//                   <span
//                     key={i}
//                     onClick={() => handlePagination(i + 1)}
//                     aria-current="page"
//                     className={`relative z-10 inline-flex cursor-pointer items-center ${
//                       activeIndex === i + 1
//                         ? "bg-white text-gray-900 border-0"
//                         : "text-white bg-zinc-950   ring-1 ring-inset ring-gray-300 hover:bg-stone-900 focus:outline-offset-0"
//                     } px-4 py-2 text-sm font-semibold`}
//                   >
//                     {i + 1}
//                   </span>
//                 ))}

//               <button
//                 onClick={() => {
//                   setCurrentPage(currentPage + 1);
//                   setActiveIndex(currentPage + 1);
//                 }}
//                 disabled={activeIndex === totalPages}
//                 className="relative inline-flex items-center bg-zinc-950 text-white   rounded-r-md px-2 py-2  ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
//               >
//                 <span className="sr-only">Next</span>
//                 <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//               </button>
//             </nav>
//           </div>
//           <div className="text-left bg--500 w-full px-5 ">
//             {" "}
//             <p className="text-sm text-white mt-2">
//               Showing <span className="font-medium">{currentPage * 5 - 4}</span>{" "}
//               to{" "}
//               <span className="font-medium">
//                 {activeIndex !== totalPages ? currentPage * 5 : totalBlogs}
//               </span>{" "}
//               of <span className="font-medium">{totalBlogs}</span> results
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="m-auto md:hidden flex w-[90%] flex-col justify-center space-y-2  py-2">
//           <div className="m-auto animate-pulse">
//             <nav
//               className="isolate inline-flex -space-x-px rounded-md p-0 shadow-sm"
//               aria-label="Pagination"
//             >
//               <button className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2">
//                 <span className="h-5 w-5" aria-hidden="true" />
//               </button>

//               <span
//                 aria-current="page"
//                 className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
//               >
//                 1
//               </span>
//               <span
//                 aria-current="page"
//                 className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
//               >
//                 1
//               </span>
//               <span
//                 aria-current="page"
//                 className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
//               >
//                 1
//               </span>
//               <span
//                 aria-current="page"
//                 className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
//               >
//                 1
//               </span>
//               <span
//                 aria-current="page"
//                 className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
//               >
//                 1
//               </span>
//               <span
//                 aria-current="page"
//                 className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
//               >
//                 1
//               </span>
//               <span
//                 aria-current="page"
//                 className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
//               >
//                 1
//               </span>

//               <button className="relative inline-flex items-center rounded-r-md bg-white px-2 py-2 text-white focus:z-20 focus:outline-offset-0">
//                 <span className="h-5 w-5" aria-hidden="true" />
//               </button>
//             </nav>
//           </div>
//           <div className="bg--500 ml-[22px] w-fit animate-pulse rounded-md bg-white px-5 text-left text-transparent">
//             <p className="mt-2 text-sm">
//               Showing <span className="font-medium">1</span> to{" "}
//               <span className="font-medium">5</span> of{" "}
//               <span className="font-medium">10</span> results
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

/////////////////////////////////////NEW PAGINATIONFEATURE///////////////////////////////////////////////////////////////////////////////////

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
export default function Pagination({
  currentPage,
  setCurrentPage,
  setActiveIndex,
  activeIndex,
  totalPages,
  totalBlogs,
  handlePagination,
}) {
  //Dummy Code
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false);
    }, 3000);
  }, []);
  return (
    <>
      {/* PAGINATION  FOR LARGE SCREEN */}
      {!isFetching ? (
        <div className="md:flex hidden  w-[90%] md:w-[70%]  items-center justify-between  rounded-md w- px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center bg-red0 sm:justify-between">
            <div className="px-5 bg-yell">
              <p className="text-sm text-white">
                Showing{" "}
                <span className="font-medium">{currentPage * 5 - 4}</span> to{" "}
                <span className="font-medium">
                  {activeIndex !== totalPages ? currentPage * 5 : totalBlogs}
                </span>{" "}
                of <span className="font-medium">{totalBlogs}</span> results
              </p>
            </div>
            <div className="px-3 bg-pink-5 w-">
              <nav
                className="isolate inline-flex -space-x-0  rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                    setActiveIndex(currentPage - 1);
                  }}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center bg-zinc-950 text-white rounded-l-md px-3 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-8 w-8" aria-hidden="true" />
                </button>

                {Array(totalPages)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      onClick={() => handlePagination(i + 1)}
                      aria-current="page"
                      className={`relative z-10 inline-flex cursor-pointer items-center ${
                        activeIndex === i + 1
                          ? "bg-white text-gray-900 border-0"
                          : "text-white bg-zinc-950 ring-1 ring-inset ring-gray-300 hover:bg-stone-900 focus:outline-offset-0"
                      } px-6 py-2 text-sm font-semibold   `}
                    >
                      {i + 1}
                    </span>
                  ))}

                <button
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                    setActiveIndex(currentPage + 1);
                  }}
                  disabled={activeIndex === totalPages}
                  className="relative inline-flex items-center rounded-r-md px-3 py-2 bg-zinc-950 text-white  ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-8 w-8" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex w-[90%] items-center justify-between rounded-md bg-stone-600 px-4 py-3 sm:px-6 md:w-[70%]">
          <div className="bg-red0 hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div className="animate-pulse rounded-md bg-white px-5 py-3 text-transparent">
              <p className="text-sm text-white">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">4</span> of{" "}
                <span className="font-medium">10</span> results
              </p>
            </div>
            <div className="animate-pulse rounded-md bg-white px-3">
              <nav
                className="isolate inline-flex -space-x-0 rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button className="relative inline-flex items-center rounded-l-md px-3 py-2 text-white">
                  <span className="h-8 w-8" aria-hidden="true" />
                </button>

                <span
                  aria-current="page"
                  className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
                >
                  {" "}
                  4{" "}
                </span>
                <span
                  aria-current="page"
                  className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
                >
                  {" "}
                  4{" "}
                </span>
                <span
                  aria-current="page"
                  className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
                >
                  {" "}
                  4{" "}
                </span>
                <span
                  aria-current="page"
                  className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
                >
                  {" "}
                  4{" "}
                </span>
                <span
                  aria-current="page"
                  className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
                >
                  {" "}
                  4{" "}
                </span>
                <span
                  aria-current="page"
                  className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
                >
                  {" "}
                  4{" "}
                </span>
                <span
                  aria-current="page"
                  className="relative z-10 inline-flex cursor-pointer items-center px-6 py-2 text-sm font-semibold text-white"
                >
                  {" "}
                  4{" "}
                </span>

                <button name="relative inline-flex items-center rounded-r-md px-3 py-2 bg-zinc-950 text-white  ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0">
                  <span className="h-8 w-8" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/*PAGINATION FOR MOBILE SCREEN*/}

      {!isFetching ? (
        <div className=" flex space-y-2 py-2  flex-col md:hidden m-auto justify-center w-[90%]">
          <div className="m-auto ">
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                  setActiveIndex(currentPage - 1);
                }}
                disabled={currentPage === 1}
                className="relative inline-flex bg-zinc-950 text-white   items-center rounded-l-md px-2 py-2  ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>

              {Array(totalPages)
                .fill(0)
                .map((_, i) => (
                  <span
                    key={i}
                    onClick={() => handlePagination(i + 1)}
                    aria-current="page"
                    className={`relative z-10 inline-flex cursor-pointer items-center ${
                      activeIndex === i + 1
                        ? "bg-white text-gray-900 border-0"
                        : "text-white bg-zinc-950   ring-1 ring-inset ring-gray-300 hover:bg-stone-900 focus:outline-offset-0"
                    } px-4 py-2 text-sm font-semibold`}
                  >
                    {i + 1}
                  </span>
                ))}

              <button
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  setActiveIndex(currentPage + 1);
                }}
                disabled={activeIndex === totalPages}
                className="relative inline-flex items-center bg-zinc-950 text-white   rounded-r-md px-2 py-2  ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
          <div className="text-left bg--500 w-full px-5 ">
            {" "}
            <p className="text-sm text-white mt-2">
              Showing <span className="font-medium">{currentPage * 5 - 4}</span>{" "}
              to{" "}
              <span className="font-medium">
                {activeIndex !== totalPages ? currentPage * 5 : totalBlogs}
              </span>{" "}
              of <span className="font-medium">{totalBlogs}</span> results
            </p>
          </div>
        </div>
      ) : (
        <div className="m-auto md:hidden flex w-[90%] flex-col justify-center space-y-2  py-2">
          <div className="m-auto animate-pulse">
            <nav
              className="isolate inline-flex -space-x-px rounded-md p-0 shadow-sm"
              aria-label="Pagination"
            >
              <button className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2">
                <span className="h-5 w-5" aria-hidden="true" />
              </button>

              <span
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
              >
                1
              </span>
              <span
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
              >
                1
              </span>
              <span
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
              >
                1
              </span>
              <span
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
              >
                1
              </span>
              <span
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
              >
                1
              </span>
              <span
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
              >
                1
              </span>
              <span
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-white px-4 py-2 font-semibold text-transparent text-white focus:outline-offset-0"
              >
                1
              </span>

              <button className="relative inline-flex items-center rounded-r-md bg-white px-2 py-2 text-white focus:z-20 focus:outline-offset-0">
                <span className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
          <div className="bg--500 ml-[22px] w-fit animate-pulse rounded-md bg-white px-5 text-left text-transparent">
            <p className="mt-2 text-sm">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">5</span> of{" "}
              <span className="font-medium">10</span> results
            </p>
          </div>
        </div>
      )}
    </>
  );
}
