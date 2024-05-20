// "use client";
// import { useEffect, useState } from "react";
// import Card from "../card/Card";
// import SideMenu from "../sideMenu/SideMenu";
// import axios from "axios";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
// import CardLoader from "@/loaders/CardLoader";
// import Pagination from "../pagination/Pagination";
// import { useSession } from "next-auth/react";

// export default function Explore() {
//   const { status, data } = useSession();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFetching, setIsFetching] = useState(false);
//   const [blogs, setBlogs] = useState([]);
//   const [totalBlogs, setTotalBlogs] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(1);
//   // const [savedPosts, setSavedPosts] = useState([]);

//   // console.log("SAVED POST FROM PARENT", savedPosts);

//   const totalPages = Math.ceil(totalBlogs / 5);

//   const fetchAllBlogs = async (page) => {
//     // console.log("FETCHALLBLOG FN RUNNING")
//     try {
//       setIsFetching(true);
//       let resp = await axios.get(`api/write?page=${page}`);
//       // console.log("All Blogs Data=", resp.data.data);
//       setBlogs(resp?.data.data.posts);
//       setTotalBlogs(resp?.data.data.totalBlogs);
//       setIsFetching(false);
//     } catch (error) {
//       console.log(error);
//       setIsFetching(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllBlogs(currentPage);
//   }, [currentPage]);

//   const handlePagination = (i) => {
//     setCurrentPage(i);
//     setActiveIndex(i);
//   };

//   // const getSavedPost = async () => {
//   //   console.log("GETSAVEDPOSTS FN RUNNING");
//   //   // if (data) {
//   //   try {
//   //     let resp = await axios.get(`/api/save-post?id=${data?.user.email}`);
//   //     console.log("Get Saved Post from CARD COMP FUC", resp.data.data);
//   //     setSavedPosts(resp.data.data);
//   //   } catch (error) {
//   //     console.log(error);
//   //     alert("Failed to fetch Saved data");
//   //   }
//   //   // }
//   // };

//   // useEffect(() => {
//   //   getSavedPost();
//   // }, [data]);
//   return (
//     <div className="text-white my-10 min-h-screen  justify-start items-start md:px-20 w-full ">
//       <div className="ml-2 md:ml-0">
//         <span className="font-bold tracking-widest text-xl">Explore Blogs</span>
//       </div>
//       <div className=" md:flex  my-10 ">
//         <div className="min-h-screen  w-[90%] md:w-[70%] m-auto justify-center flex flex-col ">
//           {isFetching && <CardLoader />}
//           {!isFetching &&
//             blogs?.map((blog) => (
//               <Card
//                 blog={blog}
//                 key={blog._id}
//                 title={blog.title}
//                 category={blog.category}
//                 totalComments={blog.totalComments}
//                 createdAt={blog.createdAt}
//                 createdUserEmail={blog.createdUserEmail}
//                 createdUserName={blog.createdUserName}
//                 createdUserPic={blog.createdUserPic}
//                 description={blog.description}
//                 likes={blog.likes}
//                 thumbnail={blog.thumbnail}
//                 // savedPosts={savedPosts}
//               />
//             ))}
//         </div>

//         {/* FOR DESKTOP SCREEN  */}

//         <div className="min-h-screen  mt-1 hidden md:flex justify-start px-3 md:px-0 md:pl-10 w-full md:w-[30%]  m-auto  flex-col">
//           <SideMenu />
//         </div>
//       </div>
//       {/* PAGINATION  FOR LARGE SCREEN */}

//       <Pagination
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         setActiveIndex={setActiveIndex}
//         activeIndex={activeIndex}
//         totalPages={totalPages}
//         totalBlogs={totalBlogs}
//         handlePagination={handlePagination}
//       />

//       {/* FOR MOBILE SCREEN  */}
//       <div className="min-h-screen  pt-5 flex md:hidden justify-start px-3 md:px-0 md:pl-10 w-full md:w-[30%]  m-auto  flex-col">
//         <SideMenu />
//       </div>
//     </div>
//   );
// }

///////////////////////////////PAGINATION NEW FEATURE ///////////////////////////////

"use client";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import SideMenu from "../sideMenu/SideMenu";
import axios from "axios";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import CardLoader from "@/loaders/CardLoader";
import Pagination from "../pagination/Pagination";
import { useSession } from "next-auth/react";
import ReactPaginate from "react-paginate";

export default function Explore() {
  const { status, data } = useSession();
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [pageIndex, setPageIndex] = useState(null);

  /////PAGINATION//////////////////////////////////////////////////////////////////////

  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 5;
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(100 / itemsPerPage);
  // const pageCount = Math.ceil(totalBlogs / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    // setCurrentPage(i);
    // setActiveIndex(i);
    // setPageIndex(i);
  };

  let next = (
    <button
      onClick={() => {
        setCurrentPage(currentPage + 1);
        setActiveIndex(currentPage + 1);
      }}
      className="relative inline-flex items-center rounded-r-md px-3 py-2 bg-zinc-950 text-white  ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
    >
      <span className="sr-only">Next</span>
      <ChevronRightIcon className="h-8 w-8" aria-hidden="true" />
    </button>
  );

  let previous = (
    <button
      onClick={() => {
        setCurrentPage(currentPage - 1);
        setActiveIndex(currentPage - 1);
      }}
      className="relative inline-flex items-center bg-zinc-950 text-white rounded-l-md px-3 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
    >
      <span className="sr-only">Previous</span>
      <ChevronLeftIcon className="h-8 w-8" aria-hidden="true" />
    </button>
  );
  //////////////////////////////////////////////////////////////////////////////////////////
  // const [savedPosts, setSavedPosts] = useState([]);

  // console.log("SAVED POST FROM PARENT", savedPosts);

  // const totalPages = Math.ceil(totalBlogs / 5);   Total Page calculation original formula
  const totalPages = Math.ceil(50 / 5); //Dummy Formula

  const fetchAllBlogs = async (page) => {
    // console.log("FETCHALLBLOG FN RUNNING")
    try {
      setIsFetching(true);
      let resp = await axios.get(`api/write?page=${page}`);
      // console.log("All Blogs Data=", resp.data.data);
      setBlogs(resp?.data.data.posts);
      setTotalBlogs(resp?.data.data.totalBlogs);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchAllBlogs(currentPage);
  }, [currentPage]);

  const handlePagination = (i) => {
    setCurrentPage(i);
    setActiveIndex(i);
    setPageIndex(i);
  };

  // const getSavedPost = async () => {
  //   console.log("GETSAVEDPOSTS FN RUNNING");
  //   // if (data) {
  //   try {
  //     let resp = await axios.get(`/api/save-post?id=${data?.user.email}`);
  //     console.log("Get Saved Post from CARD COMP FUC", resp.data.data);
  //     setSavedPosts(resp.data.data);
  //   } catch (error) {
  //     console.log(error);
  //     alert("Failed to fetch Saved data");
  //   }
  //   // }
  // };

  // useEffect(() => {
  //   getSavedPost();
  // }, [data]);
  return (
    <div className="text-white my-10 min-h-screen  justify-start items-start md:px-20 w-full ">
      <div className="ml-2 md:ml-0">
        <span className="font-bold tracking-widest text-xl">Explore Blogs</span>
      </div>
      <div className=" md:flex  my-10 ">
        <div className="min-h-screen  w-[90%] md:w-[70%] m-auto justify-center flex flex-col ">
          {isFetching && <CardLoader />}
          {!isFetching &&
            blogs?.map((blog) => (
              <Card
                blog={blog}
                key={blog._id}
                title={blog.title}
                category={blog.category}
                totalComments={blog.totalComments}
                createdAt={blog.createdAt}
                createdUserEmail={blog.createdUserEmail}
                createdUserName={blog.createdUserName}
                createdUserPic={blog.createdUserPic}
                description={blog.description}
                likes={blog.likes}
                thumbnail={blog.thumbnail}
                // savedPosts={savedPosts}
              />
            ))}
        </div>

        {/* FOR DESKTOP SCREEN  */}

        <div className="min-h-screen  mt-1 hidden md:flex justify-start px-3 md:px-0 md:pl-10 w-full md:w-[30%]  m-auto  flex-col">
          <SideMenu />
        </div>
      </div>
      {/* PAGINATION  FOR LARGE SCREEN */}
      <div className="md:flex hidden  w-[90%] md:w-[70%]  items-center justify-between  rounded-md w- px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center bg-red0 sm:justify-between">
          <div className="px-5 bg-yell">
            <p className="text-sm text-white">
              Showing <span className="font-medium">{currentPage * 5 - 4}</span>{" "}
              to{" "}
              <span className="font-medium">
                {activeIndex !== totalPages ? currentPage * 5 : totalBlogs}
              </span>{" "}
              of <span className="font-medium">{totalBlogs}</span> results
            </p>
          </div>
          <div className="px-3 bg-pink-5 w-">
            {/* <nav
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
                .map((_, i) => {
                  if (i >= pageIndex - 3 && i <= pageIndex + 3) {
                    return (
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
                    );
                  } else {
                    return (
                      <div className="bg- w-10 h-10">
                        <span>...</span>
                      </div>
                    );
                  }
                })}

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
            </nav> */}

            <div className="flex ng-red-500">
              {" "}
              <ReactPaginate
                breakLabel="..."
                nextLabel={next}
                onPageChange={handlePageClick}
                // onPageActive={() => setActiveIndex(currentPage)}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                className="flex bg-red-500 w-full space-x-2"
                previousLabel={previous}
                renderOnZeroPageCount={null}
                forcePage={currentPage}
                activeClassName="bg-white text-gray-900 border-0"
                pageClassName="relative z-10 inline-flex cursor-pointer items-center text-white bg-zinc-950 ring-1 ring-inset ring-gray-300 hover:bg-stone-900 focus:outline-offset-0 px-6 py-2 text-sm font-semibold"
              />
            </div>
          </div>
        </div>
      </div>

      {/* {currentItems.map((_, i) => (
        <span
          key={i}
          //  onClick={() => handlePagination(i + 1)}
          // onClick={handlePageClick}
          aria-current="page"
          className={`relative z-10 inline-flex cursor-pointer items-center text-white bg-zinc-950 ring-1 ring-inset ring-gray-300 hover:bg-stone-900 focus:outline-offset-0 px-6 py-2 text-sm font-semibold `}
        >
          {i + 1}
        </span>
      ))} */}

      {/* <div className="flex ng-red-500">
        {" "}
        <ReactPaginate
          breakLabel="..."
          nextLabel={next}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          className="flex bg-red-500 w-full space-x-2"
          previousLabel={previous}
          renderOnZeroPageCount={null}
        />
      </div> */}

      {/* FOR MOBILE SCREEN  */}
      <div className="min-h-screen  pt-5 flex md:hidden justify-start px-3 md:px-0 md:pl-10 w-full md:w-[30%]  m-auto  flex-col">
        <SideMenu />
      </div>
    </div>
  );
}
