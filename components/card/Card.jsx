import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

import { GoHeartFill } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { formatDate } from "@/helpers/formatDate";
import Link from "next/link";
import { formatLikes } from "@/helpers/formatLikes";
import axios from "axios";
import { useSession } from "next-auth/react";
import { colorChanger } from "@/helpers/colorChanger";
import { useEffect, useState } from "react";

export default function Card({
  blog,
  key,
  title,
  category,
  createdAt,
  totalComments,
  createdUserEmail,
  createdUserName,
  createdUserPic,
  description,
  likes,
  thumbnail,
  // savedPosts,
}) {
  const { status, data } = useSession();
  const [savedPosts, setSavedPosts] = useState([]);

  console.log("FUCK, THIS IS SAVED POST FROM CARD COMP", savedPosts);

  const getSavedPost = async () => {
    console.log("GETSAVEDPOSTS FN RUNNING");
    // if (data) {
    try {
      let resp = await axios.get(`/api/save-post?id=${data?.user.email}`);
      console.log("Get Saved Post from CARD COMP FUC", resp.data.data);
      setSavedPosts(resp.data.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch Saved data");
    }
    // }
  };

  useEffect(() => {
    getSavedPost();
  }, [data]);

  const handleSave = async (postId, thumbnail) => {
    if (status === "unauthenticated") {
      alert("Please Login to save");
    } else {
      try {
        let resp = await axios.post("/api/save-post", {
          savedUserEmail: data?.user.email,
          postId,
          thumbnail,
        });

        // console.log(resp.data);
        getSavedPost();
      } catch (error) {
        console.log(error);
        alert("Error Encountered");
      }
    }
  };

  const handleUnsave = async (postId) => {
    try {
      let resp = await axios.delete(`/api/save-post?id=${postId}`);
      console.log(resp);
      getSavedPost();
    } catch (error) {
      console.log(error);
    }
  };

  const handleIsSaved = (id) => {
    let copy = [...savedPosts];
    let isSaved = copy.some((item) => item.postId === id);
    return isSaved;
  };
  return (
    <div
      key={key}
      className="bg-neutral-800 py-3 rounded-md  my-2 md:my-3 md:flex p-1 h-fit w-full  space-x-4"
    >
      <div
        id="image"
        className="h-auto space-y-2 px-2 md:px-4  w-full md:w-1/2  "
      >
        <div className="space-y-2 mt-1">
          <div className="flex space-x-2 items-center  justify-between px-1">
            <Link
              href={`/profile/${createdUserEmail}`}
              className="flex items-center cursor-pointer space-x-2"
            >
              <Image
                src={createdUserPic}
                height={30}
                width={30}
                alt=""
                className="w-6 h-6 rounded-full "
              />
              <span className="text-white text-sm font-medium">
                {createdUserName}
              </span>
            </Link>
            <div className="cursor-pointer">
              <FaShareAlt size={18} className="text-sky-500" />
            </div>
          </div>
          <Image
            src={thumbnail}
            height={300}
            width={300}
            alt=""
            className="w-full rounded-lg"
          />
        </div>

        <div className="ml-0 md:ml-2 space-y-3">
          <div className="flex justify-center space-x-14   md:space-x-10">
            <span>
              <span className="flex items-center space-x-1">
                <GoHeartFill size={22} className="text-white cursor-pointer" />
                <span className="text-white font-semibold">
                  {formatLikes(likes)}{" "}
                </span>
              </span>
            </span>
            <span>
              <span className="flex items-center space-x-1">
                <FaRegComment size={20} className="text-white cursor-pointer" />
                <span className="text-white font-semibold">
                  {totalComments}
                </span>
              </span>
            </span>
            <span>
              {/* <FaBookmark /> */}
              {!handleIsSaved(blog._id) ? (
                <span
                  onClick={() => handleSave(blog._id, thumbnail)}
                  className="flex items-center space-x-1"
                >
                  <FaRegBookmark
                    size={20}
                    className="text-white cursor-pointer"
                  />
                  <span className="text-white font-semibold">Save</span>
                </span>
              ) : (
                <span
                  onClick={() => handleUnsave(blog._id)}
                  className="flex items-center space-x-1"
                >
                  <FaBookmark size={20} className="text-white cursor-pointer" />
                  <span className="text-white font-semibold">Saved</span>
                </span>
              )}
            </span>
          </div>
        </div>
      </div>

      <div
        id="content"
        className="text-white bg-lime- m-auto justify-start w-auto md:w-1/2  mt-2 md:mt-10  flex flex-col"
      >
        {/* colorChanger */}
        <div className="flex space-x-3  ">
          <span className={`${colorChanger()} px-2 rounded-xl font-medium`}>
            {formatDate(createdAt)}
          </span>
          <span className={`${colorChanger()} px-2 rounded-xl font-medium`}>
            {category}
          </span>
        </div>
        <div className="flex flex-col space-y-4">
          <span></span>
          <span className="font-bold">{title}</span>
          <span
            className="hidden md:flex"
            // dangerouslySetInnerHTML={{ __html: description }}
          >
            {/* {description.substring(0, 250)} */}
            <span
              dangerouslySetInnerHTML={{
                __html: description.substring(0, 180),
              }}
            />
          </span>
          <div className=" w-full pr-2 md:pr-0 flex justify-end md:justify-start m-auto">
            <Link
              href={`/blog/${blog._id}`}
              className="flex h-full  justify-end  bg-gradient-to-r from-orange-500 to-orange-200 w-fit px-2 py-1 rounded-md  text-white items-center space-x-2"
            >
              <button className="font-normal ">Read More</button>
              <span className="mt-0.5">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
