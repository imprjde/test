// import Image from "next/image";
// import { AiFillLike } from "react-icons/ai";
// import { FaArrowUp } from "react-icons/fa";
// import { useSession } from "next-auth/react";
// import axios from "axios";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import CommentLoader from "@/loaders/CommentLoader";
// import { formatCommentDate } from "@/helpers/formatCommentDate";
// import { AiOutlineLike } from "react-icons/ai";

// import likeAudio from "../../audio/comment-like-audio.mp3";

// export default function Comments({ postId }) {
//   const [comment, setComment] = useState("");
//   const [isPosting, setIsPosting] = useState(false);
//   const [isFetching, setIsFetching] = useState(false);
//   const [allComments, setAllComments] = useState([]);
//   const [allLikedComments, setAllLikedComments] = useState([]);
//   const { status, data } = useSession();
//   const commentLikeAudio = new Audio(likeAudio);

//   // console.log("THIS DATA CONSOLE IS FROM COMMENT COMPOENT", data?.user.email);

//   let url =
//     "https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256";

//   const handlePostComment = async () => {
//     try {
//       if (!postId || !data?.user?.email || !data?.user?.name || !comment) {
//         alert("Missing required fields.");
//         return;
//       }
//       setIsPosting(true);
//       let resp = await axios.post("/api/comment", {
//         postId,
//         userEmail: data?.user.email,
//         userName: data?.user.name,
//         userThumbnail: data?.user.image,
//         comment,
//       });
//       // console.log(resp);
//       setIsPosting(false);
//       setComment("");
//     } catch (error) {
//       console.log(error);
//       setIsPosting(false);
//     }
//   };

//   const handleFetchComments = async () => {
//     try {
//       setIsFetching(true);
//       if (postId) {
//         let resp = await axios.get(`/api/comment?slug=${postId}`);
//         // console.log(resp);
//         setAllComments(resp.data.data);
//       }
//       setIsFetching(false);
//     } catch (error) {
//       console.log("Error fetching comments", error);
//       setIsFetching(false);
//     }
//   };

//   useEffect(() => {
//     handleFetchComments();
//   }, []);

//   const handleLikeComment = async (index, commentID) => {
//     commentLikeAudio.currentTime = 0;
//     commentLikeAudio.play();
//     let copy = [...allComments];
//     copy[index] = { ...copy[index], likes: copy[index].likes + 1 };
//     setAllComments(copy);

//     try {
//       let resp1 = await axios.put(`/api/comment?slug=${commentID}`);
//       let resp2 = await axios.post(`/api/likedComment`, {
//         commentId: commentID,
//         userId: data?.user.email,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDislikeComment = async (index, commentID) => {
//     let copy = [...allComments];
//     let copy2 = [...allLikedComments];
//     copy[index] = { ...copy[index], likes: copy[index].likes - 1 };
//     setAllComments(copy);

//     let obj = copy2.filter((item) => item.commentId === commentID);
//     let id = obj[0]._id;

//     try {
//       let resp = await axios.put(
//         `/api/likedComment?slug=${id}&ID=${commentID}`,
//         {
//           commentId: commentID,
//         }
//       );
//       console.log("Dislike API Response", resp);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchAllLikedCommentId = async () => {
//     try {
//       let resp = await axios.get(
//         `/api/likedComment?slug=${data?.user.email}&postId=${postId}`
//       );

//       console.log("RE", resp);
//       setAllLikedComments(resp.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     // if (data) {
//     fetchAllLikedCommentId();
//     // }
//   }, [data]);

//   const handleIsLiked = (id) => {
//     let copy = [...allLikedComments];
//     let isLiked = copy.some((item) => item.commentId === id);
//     return isLiked;
//   };

//   return (
//     <div className="bg-sky-5 py-10 w-full min-h-screen flex flex-col m-auto justify-center   ">
//       <div id="input" className="bg-red-5 w-full">
//         {status === "authenticated" && (
//           <div className="inline-flex space-x-3  items-center w-full py-3 px-2">
//             <Image
//               src={url}
//               height={30}
//               width={30}
//               alt="Thumbnail"
//               className="w-10 h-10 rounded-full "
//             />
//             <input
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               placeholder="Add your comment here"
//               className="h-10 w-[200px]  md:w-[550px] px-2 text-black rounded-md"
//             />
//             <button
//               onClick={handlePostComment}
//               className="bg-sky-500 py-2 px-3 rounded-xl "
//             >
//               {isPosting ? "X" : <FaArrowUp size={25} />}
//             </button>
//           </div>
//         )}
//         {status === "unauthenticated" && (
//           <div className="inline-flex    items-center w-full py-3 px-2">
//             <div className=" mx-12 px-3 py-2 bg-white w-full flex items-center m-auto text-black rounded-md">
//               <div className="m-auto justify-between items-center w-full flex">
//                 <span className="font-medium tracking-wider ">
//                   Please sign in to add your comment
//                 </span>
//                 <button className="bg-black text-white px-3 py-1 rounded-md">
//                   Sign In
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <div id="all comments" className="w-full">
//         {isFetching && <CommentLoader />}
//         {!isFetching &&
//           allComments.length > 0 &&
//           allComments?.map(
//             (
//               {
//                 _id,
//                 userEmail,
//                 userName,
//                 userThumbnail,
//                 comment,
//                 likes,
//                 createdAt,
//               },
//               index
//             ) => (
//               <div
//                 key={_id}
//                 className="bg-fuchsia-40  py-1 space-x-2 flex  mt-10 w-full m-auto"
//               >
//                 <div className="mx-2">
//                   <Link href={`/profile/${userEmail}`}>
//                     <Image
//                       src={userThumbnail}
//                       height={25}
//                       width={25}
//                       alt="Profile Pic"
//                       className="w-10 h-10 cursor-pointer rounded-full "
//                     />
//                   </Link>
//                 </div>
//                 <div className="bg-red-60 w-full flex flex-col">
//                   <span className="bg-yellow-5 px-2 space-x-3">
//                     <Link
//                       href={`/profile/${userEmail}`}
//                       className="cursor-pointer"
//                     >
//                       {userName}
//                     </Link>
//                     <span>{createdAt && formatCommentDate(createdAt)}</span>
//                   </span>
//                   <span className="bg-green-5 px-2">{comment}</span>
//                   <span className="bg-orange-40 px-2 flex items-center mt-2 space-x-5">
//                     {handleIsLiked(_id) ? (
//                       <span
//                         onClick={() => handleDislikeComment(index, _id)}
//                         className="cursor-pointer"
//                       >
//                         <AiFillLike className="text-sky-400 " size={22} />
//                       </span>
//                     ) : (
//                       <span
//                         onClick={() => handleLikeComment(index, _id)}
//                         className="cursor-pointer"
//                       >
//                         <AiOutlineLike size={22} />
//                       </span>
//                     )}

//                     <span>
//                       {likes} {likes === 1 ? "Like" : "Likes"}
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             )
//           )}

//         {!isFetching && !allComments && (
//           <div className=" mt- text-center text-white tracking-wide font-medium text-xl">
//             <span>No comments yet.</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
import { useSession } from "next-auth/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import CommentLoader from "@/loaders/CommentLoader";
import { formatCommentDate } from "@/helpers/formatCommentDate";
import { AiOutlineLike } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import likeAudio from "../../audio/comment-like-audio.mp3";

export default function Comments({ postId }) {
  const [comment, setComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [allComments, setAllComments] = useState([]);
  const [allLikedComments, setAllLikedComments] = useState([]);
  const { status, data } = useSession();
  const commentLikeAudio = new Audio(likeAudio);

  // console.log("THIS DATA CONSOLE IS FROM COMMENT COMPOENT", data?.user.email);

  let url =
    "https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256";

  const handlePostComment = async () => {
    setIsPosting(true);
    let newComment = {
      postId,
      userEmail: data?.user.email,
      userName: data?.user.name,
      userThumbnail: data?.user.image,
      comment,
      isPosting: true,
    };

    setAllComments([...allComments, newComment]);

    try {
      if (!postId || !data?.user?.email || !data?.user?.name || !comment) {
        alert("Missing required fields.");
        return;
      }
      setIsPosting(true);
      let resp = await axios.post("/api/comment", {
        postId,
        userEmail: data?.user.email,
        userName: data?.user.name,
        userThumbnail: data?.user.image,
        comment,
      });
      handleFetchComments();
      setIsPosting(false);
      setComment("");
    } catch (error) {
      console.log(error);
      setIsPosting(false);
    }
  };

  const handleFetchComments = async () => {
    try {
      setIsFetching(true);
      if (postId) {
        let resp = await axios.get(`/api/comment?slug=${postId}`);
        // console.log(resp);
        setAllComments(resp.data.data);
      }
      setIsFetching(false);
    } catch (error) {
      console.log("Error fetching comments", error);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    handleFetchComments();
  }, []);

  const handleLikeComment = async (index, commentID) => {
    commentLikeAudio.currentTime = 0;
    commentLikeAudio.play();
    let copy = [...allComments];
    copy[index] = { ...copy[index], likes: copy[index].likes + 1 };
    setAllComments(copy);

    try {
      let resp1 = await axios.put(`/api/comment?slug=${commentID}`);
      let resp2 = await axios.post(`/api/likedComment`, {
        commentId: commentID,
        userId: data?.user.email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDislikeComment = async (index, commentID) => {
    let copy = [...allComments];
    let copy2 = [...allLikedComments];
    copy[index] = { ...copy[index], likes: copy[index].likes - 1 };
    setAllComments(copy);

    let obj = copy2.filter((item) => item.commentId === commentID);
    let id = obj[0]._id;

    try {
      let resp = await axios.put(
        `/api/likedComment?slug=${id}&ID=${commentID}`,
        {
          commentId: commentID,
        }
      );
      console.log("Dislike API Response", resp);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllLikedCommentId = async () => {
    try {
      let resp = await axios.get(
        `/api/likedComment?slug=${data?.user.email}&postId=${postId}`
      );

      console.log("RE", resp);
      setAllLikedComments(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if (data) {
    fetchAllLikedCommentId();
    // }
  }, [data]);

  const handleIsLiked = (id) => {
    let copy = [...allLikedComments];
    let isLiked = copy.some((item) => item.commentId === id);
    return isLiked;
  };

  const handleDeleteComment = async (index, id) => {
    const commentsCopy = [...allComments];
    let updatedComment = commentsCopy.filter((comment, _i) => _i !== index);
    setAllComments(updatedComment);
    console.log(id);

    try {
      let resp1 = await axios.delete(`/api/comment?id=${id}`);
      console.log(resp1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-sky-5 py-10 w-full min-h-screen flex flex-col m-auto justify-center   ">
      <div id="input" className="bg-red-5 w-full">
        {status === "authenticated" && (
          <div className="inline-flex space-x-3  items-center w-full py-3 px-2">
            <Image
              src={url}
              height={30}
              width={30}
              alt="Thumbnail"
              className="w-10 h-10 rounded-full "
            />
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add your comment here"
              className="h-10 w-[200px]  md:w-[550px] px-2 text-black rounded-md"
            />
            <button
              onClick={handlePostComment}
              className="bg-sky-500 py-2 px-3 rounded-xl "
            >
              <FaArrowUp size={25} />
            </button>
          </div>
        )}
        {status === "unauthenticated" && (
          <div className="inline-flex    items-center w-full py-3 px-2">
            <div className=" mx-12 px-3 py-2 bg-white w-full flex items-center m-auto text-black rounded-md">
              <div className="m-auto justify-between items-center w-full flex">
                <span className="font-medium tracking-wider ">
                  Please sign in to add your comment
                </span>
                <button className="bg-black text-white px-3 py-1 rounded-md">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div id="all comments" className="w-full">
        {isFetching && <CommentLoader />}
        {!isFetching &&
          allComments.length > 0 &&
          allComments?.map(
            (
              {
                _id,
                userEmail,
                userName,
                userThumbnail,
                comment,
                likes,
                createdAt,
                isPosting,
              },
              index
            ) => (
              <div
                key={_id}
                className=" py-1 space-x-2 flex  mt-10 w-full m-auto"
              >
                <div className="mx-2 ">
                  <Link href={`/profile/${userEmail}`}>
                    <Image
                      src={userThumbnail}
                      height={25}
                      width={25}
                      alt="Profile Pic"
                      className="w-10 h-10  rounded-full "
                    />
                  </Link>
                </div>
                <div className=" w-full flex flex-col">
                  <span className="  px-2 space-x-3">
                    <Link
                      href={`/profile/${userEmail}`}
                      className="cursor-pointer"
                    >
                      {userName}
                    </Link>
                    {isPosting ? (
                      <span>Posting...</span>
                    ) : (
                      <span>{createdAt && formatCommentDate(createdAt)}</span>
                    )}
                  </span>
                  <span className="bg-green-5 px-2">{comment}</span>
                  <span className="bg-orange-40 px-2 flex items-center mt-2 space-x-5">
                    {handleIsLiked(_id) ? (
                      <span
                        onClick={() => handleDislikeComment(index, _id)}
                        className="cursor-pointer"
                      >
                        <AiFillLike className="text-sky-400 " size={22} />
                      </span>
                    ) : (
                      <span
                        onClick={() => handleLikeComment(index, _id)}
                        className="cursor-pointer"
                      >
                        <AiOutlineLike size={22} />
                      </span>
                    )}

                    <span>
                      {likes} {likes === 1 ? "Like" : "Likes"}
                    </span>

                    <span
                      className="items-center"
                      onClick={() => handleDeleteComment(index, _id)}
                    >
                      <button className="text-rose-400 items-center">
                        <MdDeleteForever size={25} />{" "}
                      </button>
                    </span>
                  </span>
                </div>
              </div>
            )
          )}

        {!isFetching && allComments.length === 0 && (
          <div className=" mt-10 text-center text-white tracking-wide font-medium text-xl">
            <span>No comments yet.</span>
          </div>
        )}
      </div>
    </div>
  );
}
