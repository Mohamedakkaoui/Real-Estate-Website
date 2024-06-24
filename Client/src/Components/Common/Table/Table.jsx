import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  Pagination,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { CancelBooking, GetMyBookingsDet } from "../../../Api/BookingApi";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const statusColorMap = {
  confirmed: "success",
  cancelled: "danger",
  pending: "warning",
};

const columns = [
  { name: "LISTING", uid: "listing" },
  { name: "TOTALPRICE", uid: "totalPrice" },
  { name: "STATUS", uid: "status" },
  { name: "STARTDATE", uid: "startDate" },
  { name: "ENDDATE", uid: "endDate" },
  { name: "ACTIONS", uid: "actions" },
];

const TableDash = () => {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [Canceled, SetCanceled] = useState(false);

  const itemsPerPage = 4
  
  const getBookings = async () => {
    try {
      const resMyBookings = await GetMyBookingsDet();
      const bookings = resMyBookings.data.MyBookings;
      setBookings(bookings);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookings();
  }, [bookings]);

  const handlebookingCancel = async (id) => {
    try {
      const response = await CancelBooking(id);
      if (Response.status == 200) {
        toast.success(response.data.message);
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking._id === id ? { ...booking, status: "cancelled" } : booking
          )
        );
        SetCanceled(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      SetCanceled(true);
      toast.error(error.response.data.message);
      console.log("Error cancelling booking:", error);
    }
  };

  const renderCell = React.useCallback((booking, columnKey) => {
    const cellValue = booking[columnKey];
    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    switch (columnKey) {
      case "listing":
        return (
          <Link to={`/PropertyDetails/${booking.listing.Object_id}`}>
            <User
              avatarProps={{
                radius: "lg",
                src: booking.listing.images[0]?.url,
              }}
              description={`${booking.listing.price}/Night`}
              name={booking.listing.title}
            />
          </Link>
        );
      case "totalPrice":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-400">
              {booking.totalPrice} MAD
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[booking.status]}
            size="sm"
            variant="flat"
          >
            {booking.status}
          </Chip>
        );
      case "startDate":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-400">
              {formatDate(booking.startDate)}
            </p>
          </div>
        );
      case "endDate":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-400">
              {formatDate(booking.endDate)}
            </p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit ">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Cancel">
              <span
                onClick={() => handlebookingCancel(booking._id)}
                className="text-lg text-danger cursor-pointer active:opacity-50"
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentBookings = bookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="table-container">
      {bookings.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <Loading />
        </div>
      ) : (
        <>
          <Table aria-label="Example table with custom cells">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  align={column.uid === "actions" ? "center" : "start"}
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={currentBookings}>
              {(item) => (
                <TableRow key={item._id}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="pagination-container">
            <Pagination
              total={Math.ceil(bookings.length / itemsPerPage)}
              initialPage={1}
              onChange={(page) => handlePageChange(page)}
            />
          </div>
        </>
      )}
      <Toaster
        position="top-center"
        toastOptions={{
          classNames: {
            toast: `${Canceled ? "bg-red-400" : "bg-green-400"}`,
            title: "text-white",
          },
        }}
      />
    </div>
  );
};

export default TableDash;
