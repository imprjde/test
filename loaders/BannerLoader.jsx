// import React from "react";

// export default function BannerLoader() {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 h-52 animate-pulse w-full mt-5 m-auto ">
//       <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>
//       <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
//       <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
//       <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
//     </div>
//   );
// }

import React from "react";

export default function BannerLoader() {
  return (
    <div className="text-white  rounded-md  pt-20 px-3 md:px-20 m-auto justify-center w-full min-h-screen">
      <div className=" w-full flex m-auto text-center text-3xl md:text-6xl font-bold ">
        <span className="bg-white animate-pulse rounded-md text-transparent inv  ">
          Welcome to the blog app
        </span>
      </div>

      <div className="md:flex m-auto mt-10 bg-yellow-4 justify- space-y-2 md:space-x-5">
        <div className="w-full md:w-[50%] mt-0 md:mt-4">
          {/* <Image
            src={randomPost?.thumbnail}
            height={5600}
            width={5600}
            alt="Banner Image"
            className="rounded-lg"
          /> */}
        </div>
        <div className="w-full justify-between  md:w-[50%] flex flex-col  space-y-5  it text-left m-auto">
          <span className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quasi atque tenetur repudiandae
          </span>
          <span className="text-lg font-medium">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              necessitatibus aliquam saepe voluptas dolore harum, praesentium
              velit repellendus labore non quisquam voluptates numquam
              rerum,Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi quos necessitatibus aliquam saepe voluptas dolore harum,
              praesentium velit repellendus labore non quisquam voluptates
              numquam rerum,Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi
            </span>
          </span>
          <div className="bg-pink-40 m-auto flex w-full justify-start ">
            <button className="bg-gray-500 px-2 py-1 rounded-md font-semibold">
              Read More...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
