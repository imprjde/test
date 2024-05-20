import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import BannerLoader from "@/loaders/BannerLoader";
export default function Banner() {
  const [randomPost, setRandomPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetRandom = async () => {
    try {
      setIsLoading(true);
      let res = await axios.get("/api/get-random");
      console.log("Random Post =", res.data.data._id);
      setRandomPost(res.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      alert("Fetching banner data error");
    }
  };

  useEffect(() => {
    handleGetRandom();
  }, []);

  let url =
    "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/09/Blogging-in-Digital-Marketing.jpg";
  return (
    <>
      {isLoading ? (
        <div className="mx-7 mt-10">
          <BannerLoader />
        </div>
      ) : (
        <div className="text-white  pt-20 px-3 md:px-20 m-auto justify-center w-full min-h-screen">
          {/* <Popup /> */}
          <div className=" w-full flex m-auto text-center text-3xl md:text-6xl font-bold ">
            <span>Welcome to the blog app</span>
          </div>
          <div className="md:flex m-auto mt-10 bg-yellow-4 justify- space-y-2 md:space-x-5">
            <div className="w-full md:w-[50%] mt-0 md:mt-4">
              <Image
                src={randomPost?.thumbnail}
                height={5600}
                width={5600}
                alt="Banner Image"
                className="rounded-lg"
              />
            </div>
            <div className="w-full justify-between  md:w-[50%] flex flex-col  space-y-5  it text-left m-auto">
              <span className="text-xl font-bold">{randomPost?.title}</span>
              <span className="text-lg font-medium">
                <span
                  dangerouslySetInnerHTML={{
                    __html: randomPost?.description.substring(0, 450),
                  }}
                />
              </span>
              <Link
                href={`/blog/${randomPost?._id}`}
                className="bg-pink-40 m-auto flex w-full justify-start "
              >
                <button className="bg-gray-500 px-2 py-1 rounded-md font-semibold">
                  Read More...
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
