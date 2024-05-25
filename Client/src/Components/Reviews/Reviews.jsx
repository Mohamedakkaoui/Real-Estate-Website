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
import { toast } from "sonner";
import moment from "moment";
import Loading from "../Common/Loading";

const TABLE_HEAD = ["Property", "Rating", "User", "Comment", "Date"];

export function TransactionsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [Reviews, SetReviews] = useState([]);

  const getReviews = async () => {
    try {
      const res = await GetMYlistingReviews();
      if (!res) {
        console.log(res.data.Reviews.date);
        toast.error(res.data.Message);
      }
      SetReviews(res.data.Reviews);
    } catch (error) {
      toast.error("Error occured loading Data");
    }
  };
  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    if (Reviews.length > 0) {
      const itemsPerPage = 4;
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
    <>{!Reviews.length == 0 ? <Card >
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
                className=" border-blue-gray-100 bg-[#ffa9202a] w-1/8 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex justify-center font-bold leading-none text-[#FFA920] opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 &&
            currentItems.map((review, index) => {
              const isLast = index === currentItems.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <div className="flex items-center gap-4">
                      <Avatar
                        src={review.property_id.images[0]}
                        alt=""
                        size="md"
                        style={{ width: "150px", height: "120px" }}
                      />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-semibold text-xl mb-4 text-[#FFA920]"
                        >
                          {!review.owner
                            ? "Property"
                            : review.property_id.title}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {review.property_id.price} MAD
                        </Typography>
                      </div>
                    </div>
                  </td>

                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold text-center text-lg opacity-70"
                      >
                        {review.rating} <span className="text-[#FFA920]">★</span>
                      </Typography>
                    </div>
                  </td>

                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {!review.owner ? "User" : review.owner.Username}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {review.comment}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {moment(review.date).format("MMMM Do YYYY")}
                    </Typography>
                  </td>
                </tr>
              );
            })}
        </tbody>
        
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
  </Card>  : <div className="flex items-center justify-center h-screen"><Loading  /></div> }</>
  );
}