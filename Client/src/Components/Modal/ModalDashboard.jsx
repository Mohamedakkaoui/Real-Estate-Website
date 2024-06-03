import React from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

function ModalDashboard({ show, onClose }) {
  return (
    <>
      <Modal show={show} size="5xl" popup onClose={onClose}>
        <Modal.Body>
          <Modal.Header />
          <form>
            <div className="flex space-x-6 items-center ">
              {/* Form */}
              <div className="space-y-6 flex-auto w-60 pt-9">
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white pb-5 text-center">
                  Login
                </h3>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="Email"
                      value="Email"
                      className="font-semibold text-base"
                    />
                  </div>
                  
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="Password"
                      value="Password"
                      className="font-semibold text-base"
                    />
                  </div>
                  
                </div>

                <div className="w-full">
                
                </div>
                
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalDashboard;
