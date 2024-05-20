"use client";
import { FaBookmark } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";
import ToggleSwitch from "../toggle/ToggleSwitch";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { status, data } = useSession();

  // console.log("Data from Navbar=", data?.user.email);

  let url =
    "https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256";

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  // Function to toggle side navbar
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div>
      <div className="bg-white m-auto justify-between shadow-md shadow-purple-400 px-8 h-16 items-center rounded-xl mt-10 z-30 flex w-[95%] md:w-[96%]">
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide cursor-pointer"
        >
          V BLOGGG
        </Link>
        <div className="md:flex space-x-6 hidden items-center">
          <span>
            <ToggleSwitch />
          </span>

          {status === "loading" && (
            <span className="flex cursor-pointer items-center space-x-2 rounded-md bg-gray-200 px-4 py-1.5">
              <span>
                <span className="animate-pulse rounded-full border-2 bg-white px-4 py-1.5"></span>
              </span>
              <span className="animate-pulse rounded-md bg-white py-1 text-base font-medium tracking-wide text-transparent text-white">
                Lorem, ipsum dol
              </span>
            </span>
          )}

          {status === "authenticated" && (
            <Link
              href={`/profile/${data?.user.email}`}
              className="flex items-center cursor-pointer space-x-2 bg-gray-700 px-4 py-1.5 rounded-md"
            >
              <span>
                <Image
                  src={data?.user.image}
                  width={35}
                  height={35}
                  alt=""
                  className=" border-2 border-pink-500 rounded-full"
                />
              </span>
              <span className="text-white font-medium tracking-wide text-base">
                {data?.user.name}
              </span>
            </Link>
          )}

          <span>
            <Link
              href="/write-blog"
              className="bg-zinc-800 text-white px-5 py-3 rounded-md"
            >
              Write Blogggggg
            </Link>
          </span>

          {status === "loading" ? (
            <button class=" rounded-md min-w-24 w-24 h-11 bg-gray-200 animate-pulse min-h-11 text-white  "></button>
          ) : status === "authenticated" ? (
            <span>
              <button
                onClick={() => signOut()}
                className="bg-gray-800 text-white px-4 py-2.5 rounded-md"
              >
                Sign Outtttttt
              </button>
            </span>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="bg-gray-800 text-white  px-4 py-2.5 rounded-md"
            >
              Sign Innnnnn
            </button>
          )}
        </div>
        <div className="flex md:hidden items-center space-x-5">
          <span>
            <ToggleSwitch />
          </span>
          <span>
            <GiHamburgerMenu
              size={32}
              className="cursor-pointer"
              onClick={toggleSideNav}
            />
          </span>
        </div>
      </div>

      {isSideNavOpen && (
        <div
          onClick={(e) => {
            toggleSideNav();
            e.stopPropagation();
          }}
          className=" md:hidden fixed inset-0 bg-gray-800 overflow-y-hidden bg-opacity-75 z-40"
        >
          <div className="md:hidden bg-white bg-opacity-90 fixed inset-y-0 right-0 bg-whie w-64 shadow-lg z-50">
            <div className="  mt-64 space-y-10 m-auto flex flex-col justify-center items-center ">
              <div>
                <span className="flex items-center cursor-pointer space-x-2 bg-gray-700 px-4 py-1.5 rounded-3xl">
                  <span>
                    {" "}
                    <Image
                      src={url}
                      width={35}
                      height={35}
                      alt=""
                      className=" border-2 border-pink-500 rounded-full"
                    />
                  </span>
                  <span className="text-white font-medium tracking-wide text-base">
                    My profile
                  </span>
                </span>
              </div>
              <div>
                <span className="flex items-center cursor-pointer space-x-2 bg-gray-700 px-9 py-3 rounded-3xl">
                  <Link
                    href="/write-blog"
                    className="text-white min-w-20 min-h-6 font-medium tracking-wide text-base"
                  >
                    Write Blog
                  </Link>
                </span>
              </div>
              <div>
                <span className="flex items-center cursor-pointer space-x-2 bg-gray-700 px-9 py-3 rounded-3xl">
                  <span className="text-white min-w-20 min-h-6 font-medium tracking-wide text-base">
                    Sign Outt
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
