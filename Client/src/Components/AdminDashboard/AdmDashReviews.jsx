import React, { useState, useEffect } from 'react';
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { getAllReviews } from "../../Api/Authapi";



const TABLE_HEAD = ["Property", "User", "Rating", "Review", "Date", ""];


const TABLE_ROWS = [
    {
        img: "https://homeradar.kwst.net/images/all/3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        profilepic: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        rating: "4.0",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "23/04/18",
    },
    {
        img: "https://homeradar.kwst.net/images/all/3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        profilepic: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        rating: "4.0",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "23/04/18",
    }, {
        img: "https://homeradar.kwst.net/images/all/3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        profilepic: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        rating: "4.0",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "23/04/18",
    }, {
        img: "https://homeradar.kwst.net/images/all/3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        profilepic: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        rating: "4.0",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "23/04/18",
    }, {
        img: "https://homeradar.kwst.net/images/all/3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        profilepic: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        rating: "4.0",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "23/04/18",
    }]

async function fetchReviews() {
    try {
        const response = await getAllReviews();
        const reviews = response.data;
        return reviews
    } catch (error) {
        console.log('Error fetching user reviews:', error);
    }
}


export function ReviewsTable() {
    const defaultImage = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
    const defaultAvatar = 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=ais_user'

    const [tableRows, setTableRows] = useState([]);

    useEffect(() => {
        async function getTableRows() {
            try {
                const reviews = await fetchReviews();
                setTableRows(reviews);
            } catch (error) {
                console.error('Error fetching reviews:', error);
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
                            Reviews list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all reviews by users.
                        </Typography>
                    </div>

                </div>

            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full  table-auto text-left">
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
                            ({ comment, owner, property_id, date, rating }, index) => {
                                const imageUrl = property_id?.images?.[0]?.url || defaultImage;
                                const isLast = index === tableRows.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-4" >
                                                <Avatar src={imageUrl} alt={property_id.title} style={{ width: '150px', height: '120px' }} />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal mb-4"
                                                    >
                                                        {property_id.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-bold	"
                                                    >
                                                        {property_id.price} MAD
                                                    </Typography>

                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center gap-4">
                                                <Avatar src={owner.ProfilePic ? owner.ProfilePic : defaultAvatar} alt={name} size="8" />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {owner.FirstName} {owner.LastName}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {owner.Email}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes} >
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-center opacity-70"
                                                >
                                                    {rating}
                                                </Typography>

                                            </div>
                                        </td>
                                        <td className={classes} style={{ width: "30%" }}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal opacity-70"
                                                >
                                                    {comment}</Typography>

                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-center"
                                            >
                                                {new Date(date).toLocaleDateString()}
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
