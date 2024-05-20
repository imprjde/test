import Image from "next/image";
import Link from "next/link";

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
export default function Categories() {
  return (
    <div>
      <div className=" m-auto justify-center   grid grid-cols-3 md:grid-cols-2">
        {lists.map(({ id, title, value, style, src }) => (
          <Link
            href={`/category/${value}`}
            className={`my-2 mx-1 md:mx-4 hover:scale-110 transition-transform duration-300 ease-in-out flex justify-center w-28 rounded-md cursor-pointer ${style}`}
          >
            <div key={id} className="px-2 py-2">
              <span className="flex items-center space-x-1 w-[100%]">
                <Image
                  src={src}
                  width={20}
                  height={20}
                  alt=""
                  className="rounded-full object-cover w-7 h-7"
                />
                <span>{title}</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
