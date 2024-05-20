"use client";
import { useParams } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { GoHeartFill } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getMonthAndYear } from "@/helpers/formatDate";
import { useSession } from "next-auth/react";
import { GrGrid } from "react-icons/gr";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import ProfileLoader from "@/loaders/ProfileLoader";
import Popup from "@/components/popup/Popup";

export default function page() {
  let img =
    "https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256";
  let post =
    "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/09/Blogging-in-Digital-Marketing.jpg";
  const { slug } = useParams();
  const { status, data } = useSession();
  const [userPosts, setUserPosts] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [currentTab, setCurrentTab] = useState(1);
  const [savedBlogs, setSavedBlogs] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [id, setId] = useState(null);

  console.log("userPosts", userPosts);

  // console.log("The Post Detail i is", data?.user.email);

  const getProfileInfo = async () => {
    if (slug) {
      try {
        setIsFetching(true);
        let resp = await axios.get(`/api/get-profile?slug=${slug}`);
        // console.log(resp.data);
        setUserPosts(resp.data.data.posts);
        setUserInfo(resp.data.data.user[0]);
        // console.log("USR INFO", resp.data.data.user[0]);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
        setIsFetching(false);
        alert("Failed to fetch profile data");
      }
    }
  };

  const getSavedPost = async () => {
    if (data) {
      try {
        let resp = await axios.get(`/api/save-post?id=${data?.user.email}`);
        console.log("Get Saved Post Response", resp);
        setSavedBlogs(resp.data.data);
      } catch (error) {
        console.log(error);
        alert("Failed to fetch Saved data");
      }
    }
  };

  useEffect(() => {
    getProfileInfo();
    getSavedPost();
  }, []);

  const handleBlogs = () => {
    setCurrentTab(1);
  };
  const handlesaves = () => {
    setCurrentTab(2);
  };
  return (
    <>
      {showPopup && (
        <Popup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          title={"Are you sure you want to delete this blog?"}
          slug={id}
        />
      )}
      {isFetching && <ProfileLoader />}
      {!isFetching && (
        <div className="w-full min-h-screen  bg-green-4  m-auto  text-white font-bold py-20 items- justify-center">
          <div className="bg-neutral-700 bg-opacity-  py-10 mx-4 md:mx-40 rounded-md">
            <div
              id="profile"
              className="bg-zinc-800 rounded-md py-4  w-[90%] md:w-[72%] space-y-4 flex flex-col justify-center m-auto h-[50%]"
            >
              <span className="w-full m-auto flex justify-center">
                {" "}
                <Image
                  src={img}
                  height={200}
                  width={200}
                  alt=""
                  className="w-32 h-32 rounded-full "
                />
              </span>
              <span className="w-full m-auto flex justify-center tracking-wider font-semibold text-xl">
                {userInfo?.name}
              </span>
              <span className="w-full  items-center justify-center text-left space-x-2 m-auto flex  tracking-wider font- text-sm">
                <span className="1234text-teal-100">
                  <FaRegCalendarAlt />
                </span>
                <span className="font-medium text-teal-100">
                  Joined {userInfo && getMonthAndYear(userInfo.createdAt)}
                </span>
              </span>

              <div className=" space-x-5 flex m-auto w-full justify-center">
                <div className="flex m space-x-14 py-2 bg-stone-900 w-full  justify-center mx-3 rounded-lg">
                  <div
                    onClick={handleBlogs}
                    className={`flex cursor-pointer px-2 py-1 rounded-md ${
                      currentTab === 1 && "bg-sky-500"
                    }   items-center space-x-2`}
                  >
                    <span className="text-center tracking-widest font-semibold">
                      <GrGrid size={20} />
                    </span>
                    <span className="text-center text-xl font-semibold tracking-widest">
                      {userPosts?.length}
                    </span>
                  </div>
                  <div
                    onClick={handlesaves}
                    className={`flex cursor-pointer px-2 py-1 rounded-md ${
                      currentTab === 2 && "bg-sky-500"
                    }  items-center space-x-2`}
                  >
                    {data?.user.email === userInfo?.email && (
                      <>
                        <span className="text-center tracking-widest font-semibold">
                          <FaRegBookmark size={20} />
                        </span>
                        <span className="text-center text-xl font-semibold tracking-widest">
                          {savedBlogs?.length}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-500 mt-3 text-lg text-center tracking-widest">
              <span>{currentTab === 1 ? "All Blogs" : "All Saved"}</span>
            </div>

            {currentTab === 1 && (
              <div
                id="photos"
                className="bg-orange-5 mt-4 px-2 py-2 w-[95%] md:w-[100%] flex m-auto justify-center  "
              >
                <div className="bg-zinc-800 rounded-md grid px-2 py-2 gap-2 grid-cols-3 md:grid-cols-4">
                  {userPosts &&
                    userPosts.map((post) => (
                      <Link
                        href={`/blog/${post._id}`}
                        className="relative w-[100px] h-[100px] md:w-44 md:h-44 cursor-pointer bg-purple-500 bg-opacity-20 px-2 py-2"
                        key={post._id}
                      >
                        <Image
                          src={post.thumbnail}
                          height={400}
                          width={400}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bg-yellow-0 top-0 left-0 right-0 bottom-0 flex items-center justify-center  transition-opacity duration-300 ">
                          {/* DESKTOP SCREEN  */}
                          <div className=" hidden md:flex absolute bg-pink-0 w-full bottom-2 space-x-1 justify-between px-2 md:px-5  m-auto">
                            <div className="flex items-center space-x-1">
                              <span>
                                <GoHeartFill size={15} />
                              </span>
                              <span className="text-xs font-semibold">
                                1.7K
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span>
                                <FaRegComment size={15} />
                              </span>
                              <span className="text-xs font-semibold">5K</span>
                            </div>

                            {status === "authenticated" &&
                              post?.createdUserEmail === data?.user.email && (
                                <div
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setShowPopup(true);
                                    setId(post._id);
                                  }}
                                  className="flex items-center space-x-1"
                                >
                                  <span onClick={() => setShowPopup(true)}>
                                    <MdDelete size={20} />
                                  </span>
                                </div>
                              )}
                          </div>

                          {/* MOBILE SCREEN  */}

                          <div className=" flex md:hidden absolute bg-pink-0 w-full bottom-2 space-x-1 justify-between px-1 md:px-5  m-auto">
                            <div className="flex items-center space-x-1">
                              <span>
                                <GoHeartFill size={10} />
                              </span>
                              <span className="text-xs font-semibold">
                                1.7K
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span>
                                <FaRegComment size={10} />
                              </span>
                              <span className="text-xs font-semibold">5K</span>
                            </div>
                            {status === "authenticated" &&
                              post?.createdUserEmail === data?.user.email && (
                                <div
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setShowPopup(true);
                                    setId(post._id);
                                  }}
                                  className="flex items-center space-x-1"
                                >
                                  <span>
                                    <MdDelete size={15} />
                                  </span>
                                </div>
                              )}
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            )}

            {currentTab === 2 && (
              <div
                id="photos"
                className="bg-orange-5 mt-4 px-2 py-2 w-[95%] md:w-[100%] flex m-auto justify-center  "
              >
                <div className="bg-zinc-800 rounded-md grid px-2 py-2 gap-2 grid-cols-3 md:grid-cols-4">
                  {savedBlogs &&
                    savedBlogs.map((saved) => (
                      <Link
                        href={`/blog/${saved.postId}`}
                        className="relative w-[100px] h-[100px] md:w-44 md:h-44 cursor-pointer bg-purple-500 bg-opacity-20 px-2 py-2"
                        key={saved._id}
                      >
                        <Image
                          src={saved.thumbnail}
                          height={400}
                          width={400}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bg-yellow-0 top-0 left-0 right-0 bottom-0 flex items-center justify-center  transition-opacity duration-300 "></div>
                      </Link>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
