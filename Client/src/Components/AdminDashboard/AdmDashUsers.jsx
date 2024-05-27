import React, { useState, useEffect } from 'react';
import { PencilIcon } from "@heroicons/react/24/solid";
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
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { getAllUsers } from "../../Api/Authapi";

const TABLE_HEAD = ["Member", "Contact", "Status", "joined", ""];


async function fetchUsers() {
    try {
        const response = await getAllUsers();
        const users = response.data;
        console.log(users);
        return users
    } catch (error) {
        console.log('Error fetching users:', error);
    }
}


export function MembersTable() {
    const defaultAvatar = 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=ais_user'
    const [tableRows, setTableRows] = useState([]);

    useEffect(() => {
        async function getTableRows() {
            try {
                const users = await fetchUsers();
                setTableRows(users);
            } catch (error) {
                console.error('Error fetching user reviews:', error);
            }
        }

        getTableRows();
    }, []);
    return (
        <>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="flex justify-center items-center text-center mb-4">
                        <div>
                            <Typography variant="h4" color="blue-gray">
                                Members list
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                See informations about all members
                            </Typography>
                        </div>

                    </div>

                </CardHeader>
                <CardBody className="overflow-scroll mx-2 px-0">
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
                                ({ FirstName, LastName, Username, Email, PhoneNumber, ProfilePic, isActive }, index) => {
                                    const isLast = index === tableRows.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={name} >
                                            <td className={classes}>
                                                <div className="flex items-center gap-4">
                                                    <Avatar src={ProfilePic ? ProfilePic : defaultAvatar} alt={name} size="8" />
                                                    <div className="flex flex-col">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {FirstName} {LastName}
                                                        </Typography>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            @{Username}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex flex-col gap-2">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="flex align-center gap-2 font-bold opacity-70"
                                                    >
                                                        <MdOutlineEmail size={18} />
                                                        {Email}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="flex font-bold gap-2 opacity-70"
                                                    >
                                                        <MdOutlinePhone size={18} />

                                                        +212{PhoneNumber}
                                                    </Typography>

                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="mx-auto w-max">
                                                    <Chip
                                                        variant="ghost"
                                                        size="sm"
                                                        value={isActive ? "Active" : "Inactive"}
                                                        color={isActive ? "green" : "red"}
                                                    />
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-center"
                                                >
                                                    date
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Tooltip >
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
        </>
    );
}
