import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { useAuth } from "../../AutContext";
import { Link } from "react-router-dom";


const Post = ({content, type})=>{
     const { user } = useAuth();
    const [showComment, setShowComment] = useState(false);

    const renderPost = ()=>{
        if(type === 'image'){
            return <img src={content} alt="image" />
        } else if(type === 'link'){
            return 'repository';
        } else if(type === 'video'){
            return <video src={content}></video>
        } else if(type === 'presentation'){
            return (
                <iframe src={content} frameborder="0"></iframe>
            )
        }

        return null;
    }

    return(
        <>
        <div className="max-w-2xl h-auto border rounded-lg p-3 mb-4 bg-white shadow-md">
        <div className="relative inline-block">
            {/* Profile Picture */}
            <Link  to="/myprofile">
                <img
                    className="rounded-full w-12 h-12 object-cover border-2 border-gray-200"
                    src={user?.userPicture}
                    alt="User Profile"
                />
            </Link>
            <span className="absolute top-2 left-14 font-semibold text-nowrap text-">{user?.userName.toUpperCase()}</span>
            {/* Active Now Indicator */}
            <span className="absolute bottom-8 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-bounce"></span>
            </div>

            {/* Render all post */}
                {renderPost()}
                <div className="flex justify-center w-full rounded-lg">
                <video autoPlay loop muted>
                    <source src="/hero-video.mp4" type="video/mp4"/>
                </video>
                </div>

            <div className="flex justify-evenly mt-4">
                <button className="like-button bg-blue-500 text-white px-3 py-1 rounded mr-2">
                    <AiFillLike/>
                </button>

                <button type="submit" className=" bg-blue-500 text-white px-3 py-1 rounded mr-2">
                    <FaCommentAlt/>
                </button>

                <button type="submit" className=" bg-blue-500 text-white px-3 py-1 rounded mr-2">
                     <FaPeopleArrows/> Like
                </button>
                
            </div>

            {/* <div className="mt-4">
                <h4 className="font-bold mb-2">Comments</h4>
                <ul>
                    <li>Sample Comment!</li>
                    <li>Sample Comment!</li>
                    <li>Sample Comment!</li>
                    <li>Sample Comment!</li>
                    <li>Sample Comment!</li>
                </ul>

                <form  className="mt-2">
                <input type="text"  placeholder="Add a comment..." className="border px-3 py-1 w-full rounded"/>

                <button
                    type="submit" className="bg-green-500 text-white px-3 py-1 mt-2 rounded">
                    Comment
                </button>
                </form>
            </div> */}
            </div>
        </>
    )
}

export default Post;