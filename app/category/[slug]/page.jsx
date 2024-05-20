"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Card from "@/components/card/Card";
import CardLoader from "@/loaders/CardLoader";

export default function page() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();
  let categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  const handleGetByCategory = async () => {
    try {
      setIsLoading(true);
      let resp = await axios.get(`/api/category?slug=${slug}`);
      console.log(resp.data);
      setBlogs(resp.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    if (slug) {
      handleGetByCategory();
    }
  }, []);

  return (
    <div className="min-h-screen mt-16  w-[90%] md:w-[70%] m-auto justify-center flex flex-col ">
      {!isLoading && (
        <div className="text-white mb-5 font-semibold text-2xl">
          <span>Category : {categoryName && categoryName}</span>
        </div>
      )}
      {isLoading && <CardLoader />}
      {!isLoading &&
        blogs?.map((blog) => (
          <Card
            blog={blog}
            key={blog._id}
            title={blog.title}
            category={blog.category}
            comments={blog.comments}
            createdAt={blog.createdAt}
            createdUserEmail={blog.createdUserEmail}
            createdUserName={blog.createdUserName}
            createdUserPic={blog.createdUserPic}
            description={blog.description}
            likes={blog.likes}
            thumbnail={blog.thumbnail}
          />
        ))}
    </div>
  );
}
