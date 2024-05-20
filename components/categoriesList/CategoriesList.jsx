import Image from "next/image";
import Link from "next/link";
export default function CategoriesList() {
  const lists = [
    {
      id: 1,
      title: "Fashion",
      value: "fashion",
      style: "bg-pink-500",
      src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "Food",
      value: "food",
      style: "bg-rose-500",
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Coding",
      value: "coding",
      style: "bg-orange-500",
      src: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "Style",
      value: "style",
      style: "bg-green-500",
      src: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R5bGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      title: "Travel",
      value: "travel",
      style: "bg-sky-500",
      src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      title: "Culture",
      value: "culture",
      style: "bg-purple-500",
      src: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN1bHR1cmV8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="text-white b my-0 md:my-3 py-0 md:py-3   w-full mb-5 overflow-x-hidden  ">
      <div className=" md:px-20 w-full  space-y-10">
        <div className="bg-yellow-5 w-full  ml-2 md:ml-0">
          <span className="font-bold  tracking-widest  text-xl">
            Popular Categories
          </span>
        </div>
        {/* DESKTOP SCREEN  */}
        <div className="hidden md:flex  space-x-5 ">
          <span></span>
          {lists.map(({ title, id, value, style, src }) => (
            <Link
              href={`/category/${value}`}
              key={id}
              className={`text-white hover:scale-110 transition-transform duration-300 ease-in-out  cursor-pointer m-auto w-[50%] flex text-center sm:justify-center px-8 rounded-md  py-4 ${style}`}
            >
              <span className="flex items-center space-x-2">
                <Image
                  src={src && src}
                  width={50}
                  height={50}
                  alt=""
                  className="rounded-full object-cover w-10 h-10"
                />
                <span>{title}</span>
              </span>
            </Link>
          ))}
        </div>
        {/* MOBILE SCREEN  */}
        <div className="flex md:hidden m-auto  justify-center flex-col text-center space-y-4  ">
          <span></span>
          {lists.map(({ title, id, value, style, src }) => (
            <Link
              href={`/category/${value}`}
              key={id}
              className={`text-white cursor-pointer m-auto w-[70%] flex text-center justify-center  px-8 rounded-md bg-opacity-70 py-2  bg-op ${style}`}
            >
              <span className="flex justify-between  w-[30%]  items-center space-x-2">
                <Image
                  src={src}
                  width={40}
                  height={40}
                  alt=""
                  className="rounded-full object-cover w-10 h-10"
                />
                <span>{title}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
