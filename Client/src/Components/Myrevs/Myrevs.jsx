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
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { getUserReviews } from "../../Api/Authapi";


const TABLE_HEAD = ["Property", "Rating", "Review", "Date", ""];

async function fetchUserReviews() {
    try {
        const response = await getUserReviews();
        const reviews = response.data;
        return reviews
    } catch (error) {
        console.log('Error fetching user reviews:', error);
    }
}


export function Myrevs() {
    const [tableRows, setTableRows] = useState([]);

    useEffect(() => {
        async function getTableRows() {
            try {
                const reviews = await fetchUserReviews();
                setTableRows(reviews);
            } catch (error) {
                console.error('Error fetching user reviews:', error);
            }
        }

        getTableRows();
    }, []);
    return (

        <Card className="">
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
                <table className="w-full table-auto text-left">
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
                            ({ img, name, email, profilepic, date, comment, property_id, rating }, index) => {
                                const isLast = index === tableRows.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";
                                const firstImageUrl = property_id?.images?.[0]?.url;
                                return (
                                    <tr >
                                        <td className={classes} style={{ width: '10%' }}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-center"
                                            >
                                                {new Date(date).toLocaleDateString()}
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
