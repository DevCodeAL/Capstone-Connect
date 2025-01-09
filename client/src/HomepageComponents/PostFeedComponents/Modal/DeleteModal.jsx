"use client";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function DeleteModal({ModalAlert, closeModalAlert, saveData, cancelData}) {

  return (
    <>
      <Modal show={ModalAlert} size="md" className="animate-shake" onClose={closeModalAlert} popup>
      <div className="fixed inset-0 flex items-center justify-center animate-fade-right">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md">
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this post?
            </h3>
            <div className="flex justify-center gap-4">
              <Button className="bg-red-600 hover:bg-red-700" onClick={saveData}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={cancelData}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
        </div>
        </div>
      </Modal>
    </>
  );
}
