// import { MagnifyingGlassIcon } from "@heroicons/react/outline/AcademicCapIcon";
// import { PencilIcon, UserPlusIcon } from "@heroicons/react/solid/AcademicCapIcon";
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

const TABLE_HEAD = ["Property", "User", "From", "To", "Booken on", ""];


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


export function BookingsTable() {
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
                        {TABLE_ROWS.map(
                            ({ img, name, email, profilepic, date, }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
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
                                        <td className={classes}>
                                            <div className="flex items-center gap-4">
                                                <Avatar src={profilepic} alt={name} size="8" />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {email}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-center"
                                            >
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-center"
                                            >
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-center"
                                            >
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    {/* <PencilIcon className="h-4 w-4" /> */}
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
