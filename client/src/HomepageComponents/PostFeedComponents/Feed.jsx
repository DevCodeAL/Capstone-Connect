import { useState, useEffect } from "react";
import UploadForm from "./UploadForm";
import Post from "./Post";

const NewFeed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/file');
      const data = await response.json();
       console.log(data);
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const HandleClose = () => {
    setIsOpen(!isOpen);
    fetchPosts(); // Refresh posts after upload
  };

  return (
    <>
      {isOpen && <UploadForm HandleUploadModal={HandleClose} />}
      {!isOpen && (
        <>
          <div className="my-2">
            <button
              onClick={() => setIsOpen(true)}
              className="w-full p-2 text-sm font-medium text-gray-600 border border-gray-300 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              Create Post
            </button>
          </div>

          {/* Display List of Posts */}
          {posts.map((post) => (
              <Post key={post._id} post={post} />
          ))}
        </>
      )}
    </>
  );
};

export default NewFeed;
