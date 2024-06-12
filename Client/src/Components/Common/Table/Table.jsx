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
  getKeyValue,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { GetMyBookings, GetMyBookingsDet } from "../../../Api/BookingApi";

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

export default function TableDash() {
  const [Bookings, SetBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const resMyBookings = await GetMyBookingsDet();
        const Bookings = resMyBookings.data.MyBookings;
        SetBookings(Bookings);
      } catch (error) {
        console.log(error);
      }
    };
    getBookings();
  }, []);
  const renderCell = React.useCallback((booking, columnKey) => {
    const cellValue = booking[columnKey];

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };


    switch (columnKey) {
      case "listing":
        return (
          <User
            avatarProps={{ radius: "lg", src: booking.listing.images[0]?.url }}
            description={booking.listing.price}
            name={booking.listing.title}
          />
        );
      case "totalPrice":
        return (
          <div className="flex flex-col">
            {/* <p className="text-bold text-sm capitalize">{cellValue}</p> */}
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
            {cellValue}
          </Chip>
        );
      case "startDate":
        return (
          <div className="flex flex-col">
            {/* <p className="text-bold text-sm capitalize">{cellValue}</p> */}
            <p className="text-bold text-sm capitalize text-default-400">
              {formatDate(booking.startDate)}
            </p>
          </div>
        );
      case "endDate":
        return (
          <div className="flex flex-col">
            {/* <p className="text-bold text-sm capitalize">{cellValue}</p> */}
            <p className="text-bold text-sm capitalize text-default-400">
              {formatDate(booking.endDate)}
            </p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit ">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete ">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div>
      {Bookings.length === 0 ? (
        <div>No bookings available</div>
      ) : (
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
          <TableBody items={Bookings}>
            {(item) => (
              <TableRow key={item._id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );

}