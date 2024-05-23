import { PencilIcon } from "@heroicons/react/24/solid";
import {
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
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

const TABLE_HEAD = ["Property", "User", "Rating", "Comment", "Date"];

const TABLE_ROWS = [
    {
        img: "https://homeradar.kwst.net/images/all/3.jpg",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46pHfJt4LoTx_o31fc57O7rcxH4pplAKsp77QR-YJug&s",
        User: "Spotify",
        Rating: "2,5",
        date: "Wed 3:00pm",
        Comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    }, {
        img: "https://homeradar.kwst.net/images/all/3.jpg",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46pHfJt4LoTx_o31fc57O7rcxH4pplAKsp77QR-YJug&s",
        User: "Spotify",
        Rating: "2,5",
        date: "Wed 3:00pm",
        Comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
        img: "https://homeradar.kwst.net/images/all/3.jpg",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46pHfJt4LoTx_o31fc57O7rcxH4pplAKsp77QR-YJug&s",
        User: "Spotify",
        Rating: "2,5",
        date: "Wed 3:00pm",
        Comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
        img: "https://homeradar.kwst.net/images/all/3.jpg",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46pHfJt4LoTx_o31fc57O7rcxH4pplAKsp77QR-YJug&s",
        User: "Spotify",
        Rating: "2,5",
        date: "Wed 3:00pm",
        Comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
        img: "https://homeradar.kwst.net/images/all/3.jpg",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46pHfJt4LoTx_o31fc57O7rcxH4pplAKsp77QR-YJug&s",
        User: "Spotify",
        Rating: "2,5",
        date: "Wed 3:00pm",
        Comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
        img: "https://homeradar.kwst.net/images/all/3.jpg",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46pHfJt4LoTx_o31fc57O7rcxH4pplAKsp77QR-YJug&s",
        User: "Spotify",
        Rating: "2,5",
        date: "Wed 3:00pm",
        Comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },


];

export function TransactionsTable() {
    return (
        <Card className="">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 ">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Reviews
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            These are details about the customers reviews

                        </Typography>
                    </div>

                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
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
                                        className="flex justify-center font-bold leading-none opacity-70"
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
                                    profilePic
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4 w-1/4"
                                    : "p-4 border-b border-blue-gray-50 ";

                                return (
                                    <tr key={name}>
                                        <td className={classes} style={{ width: '35%' }}>
                                            <div className="flex items-center gap-4" >
                                                <Avatar src={img} alt={name} style={{ width: '150px', height: '120px' }} />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal mb-4"
                                                    >
                                                        {name}
                                                        Lorem Ipsum is simply dummy text of the printing
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-bold	"
                                                    >
                                                        556 MAD
                                                    </Typography>

                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes} style={{ width: '15%' }}>
                                            <div className="flex items-center " style={{ gap: "10px" }}>
                                                <Avatar
                                                    src={profilePic}
                                                    alt={name}
                                                    size="md"
                                                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                                />
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold"
                                                >
                                                    {User}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes} style={{ width: '10%' }}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-bold flex justify-center"
                                            >
                                                {Rating} ★
                                            </Typography>
                                        </td>

                                        <td className={classes} >
                                            <div className="w-32 max-h-12">

                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {Comment}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes} style={{ width: '10%' }}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {date}
                                            </Typography>
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