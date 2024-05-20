import axios from "axios";
import Categories from "../categories/Categories";
import MostPopular from "../mostPopular/MostPopular";
import { useEffect, useState } from "react";
import MostLikedLoader from "@/loaders/MostLikedLoader";

export default function SideMenu() {
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMostPopular = async () => {
    try {
      setIsLoading(true);
      let resp = await axios.get("/api/get-popular");
      // console.log("Popular Are", resp.data.data);
      setPopularBlogs(resp.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMostPopular();
  }, []);
  return (
    <div className=" w-full h-screen flex  m-auto justify-center">
      {/* MOST POPULAR  */}
      <div className=" w-full">
        <div className="space-y-4 ">
          <h2 className="font-bold  tracking-widest  text-xl">
            Most Liked Blogs
          </h2>

          {isLoading && <MostLikedLoader />}
          {!isLoading &&
            popularBlogs &&
            popularBlogs.map((blog) => (
              <MostPopular
                blog={blog}
                key={blog._id}
                category={blog.category}
                title={blog.title}
                createdUserName={blog.createdUserName}
                createdUserPic={blog.createdUserPic}
                createdAt={blog.createdAt}
              />
            ))}
        </div>

        <div className="space-y-4 m-auto justify-center flex flex-col w-full mt-10">
          <h2 className="font-bold  tracking-widest  text-xl">
            Discover By categories
          </h2>

          <Categories />
        </div>
      </div>
    </div>
  );
}
