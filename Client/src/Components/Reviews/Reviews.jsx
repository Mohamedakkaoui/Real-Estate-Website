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
import { useEffect, useState } from "react";
import { GetMYlistingReviews } from "../../Api/ReviewsApi";
import Image from "../../assets/yassine.png";
import { toast } from "sonner";

const TABLE_HEAD = ["User", "Rating", "Date", "Comment"];

export function TransactionsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [Reviews, SetReviews] = useState([]);

  const getReviews = async () => {
    try {
      const res = await GetMYlistingReviews();
      if (!res) {
        console.log(res.data.Message);
        toast.error(res.data.Message);
      }
      SetReviews(res.data.Reviews);
    } catch (error) {
      console.log(error.response);
      toast.error("Error occured loading Data");
    }
  };
  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    if (Reviews.length > 0) {
      const itemsPerPage = 5;
      setTotalPages(Math.ceil(Reviews.length / itemsPerPage));
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCurrentItems(Reviews.slice(startIndex, endIndex));
    }
  }, [Reviews, currentPage]);

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
            {currentItems.length > 0 &&
              currentItems.map(({ rating, date, comment }, index) => (
                <tr key={index}>
                  <td className="p-4 w-1/4" style={{ width: "20%" }}>
                    <div className="flex items-center" style={{ gap: "10px" }}>
                      <Avatar
                        src={Image}
                        alt=""
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold ml-5"
                      >
                        Yassine liassaoui
                      </Typography>
                    </div>
                  </td>
                  <td className="p-4 w-1/4" style={{ width: "5%" }}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold flex justify-center"
                    >
                      {rating}
                    </Typography>
                  </td>
                  <td className="p-4 w-1/4" style={{ width: "10%" }}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className="p-4" style={{ width: "40%" }}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {comment}
                    </Typography>
                  </td>
                </tr>
              ))}
          </tbody>
          {Reviews.length === 0 && <p>Loading reviews...</p>}
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button
          variant="outlined"
          size="sm"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
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
        <Button
          variant="outlined"
          size="sm"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
