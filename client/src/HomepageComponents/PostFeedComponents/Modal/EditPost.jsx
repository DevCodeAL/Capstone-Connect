
import { Modal } from "flowbite-react";
import { useState } from "react";

export function EditPost({editOpen, editClose}) {
  const [formData, setFormData] = useState({
    title: "",
    file: null,
    repositoryURL: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("file", formData.file);
    data.append("repositoryURL", formData.repositoryURL);

    try {
      const response = await fetch("http://localhost:5000/api/stats", {
        method: "POST",
        body: data,
      });

      if (!response.ok) throw new Error("File upload failed");

      alert("File uploaded successfully!");
      HandleUploadModal();
    } catch (error) {
      alert(error.message);
    }
}
  return (
    <>
      <Modal show={editOpen} onClose={editClose}  className="flex justify-center shadow-md bg-black w-screen">
      <div className={`fixed inset-0 flex items-center justify-center animate-fade-right`}>
      <div className="bg-white rounded-lg shadow-md w-full max-w-md">
        <Modal.Header>Edit Post</Modal.Header>
        <Modal.Body>
               <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
                 <div>
                   <label className="block text-sm font-medium">
                     Discription
                     <span className="text-xs text-gray-700 mb-2 block">Be specific and imagine you’re asking a question to another person.</span>
                   </label>
                   <input
                     type="text"
                     name="title"
                     value={formData.title}
                     onChange={handleInputChange}
                     className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                     required
                   />
                 </div>
         
                 <div>
                   <label className="block text-sm font-medium mb-2">
                     Choose File
                     <span className="text-xs text-gray-700 mb-2 block">Only image/jpeg,. png*,video/mp4*,document/pdf,.doc,.docx to be uploaded </span>
                     </label>
                   <input
                     type="file"
                     name="file"
                     accept="image/*,video/*,.pdf,.doc,.docx"
                     onChange={handleFileChange}
                     className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                   />
                 </div>
         
                 <div>
                   <label className="block text-sm font-medium mb-2">
                     Repository URL
                   </label>
                   <span className="text-xs font-medium text-gray-700">
                       Provide the full URL of your GitHub repository (e.g., https://github.com/username/repository-name).
                     </span>
                   <input
                     type="url"
                     name="repositoryURL"
                     value={formData.repositoryURL}
                     onChange={handleInputChange}
                     className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     placeholder="https://github.com/username/repository-name"
                   />
                 </div>
         
                 <button
                   type="submit"
                   className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                 >
                   Upload
                 </button>
               </form>
        </Modal.Body>
        </div>
        </div>
      </Modal>
    </>
  );
}
