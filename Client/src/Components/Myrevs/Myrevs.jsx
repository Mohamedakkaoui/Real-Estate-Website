import React, { useState, useEffect } from "react";
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
import { Trash } from "lucide-react";
import { DeleteReview } from "../../Api/ReviewsApi";

const TABLE_HEAD = ["Property", "Rating", "Review", "Date", "Actions"];

async function fetchUserReviews() {
  try {
    const response = await getUserReviews();
    const reviews = response.data;
    return reviews;
  } catch (error) {
    console.log("Error fetching user reviews:", error);
  }
}

export function Myrevs() {
  const [tableRows, setTableRows] = useState([]);
  const [curentPage, setCurrentPage] = useState(1);
  const [totalPages, SetTotalPages] = useState(1);
  const [MyReviews, SetMyReviews] = useState([]);
  useEffect(() => {
    async function getTableRows() {
      try {
        const reviews = await fetchUserReviews();
        SetMyReviews(reviews);
      } catch (error) {
        console.error("Error fetching user reviews:", error);
      }
    }

    getTableRows();
  }, []);

  useEffect(() => {
    if (MyReviews.length > 0) {
      const itemsPerPage = 4;
      SetTotalPages(Math.ceil(MyReviews.length / itemsPerPage));
      const startIndex = (curentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setTableRows(MyReviews.slice(startIndex, endIndex));
    }
  }, [MyReviews, curentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const handleDeleteReview = async (id) => {
    try {
      const response = await DeleteReview(id);
      if (response.status == 200) {
        SetMyReviews((prevReviews) =>
          prevReviews.filter((review) => review.Object_id !== id)
        );
      } else {
        console.log("couldnt delete Property");
      }
    } catch (error) {
      console.log(error, error.message);
    }
  };
  return (
    <Card className="">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex justify-center items-center text-center mb-4">
          <div>
            <Typography variant="h4" color="blue-gray">
              Reviews list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See informations about your reviews .
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="bg-[#ffa9202a] p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center text-[#FFA920] leading-none opacity-70"
                    style={{ fontWeight: "bold" }}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map(
              (
                {
                  img,
                  name,
                  email,
                  profilepic,
                  date,
                  comment,
                  property_id,
                  rating,
                  Object_id
                },
                index
              ) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                const firstImageUrl = property_id?.images?.[0]?.url;
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-4">
                        <Avatar
                          src={firstImageUrl}
                          alt={name}
                          style={{ width: "150px", height: "120px" }}
                        />
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
                            {property_id.price} MAD{" "}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold text-center opacity-70"
                        >
                          {rating} <span className="text-[#FFA920] text-lg">★</span>
                        </Typography>
                      </div>
                    </td>
                    <td className={classes} style={{ width: "40%" }}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {comment}{" "}
                        </Typography>
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
                      <Tooltip
                        content="Delete Booking"
                        className="bg-red-300 text-white flex justify-center font-semibold border rounded-lg"
                      >
                        <IconButton variant="text">
                          <Trash
                            className="h-6 w-6 text-red-500"
                            onClick={() => handleDeleteReview(Object_id)}
                          />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <div>
          {[...Array(totalPages)].map((_, index) => (
            <IconButton
              key={index}
              variant={curentPage === index + 1 ? "outlined" : "text"}
              size="sm"
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </IconButton>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            disabled={curentPage == 1}
            onClick={handlePrevPage}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            disabled={curentPage == totalPages}
            onClick={handleNextPage}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
