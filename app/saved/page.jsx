import React from "react";
// import { MdDelete } from "react-icons/md";
// import { GoHeartFill } from "react-icons/go";
// import { FaRegComment } from "react-icons/fa";
import Image from "next/image";

export default function page() {
  let array = [1, 2, 3, 4, 5];
  let img =
    "https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256";
  let post =
    "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/09/Blogging-in-Digital-Marketing.jpg";
  return (
    <div className="bg-red-5 min-h-screen flex m-auto justify-center">
      <div className="bg-green-5 w-[90%] md:w-[60%] my-10">
        <div className="bg-yellow-5 w-full flex m-auto justify-center mt-3 ">
          <span className="text-white font-semibold text-2xl md:text-3xl ">
            Your Saved Blogs
          </span>
        </div>

        <div className="bg-orange-0 w-full flex m-auto justify-center mt-3 ">
          <div
            id="photos"
            className="bg-orange-5 mt-4 px- py-2 w-auto  flex m-auto justify-center  "
          >
            <div className="bg-zinc-800 rounded-md grid px-4 md:px-10 py-5 md:py-10 gap-2 grid-cols-3 md:grid-cols-4">
              {array.map((img) => (
                <div
                  className="relative w-[100px] h-[100px] md:w-44 md:h-44 cursor-pointer bg-purple-500 bg-opacity-20 px-2 py-2"
                  key={img.id}
                >
                  <Image
                    src={post}
                    height={400}
                    width={400}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bg-yellow-0 top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity- transition-opacity duration-300 hover:opacity-100">
                    <div className=" flex absolute bg-pink-0 w-full bottom-2 space-x-1 justify-center px-2 md:px-5  m-auto">
                      <div>
                        <button className="bg-red-500 text-white text-sm px-1 md:px-3 md:py-0.5 rounded-sm md:rounded-md bg-opacity-80">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
