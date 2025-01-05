import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../AutContext";

const Post = ({ post }) => {
  const { user } = useAuth();
  const { metadata, fileType, filename, uploadDate } = post;
  const [showComment, setShowComment] = useState(false);
  const [isHeartCount, setIsHeartCount] = useState(0);

  const renderPost = () => {
    const fileUrl = `http://localhost:5000/${metadata.path}`;

    if (fileType === "image") {
      return (
        <img
          src={fileUrl}
          alt={filename}
          className="flex justify-center w-full rounded-lg"
        />
      );
    } else if (fileType === "video") {
      return (
        <video
          src={fileUrl}
          controls
          className="flex justify-center w-full rounded-lg"
        >
          Your browser does not support the video tag.
        </video>
      );
    } else if (fileType === "docx" || fileType === "pdf") {
      return (
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Document: {filename}
        </a>
      );
    }

    return null;
  };

  const handleFeedbackToggle = () => {
    setShowComment((prev) => !prev);
  };

  return (
    <div className="max-w-2xl h-auto border rounded-lg p-3 mb-4 bg-white shadow-md">
      <div className="relative inline-block">
        {/* Profile Picture */}
        <Link to="/myprofile">
          <img
            className="rounded-full w-12 h-12 object-cover border-2 border-gray-200"
            src={user?.userPicture}
            alt={`${user?.userName}'s Profile`}
          />
        </Link>

        <Link to="/myprofile">
          <span className="absolute top-2 left-14 font-semibold text-nowrap underline">
            {user?.userName.toUpperCase()}
          </span>
        </Link>

        {/* Active Now Indicator */}
        <span className="absolute bottom-8 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-bounce"></span>
      </div>

      {/* Render post content */}
      {renderPost()}

      <p className="text-sm text-gray-500 mt-2">
        Uploaded on: {new Date(uploadDate).toLocaleString()}
      </p>

      <div className="flex justify-evenly mt-4">
        <button
          onClick={() => setIsHeartCount(isHeartCount + 1)}
          className="like-button bg-blue-500 text-white px-3 py-1 rounded mr-2"
        >
          <div className="flex justify-evenly items-center gap-2">
            <FaHeart />
            <span>{`Heart ${isHeartCount}`}</span>
          </div>
        </button>

        <button
          onClick={handleFeedbackToggle}
          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
        >
          <div className="flex justify-evenly items-center gap-2">
            <MdFeedback />
            <span>Feedback</span>
          </div>
        </button>

        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
        >
          <div className="flex justify-evenly items-center gap-2">
            <FaPeopleArrows />
            <span>Connect</span>
          </div>
        </button>
      </div>

      {showComment && (
        <div className="mt-4">
          <h4 className="font-bold mb-2">Feedback</h4>
          <ul>
            <li>Sample Feedback!</li>
            <li>Sample Feedback!</li>
            <li>Sample Feedback!</li>
          </ul>

          <form className="mt-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="border px-3 py-1 w-full rounded"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-3 py-1 mt-2 rounded"
            >
              Comment
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;