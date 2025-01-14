"use client";
import { Button, Modal } from "flowbite-react";

export function MainOptionModal({openModal, closeMainModal, deleteAlert, editOpen}) {

  return (
    <>
    <Modal
        show={openModal}
        onClose={closeMainModal}
        className="flex justify-center shadow-md bg-black w-screen">
        <div className="fixed inset-0 flex items-center justify-center animate-fade-right">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md">
            <Modal.Header className="text-base p-3">Option Post</Modal.Header>
            <Modal.Body>

            <div className="flex flex-col space-y-2">
            <Button onClick={editOpen}  className="text-base leading-relaxed focus:ring-0 border-0 border-b-2 rounded-none text-gray-600 hover:text-gray-800 font-bold">
              Edit Post
              </Button>

                <Button className="text-base leading-relaxed focus:ring-0 border-0 border-b-2 rounded-none  text-gray-600 hover:text-gray-800 font-bold">
                  Edit Privacy
                  </Button>

                <Button onClick={deleteAlert} className="text-base leading-relaxed focus:ring-0 border-0 border-b-2 rounded-none text-gray-600 hover:text-gray-800 font-bold">
                  Delete Post
                  </Button>
            </div>
            </Modal.Body>
        </div>
        </div>
    </Modal>
    </>
  );
}
