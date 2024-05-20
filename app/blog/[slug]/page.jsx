"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import Comments from "@/components/comments/Comments";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { formatDate } from "@/helpers/formatDate";
import { AiFillDelete } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import { useSession } from "next-auth/react";
import Popup from "@/components/popup/Popup";
import BlogDetailLoader from "@/loaders/BlogDetailLoader";
import { formatLikes } from "@/helpers/formatLikes";

export default function Page() {
  const { slug } = useParams();
  const { status, data } = useSession();
  const [charLength, setCharLength] = useState(250);
  const [showPopup, setShowPopup] = useState(false);
  const [blog, setBlog] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  // console.log("Data=", data);
  // console.log("res=", blog);

  const handleFetchBlog = async () => {
    try {
      setIsFetching(true);
      let res = await axios.get(`/api/get-blog?slug=${slug}`);
      setBlog(res.data.data);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (slug) {
      handleFetchBlog();
    }
  }, []);

  const handleReadMore = (len) => {
    if (len !== charLength) {
      setCharLength(len);
    } else {
      setCharLength(250);
    }
  };

  return (
    <>
      {showPopup && (
        <Popup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          title={"Are you sure you want to delete this blog?"}
          slug={slug}
        />
      )}
      {isFetching && <BlogDetailLoader />}
      {!isFetching && blog && (
        <div className="w-full bg- my-6 min-h-screen bg-yellow- text-white flex m-auto justify-center items-center">
          <div className="w-full space-x-2 p-4 md:p-10 md:flex mx-3 md:mx-10 rounded-lg bg-zinc-800 ">
            <div className="mt-0  w-full md:w-[60%] py-3 px-2 rounded-lg bg-zinc-900  space-y-3 flex-col m-auto justify-center">
              <div className="w-full m-auto justify-center space-y-3 flex flex-col">
                <div>
                  <div className="flex items-center space-x-2 pl-2 w-full">
                    <span>By:</span>
                    <Link
                      href={`/profile/${blog?.createdUserEmail}`}
                      className="inline-flex cursor-pointer space-x-2"
                    >
                      <Image
                        src={blog?.createdUserPic}
                        height={30}
                        width={30}
                        alt=""
                        className="w-6 h-6 rounded-full "
                      />{" "}
                      <span className="font-semibold">
                        {blog?.createdUserName}
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="w-full m-auto flex justify-center">
                  <Image
                    src={blog?.thumbnail}
                    width={600}
                    height={600}
                    alt=""
                    className=" rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="ml-0 md:ml-2 space-y-3">
                <div className="flex justify-center space-x-14   md:space-x-10">
                  <span>
                    <span className="flex items-center space-x-1">
                      <GoHeartFill
                        size={22}
                        className="text-white cursor-pointer"
                      />
                      <span className="text-white font-semibold">
                        {blog && formatLikes(blog?.likes)}
                      </span>
                    </span>
                  </span>
                  <span>
                    <span className="flex items-center space-x-1">
                      <FaRegComment
                        size={20}
                        className="text-white cursor-pointer"
                      />
                      <span className="text-white font-semibold">
                        {blog?.comments}{" "}
                      </span>
                    </span>
                  </span>
                  <span>
                    <span className="flex items-center space-x-1">
                      <FaRegBookmark
                        size={20}
                        className="text-white cursor-pointer"
                      />
                      <span className="text-white font-semibold">Save </span>
                    </span>
                  </span>
                </div>
              </div>
              {/* MOBILE SCREEN CONTENTS  */}
              <div
                id="content"
                className=" text-black md:hidden w-full md:w-[40%] px-2 md:px-3 py-2    bg-zinc-900 bg-lime- m-auto justify-start  mt-2 md:mt-0 "
              >
                <div className="flex space-x-3  ">
                  <span className="bg-sky-500 px-3 text-white font-semibold py-0.5 rounded-2xl">
                    {blog && formatDate(blog.createdAt)}
                  </span>
                  <span className="bg-orange-500 px-3 text-white font-semibold py-0.5 rounded-2xl">
                    {blog?.category}
                  </span>
                  {status === "authenticated" &&
                    blog.createdUserEmail === data.user.email && (
                      <div className="pl-5 flex space-x-3  text-white font-semibold ">
                        <span className="bg-teal-500 cursor-pointer px-1 py-0.5 rounded-md">
                          <MdEditSquare size={25} />
                        </span>
                        <span
                          onClick={() => {
                            setShowPopup(true);
                          }}
                          className="bg-red-500 cursor-pointer px-1 py-0.5 rounded-md"
                        >
                          <AiFillDelete size={25} />
                        </span>
                      </div>
                    )}
                </div>
                <div className="flex flex-col space-y-4">
                  <span></span>
                  <span className="font-bold text-white">{blog?.title}</span>
                  {blog.description && (
                    <span className=" md:flex text-white">
                      {blog?.description.substring(0, charLength)}{" "}
                      {blog?.description.length > 249 && (
                        <button
                          onClick={() =>
                            handleReadMore(blog?.description.length)
                          }
                        >
                          {blog?.description.length !== charLength
                            ? "...Read More"
                            : "Read Less"}
                        </button>
                      )}
                    </span>
                  )}
                </div>
              </div>

              <Comments postId={slug} />
            </div>
            <div
              id="content"
              className="hidden md:flex md:flex-col text-black rounded-lg w-full md:w-[40%] px-3 py-4 bg-black bg-lime- m-auto justify-start  mt-2 md:mt-0 "
            >
              <div className=" flex justify-between ">
                <div className="flex space-x-3  text-white font-semibold ">
                  <span className="bg-sky-500 px-3 py-0.5 rounded-2xl">
                    {blog && formatDate(blog.createdAt)}
                  </span>
                  <span className="bg-orange-500 px-3 py-0.5 rounded-2xl">
                    {blog?.category}
                  </span>
                </div>

                {status === "authenticated" &&
                  blog.createdUserEmail === data.user.email && (
                    <div className="flex space-x-3  text-white font-semibold ">
                      <span className="bg-teal-500 cursor-pointer px-1 py-0.5 rounded-md">
                        <MdEditSquare size={25} />
                      </span>
                      <span
                        onClick={() => {
                          setShowPopup(true);
                        }}
                        className="bg-red-500 cursor-pointer px-1 py-0.5 rounded-md"
                      >
                        <AiFillDelete size={25} />
                      </span>
                    </div>
                  )}
              </div>
              <div className="flex flex-col space-y-4">
                <span></span>
                <span className="font-bold text-white">{blog?.title}</span>
                <span className=" md:flex font-medium text-sm text-white">
                  {blog?.description}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
