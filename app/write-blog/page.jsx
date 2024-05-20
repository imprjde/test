"use client";
import { useEffect, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { Toaster, toast } from "sonner";
import SignInPopup from "@/components/signinPopup/SignInPopup";

export default function page() {
  const [thumbnail, setThumbnail] = useState(null);
  const [picUrl, setPicUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState(null);
  const [createdUserName, setCreatedUserName] = useState(null);
  const [createdUserPic, setCreatedUserPic] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const { status, data } = useSession();
  const navigate = useRouter();

  useEffect(() => {
    if (data?.user.email) {
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setCreatedUserEmail(data.user.email);
      setCreatedUserName(data.user.name);
      setCreatedUserPic(data.user.image);
    }

    if (!data?.user.email) {
      console.log("Email is not present jjii");
    } else {
      console.log("Email is Present");
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (thumbnail && title && category && description) {
      try {
        setIsUploading(true);
        const data = new FormData();
        data.append("file", thumbnail);
        data.append("upload_preset", "next-blog");
        data.append("cloud_name", "dadhrwm0t");
        let res = await axios.post(
          "https://api.cloudinary.com/v1_1/dadhrwm0t/image/upload",
          data
        );

        const uploadedPicUrl = res.data.url;

        if (uploadedPicUrl) {
          setPicUrl(uploadedPicUrl);
          let apiResp = await axios.post("/api/write", {
            thumbnail: uploadedPicUrl,
            title,
            category,
            description,
            createdUserEmail,
            createdUserName,
            createdUserPic,
          });
          // console.log(apiResp);
          setIsUploading(false);
          router.push("/");
        }
      } catch (error) {
        console.error("Error occurred:", error);
        setIsUploading(false);
      }
    } else {
      toast.warning("Please fill all the fields");
      return;
    }
  };

  const handleReset = () => {
    setThumbnail(null);
    setTitle("");
    setCategory("");
    setDescription("");
  };

  return (
    <>
      {showPopup && (
        <SignInPopup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          title="Please signin to continue"
        />
      )}
      <div className="flex m-auto w-full min-h-screen justify-center ">
        <Toaster position="top-center" richColors />
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-800  w-full  mx-5 my-10 p-5 md:mx-28 md:px-20 rounded-lg"
        >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-lg  text-center font-semibold leading-7 text-white">
                Post Your Creative Blog Here
              </h2>

              <div className="mt-10 grd space-y-6  grid-cols-1 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white px-6 py-10">
                    {!thumbnail && (
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-100">
                          <label
                            htmlFor="file-upload"
                            className="relative mr-1 cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span className="px-2">Upload a file</span>
                            <input
                              onChange={(e) => setThumbnail(e.target.files[0])}
                              onDragEnter={(e) =>
                                setThumbnail(e.target.files[0])
                              }
                              accept="image/png, image/jpeg"
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-100">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    )}

                    {/* {!thumbnail && (
                    <input
                      type="file"
                      onChange={(e) => setThumbnail(e.target.files[0])}
                    />
                  )} */}
                    {thumbnail && (
                      <div className="relative">
                        <img
                          className="h-72 w-auto"
                          src={thumbnail && URL.createObjectURL(thumbnail)}
                        />
                        <button
                          className="absolute top-2 right-2 bg-black rounded-full border-0 text-white font-bold  cursor-pointer"
                          onClick={() => setThumbnail(null)}
                        >
                          <IoClose size={20} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  id="main"
                  className=" w-full md:space-x-4 md:flex space-y-6 md:space-y-0 justify-center items-center m-auto px-2 py-2"
                >
                  <div id="input" className=" w-full md:w-[70%]">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Title of Your Blog
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-insetfocus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                        <input
                          onChange={(e) => setTitle(e.target.value)}
                          value={title}
                          type="text"
                          name="title"
                          id="title"
                          className="block  w-full bg-white rounded-md px-2 flex-1 border-0 bg-transparent py-1.5  text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div id="select" className="bg w-full md:w-[30%]">
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Category
                      </label>
                      <div className="mt-2">
                        <select
                          onChange={(e) => setCategory(e.target.value)}
                          value={category}
                          id="category"
                          name="category"
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option></option>
                          <option>Fashion</option>
                          <option>Food</option>
                          <option>Coading</option>
                          <option>Style</option>
                          <option>Travel</option>
                          <option>Culture</option>
                        </select>
                      </div>
                    </div>{" "}
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Blog Content Here
                  </label>
                  <div className="mt-2 ">
                    <ReactQuill
                      theme="snow"
                      onChange={(value) => {
                        setDescription(value);
                      }}
                      value={description}
                      className="block w-full h-72 pb-[68px] md:p-12 bg-white   rounded-md b py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white">
                    Write few key contents of your Blog.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-3">
            <button
              onClick={handleReset}
              disabled={isUploading}
              type="button"
              className={`rounded-md bg-red-600 px-6 tracking-wider py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              Reset Form
            </button>
            <button
              disabled={isUploading}
              type="submit"
              className={`rounded-md bg-indigo-600 px-6 tracking-wider py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              {isUploading ? "Publishing..." : "Publish Blog"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
