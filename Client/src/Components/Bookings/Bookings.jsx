import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { DeleteBooking, MyListingsBokings } from "../../Api/BookingApi";
import { Dot, Trash } from "lucide-react";

const TABLE_HEAD = [
  "Property",
  "User",
  "Status",
  "From",
  "To",
  "Total Price",
  "Booked on",
  "Actions",
];

async function fetchBookings() {
  try {
    const response = await MyListingsBokings();
    console.log(response);
    const bookings = response.data.MyBookings;
    return bookings;
  } catch (error) {
    console.log("Error fetching users bookings:", error);
    return [];
  }
}

export function Bookings() {
  const defaultImage =
    "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
  const [tableRows, setTableRows] = useState([]);
  const [curentPage, setCurrentPage] = useState(1);
  const [totalPages, SetTotalPages] = useState(1);
  const [Bookings, SetBookings] = useState([]);

  useEffect(() => {
    async function getTableRows() {
      try {
        const bookings = await fetchBookings();
        SetBookings(bookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    }

    getTableRows();
  }, []);

  useEffect(() => {
    if (Bookings.length > 0) {
      const itemsPerPage = 4;
      SetTotalPages(Math.ceil(Bookings.length / itemsPerPage));
      const startIndex = (curentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setTableRows(Bookings.slice(startIndex, endIndex));
    }
  }, [Bookings, curentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBooking = async (id) => {
    try {
      const response = await DeleteBooking(id);
      if (response.status == 200) {
        SetBookings((prevBookings) =>
          prevBookings.filter((Booking) => Booking._id !== id)
        );
      } else {
        console.log("couldnt delete Property");
      }
    } catch (error) {
      console.log(error, error.message);
    }
  };
  return (
    <Card className="h-screen">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex justify-center items-center text-center mb-4">
          <div>
            <Typography variant="h4" color="blue-gray">
              Bookings list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all the Bookings made by users.
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="bg-[#ffa9202a] p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center text-[#FFA920] leading-none opacity-70"
                    style={{ fontWeight: "bold" }}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.length === 0 ? (
              <tr>
                <td colSpan={TABLE_HEAD.length} className="p-4 text-center">
                  <Typography color="gray" className="mt-1 font-normal">
                    No bookings yet.
                  </Typography>
                </td>
              </tr>
            ) : (
              tableRows.map(
                ({
                  user,
                  createdAt,
                  endDate,
                  listing,
                  startDate,
                  status,
                  totalPrice,
                  _id,
                }) => {
                  const classes = "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <div className="flex items-center gap-4">
                          <Avatar
                            src={listing.images[0].url}
                            alt={listing.title}
                            style={{ width: "150px", height: "120px" }}
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal mb-4"
                            >
                              {listing.title}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {listing.price} MAD
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-4">
                          <Avatar
                            src={user.ProfilePic}
                            alt={`${user.FirstName} ${user.LastName}`}
                            size="8"
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {user.FirstName} {user.LastName}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {user.Email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="mx-auto w-max">
                          <div className="flex">
                            <Dot
                              className={`${
                                status === "confirmed"
                                  ? "text-green-400"
                                  : status === "pending"
                                  ? "text-yellow-400"
                                  : "text-red-500"
                              } size-8`}
                            />
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={
                                status === "confirmed"
                                  ? "confirmed"
                                  : status === "pending"
                                  ? "pending"
                                  : "cancelled"
                              }
                              className={`${
                                status === "confirmed"
                                  ? "text-green-400"
                                  : status === "pending"
                                  ? "text-yellow-400"
                                  : "text-red-500"
                              } pl-0`}
                            />
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {new Date(startDate).toLocaleDateString()}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {new Date(endDate).toLocaleDateString()}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {totalPrice}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {new Date(createdAt).toLocaleDateString()}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip
                          content="Delete Booking"
                          className="bg-red-300 text-white font-semibold border rounded-lg"
                        >
                          <IconButton variant="text">
                            <Trash
                              className="h-6 w-6 text-red-500 ml-5"
                              onClick={() => handleBooking(_id)}
                            />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <div>
          {[...Array(totalPages)].map((_, index) => (
            <IconButton
              key={index}
              variant={curentPage === index + 1 ? "outlined" : "text"}
              size="sm"
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </IconButton>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            disabled={curentPage == 1}
            onClick={handlePrevPage}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            disabled={curentPage == totalPages}
            onClick={handleNextPage}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
