import Link from "next/link";
import Image from "next/image";
import { formatLikes } from "@/helpers/formatLikes";
import { colorChanger } from "@/helpers/colorChanger";
export default function MostPopular({
  key,
  category,
  title,
  createdUserName,
  createdUserPic,
  createdAt,
  blog,
}) {
  return (
    <div
      key={key}
      className="px-4 md:px-0 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer text-left bg-stone-800 rounded-md  py-2"
    >
      <Link href={`/blog/${blog._id}`}>
        <div className="flex space-x-1 mx-2 items-center">
          <span className="font-medium text-sm">By:</span>
          <span className="pl-1">
            {" "}
            <Image
              src={createdUserPic}
              height={25}
              width={25}
              className="w-5 h-5 rounded-full "
            />
          </span>
          <span className="font-semibold text-sm">{createdUserName}</span>
        </div>
        <h1 className="px-2 mt-2 font-bold text-base">{title}</h1>

        <div className="flex">
          {" "}
          <div className="space-x-4 mt-2">
            <span
              className={`${colorChanger()} ml-2 py-0.5 font-medium rounded-md px-2`}
            >
              {category}
            </span>
          </div>
          <div className="space-x-4 mt-2">
            <span
              className={`${colorChanger()} ml-2 py-0.5 font-medium rounded-md px-2`}
            >
              {blog && formatLikes(blog.likes)} Likes
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
