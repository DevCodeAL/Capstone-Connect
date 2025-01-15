import { useEffect, useState, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Tooltip } from "flowbite-react";
import { DeleteModal } from "./Modal/DeleteModal";
import { MainOptionModal } from "./Modal/MainOptionModal";
import { EditPost } from "./Modal/EditPost";
import { WebViewerModal } from "./WebViewer";
import { getHeartReact } from "../../services/itemServices";
import { useAuth } from "../../AutContext";

const Post = ({ post }) => {
  const {title, repositoryURL, files, uploadDate, filename, userPicture, userName } = post;
  const [isUser, setIsUser] = useState({ googleId: "" });
  const [showComment, setShowComment] = useState(false);
  const [isHeartCount, setIsHeartCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [alertModal, setAlert] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [webOpen, setWebOpen] = useState(false);
  const [isPlay, setPlay] = useState(false);
  const { user } = useAuth();

// users aunthenticate
const userID = user?.userId;
// const currentUserPicture = user?.userPicture;
// const currentUserName = user?.userName;
  useEffect(()=>{
    setIsUser((prev) => ({
      ...prev, googleId: userID || '' 
    }));
  }, [userID]);
 
  const currentRef = useRef(null);

  const renderPost = () => {
    const fileUrl = `http://localhost:5000/${files?.metadata?.path}`;

    useEffect(()=>{
      if (!currentRef.current) return;

      const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=> {
            if(entry.isIntersecting){
              currentRef.current.play();
                setPlay(true);
            } else {
              currentRef.current.pause();
                 setPlay(false);
            }
        })
      }, {
        threshold: 1.0, // adjust the viewport scope 
      }
    )
  
    if(currentRef.current){
      observer.observe(currentRef.current)
    };
    
  // Cleanup 
    return ()=> {
      if(currentRef.current){
        observer.unobserve(currentRef.current)
      };
    }
  
    },[]);
  

  if (!files || !files.metadata) {
    return  <div>
    <div className="text-slate-950 text-lg">
     <h1>{title}</h1>
    </div>

     <div>    
      <a
       href={repositoryURL}
       target="_blank"
       className="text-blue-500 underline"
     >
     {repositoryURL}
     </a>
     </div>

        <div>
            <iframe src={repositoryURL} className="flex justify-center w-full h-screen rounded-lg"></iframe>
          </div>
      </div> 
  }

    if (files.fileType === "image") {
      return (
        <>
         <div>
           <div className="text-slate-950 text-lg">
            <h1>{title}</h1>
           </div>

            <div>    
                <a
              href={repositoryURL}
              target="_blank"
              className="text-blue-500 underline"
            >
            {repositoryURL}
            </a>
            </div>
         </div>

        <img
          src={fileUrl}
          alt={filename}
          className="flex justify-center w-full rounded-lg"
        />
        </>
      );
    } else if (files.fileType === "video") {
      return (
       <>
        <div>
          <div className="text-slate-950 text-lg">
           <h1>{title}</h1>
          </div>
          <div>
              <a
            href={repositoryURL}
            target="_blank"
            className="text-blue-500 underline"
          >
          {repositoryURL}
          </a>
          </div>
        </div>

        <video
         ref={currentRef}
          src={fileUrl}
          controls
          className="flex justify-center w-full rounded-lg"
        >
          Your browser does not support the video tag.
        </video>
       
       </>
      );
    } else if (files.fileType === "pdf" || files.fileType === "docx" || files.fileType === 'pptx' || files.fileType === 'ppt') {
      return (
       <>
      <div>
          <div className="text-slate-950 text-lg">
           <h1>{title}</h1>
          </div>
          <div>
            <Button className="border border-white focus:ring-0" onClick={()=> setWebOpen(true)}>
               <span className="text-blue-500 underline hover:text-blue-700">{files.filename}</span>
            </Button>
          </div>

          {/* Web Viewer Modal */}
          <div>
          <WebViewerModal fileUrl={fileUrl}
            FileName={files.filename}
            WebViewerOpen={webOpen} 
            WebViewerClose={()=> setWebOpen(!true)}/>
          </div>
        </div>
       </>
      );
    }

    return null;
  };

  const handleFeedbackToggle = () => {
    setShowComment((prev) => !prev);
  };

  // Handle Submit for User Heart Reactions 
  async function HandleClickHeart() {
    
    try {
        const response = await getHeartReact(isHeartCount, isUser);
        if (response) {
            setIsHeartCount(isHeartCount + 1);
            console.log(response.message);
        }
    } catch (error) {
        console.error("Failed to handle heart click:", error.message);
    }
}



  return (
    <div className="max-w-2xl h-auto border rounded-lg p-3 mb-4 bg-white shadow-md relative">

      {/* Option button */}
      <Tooltip content="Option Post" placement="bottom" className="absolute translate-y-11 translate-x-72 left-0 bg-slate-800">
        <Button onClick={() => setOpenModal(true)} className="absolute top-2 right-5 focus:ring-0 hover:animate-pulse transition-transform ease-in-out delay-75 hover:-translate-y-0 hover:scale-110 duration-300">
          <img src="/png/option-dots.png" className="w-9" alt="Options"/>
        </Button>
      </Tooltip>
     
      {/* Main Modal Option */}
      <MainOptionModal 
        openModal={openModal}
        closeMainModal={()=> setOpenModal(!true)}
        deleteAlert={()=> setAlert(true)}
        editOpen={()=> setEditPost(true)}
        />

        {/* Edit Post */}
        <EditPost editOpen={editPost} editClose={()=> setEditPost(!true)}/>

         {/*Delete Modal  */}
          <DeleteModal ModalAlert={alertModal} 
          closeModalAlert={()=> setAlert(!true)}
          saveData={()=> {
            setAlert(true);
            alert('Save!');
            setAlert(!true);
          }} 
          cancelData={()=> setAlert(!true)}
          />
  
      {/* Profile Picture */}
      <div className="relative inline-block">
        <Link to="/myprofile">
          <img
            className="rounded-full w-12 h-12 object-cover border-2 border-gray-200"
            src={userPicture}
            alt={`${userName}'s Profile`}
          />
        </Link>

        <Link to="/myprofile">
          <span className="absolute top-2 left-14 font-semibold text-nowrap underline">
            {userName?.toUpperCase()}
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
          
          {/* Heart Reactions */}
      <div className="flex justify-evenly mt-4">
      <button
          onClick={HandleClickHeart}
          className="like-button bg-blue-500 text-white px-3 py-1 rounded mr-2"
        >
          <div className="flex justify-evenly items-center gap-2">
            <FaHeart />
            <span>{`Heart ${isHeartCount}`}</span>
          </div>
        </button>

          {/* Feedback */}
        <button
          onClick={handleFeedbackToggle}
          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
        >
          <div className="flex justify-evenly items-center gap-2">
            <MdFeedback />
            <span>Feedback</span>
          </div>
        </button>

          {/* Request to connect */}
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

          {/* Feedback */}
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



