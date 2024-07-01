import React from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { ConfirmBooking } from "../../Api/BookingApi";
import { toast, Toaster } from "sonner"

function ModalDashboard({ show, onClose, BookingDetails }) {



  const HandleConfirmBooking = async (id) => {
    try {
      const response= await ConfirmBooking(id)
      console.log(response)
      if (response.status == 202) {
        toast.success(response.data.Message, {
          style: { backgroundColor: "#76C776", color: "white" },
        })
      }else {
        toast.error(response.data.Message, {
          style: { backgroundColor: "#FF7F7F", color: "white" },
        })
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.Message, {
        style: { backgroundColor: "#FF7F7F", color: "white" },
      })
    }
  }
  return (
    <>
      <Modal show={show} size="5xl" popup onClose={onClose} className="bg-white">
        <div className="grid grid-cols-5">
          <div className="col-span-3 bg-cover bg-center flex-auto relative">
            <img
              src={BookingDetails.listing.images[0].url}
              alt={BookingDetails.listing.title}
              className="w-full h-full rounded-l-lg object-cover"
            />
          </div>
          <div className="col-span-2 h-full">
            <Modal.Body className="rounded-r-lg bg-[#3e2622] h-full w-full">
              <Modal.Header />
              <div className="flex flex-col space-x-6 items-center ">
                <div className="flex-auto w-[95%] mx-auto">
                  <h3 className="text-white text-3xl font-semibold dark:text-white mb-5">
                    <div className="pt-3">{BookingDetails.listing.title}</div>
                    <div className="text-lg font-md text-[#847a78] w-[50%]">
                      {" "}
                      {BookingDetails.listing.location}
                    </div>
                  </h3>
                </div>
                <div className="flex flex-col text-white w-full mb-2">
                  <div className="text-lg font-md text-[#847a78]">
                    Startdate
                  </div>
                  <div className="text-xl font-semibold text-white">
                    {new Date(BookingDetails.startDate).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex flex-col text-white w-full m-5">
                  <div className="text-lg font-md text-[#847a78]">Enddate</div>
                  <div className="text-xl font-semibold text-white">
                  {new Date(BookingDetails.endDate).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex flex-col text-white w-full ">
                  <div className="text-lg font-md text-[#847a78]">Customer</div>
                  <div className="text-xl font-semibold text-white">
                  {BookingDetails.user.FirstName && BookingDetails.user.LastName ? `${BookingDetails.user.FirstName} ${BookingDetails.user.LastName}` : BookingDetails.user.Email}
                  </div>
                </div>
                <div className="text-white w-full mx-auto mt-7">
                  <button  onClick={() => HandleConfirmBooking(BookingDetails._id)}
                  className="w-[90%] bg-[#301d19] px-5 py-3 rounded-lg">
                    Confirm Booking
                  </button>
                </div>
              </div>
            </Modal.Body>
          </div>
        </div>
      </Modal>
      <Toaster position="top-center" />
    </>
  );
}

export default ModalDashboard;
