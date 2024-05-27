// import { PencilIcon } from "@heroicons/react/24/solid";
// import {
//     ArrowDownTrayIcon,
//     MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";

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
    Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Date", "Rating", "Comment", ""];

const TABLE_ROWS = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46pHfJt4LoTx_o31fc57O7rcxH4pplAKsp77QR-YJug&s",
        User: "Spotify",
        Rating: "2,5",
        date: "Wed 3:00pm",
        Comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46pHfJt4LoTx_o31fc57O7rcxH4pplAKsp77QR-YJug&s",
        User: "Spotify",
        Rating: "2,5",
        date: "Wed 3:00pm",
        Comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
        img: "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
        User: "other",
        Rating: "4,5",
        date: "Wed 3:00pm",
        Comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
        img: "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
        User: "other",
        Rating: "4,5",
        date: "Wed 3:00pm",
        Comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
];

export function Myrevs() {
    return (
        <Card className="">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 ">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            My Reviews
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            These are details about your shared reviews
                        </Typography>
                    </div>

                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-gray-200  w-1/8 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex justify-center font-normal leading-none opacity-70"
                                        style={{ fontWeight: 'bold' }}

                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            (
                                {
                                    img,
                                    User,
                                    Rating,
                                    date,
                                    Comment,
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4 w-1/4"
                                    : "p-4 border-b border-blue-gray-50 ";

                                return (
                                    <tr >
                                        <td className={classes} style={{ width: '10%' }}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-center"
                                            >
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={classes} style={{ width: '10%' }}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal flex justify-center"
                                            >
                                                {Rating}
                                            </Typography>
                                        </td>

                                        <td className={classes} >
                                            <div className="">

                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {Comment}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes} style={{width : "5%"}}>
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
                <Button variant="outlined" size="sm">
                    Previous
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton variant="outlined" size="sm">
                        1
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        2
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        3
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        ...
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        8
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        9
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        10
                    </IconButton>
                </div>
                <Button variant="outlined" size="sm">
                    Next
                </Button>
            </CardFooter>
        </Card>
    );
}