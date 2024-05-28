import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { getAllBookings } from '../../Api/Authapi';

const TABLE_HEAD = ["Property", "User", "Status", "From", "To", "Total Price", "Booken on", ""];


async function fetchBookings() {
    try {
        const response = await getAllBookings();
        const bookings = response.data;
        return bookings
    } catch (error) {
        console.log('Error fetching users bookings:', error);
    }
}


export function BookingsTable() {
    const defaultImage = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
    const [tableRows, setTableRows] = useState([]);

    useEffect(() => {
        async function getTableRows() {
            try {
                const bookings = await fetchBookings();
                console.log(bookings);
                setTableRows(bookings);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        }

        getTableRows();
    }, []);
    return (
        <Card className="h-full w-full">
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
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-gray-200 p-4"

                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-center leading-none opacity-70"
                                        style={{ fontWeight: 'bold' }}
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows.map(
                            ({ user, createdAt, endDate, listing, startDate, status, totalPrice }, index) => {
                                const isLast = index === tableRows.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-4" >
                                                <Avatar src={listing.images[0].url} alt={name} style={{ width: '150px', height: '120px' }} />
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
                                                        className="font-bold	"
                                                    >
                                                        {listing.price} MAD
                                                    </Typography>

                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center gap-4">
                                                <Avatar src={user.ProfilePic} alt={name} size="8" />
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
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={status === 'confirmed' ? "confirmed" : "unconfirmed"}
                                                    color={status === 'confirmed' ? "green" : "red"}
                                                />
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
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>


    )
}
