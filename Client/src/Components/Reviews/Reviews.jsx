import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";

const TABLE_HEAD = ["Property", "User", "Rating", "Comment", "Date"];

const TABLE_ROWS = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46pHfJt4LoTx_o31fc57O7rcxH4pplAKsp77QR-YJug&s",
    User: "Spotify",
    Rating: "2,5",
    date: "Wed 3:00pm",
    Comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46pHfJt4LoTx_o31fc57O7rcxH4pplAKsp77QR-YJug&s",
    User: "Spotify",
    Rating: "2,5",
    date: "Wed 3:00pm",
    Comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    img: "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
    User: "other",
    Rating: "4,5",
    date: "Wed 3:00pm",
    Comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    img: "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
    User: "other",
    Rating: "4,5",
    date: "Wed 3:00pm",
    Comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    img: "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
    User: "other",
    Rating: "4,5",
    date: "Wed 3:00pm",
    Comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    img: "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
    User: "other",
    Rating: "4,5",
    date: "Wed 3:00pm",
    Comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    img: "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
    User: "other",
    Rating: "4,5",
    date: "Wed 3:00pm",
    Comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  }
];

export function TransactionsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const totalPages = Math.ceil(TABLE_ROWS.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = TABLE_ROWS.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-gray-200 w-1/8 p-4"
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
            {currentItems.map(({ img, User, Rating, date, Comment }, index) => (
              <tr key={index}>
                <td className="p-4 w-1/4" style={{ width: '10%' }}>
                  <div className="flex items-center" style={{ gap: "10px" }}>
                    <Avatar
                      src={img}
                      alt={User}
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
                <td className="p-4 w-1/4" style={{ width: '10%' }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold flex justify-center"
                  >
                    {Rating}
                  </Typography>
                </td>
                <td className="p-4 w-1/4" style={{ width: '10%' }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center"
                  >
                    {date}
                  </Typography>
                </td>
                <td className="p-4" style={{width : "60%"}}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Comment}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm" onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <div className="flex items-center gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <IconButton
              key={index}
              variant={currentPage === index + 1 ? "outlined" : "text"}
              size="sm"
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </IconButton>
          ))}
        </div>
        <Button variant="outlined" size="sm" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}