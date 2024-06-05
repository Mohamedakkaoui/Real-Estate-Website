
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
import { getAllReviews } from "../../Api/Authapi";
import { Trash } from "lucide-react";
import { DeleteReviewForAdmin } from "../../Api/ReviewsApi";

const TABLE_HEAD = [
  "Properties",
  "Users",
  "Ratings",
  "Reviews",
  "Dates",
  "Actions",
];

async function fetchReviews() {
  try {
    const response = await getAllReviews();
    const reviews = response.data;
    return reviews;
  } catch (error) {
    console.log("Error fetching user reviews:", error);
  }
}

export function ReviewsTable() {
  const defaultImage =
    "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
  const defaultAvatar =
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=ais_user";

  const [tableRows, setTableRows] = useState([]);
  const [curentPage, setCurrentPage] = useState(1);
  const [totalPages, SetTotalPages] = useState(1);
  const [Reviews, SetReviews] = useState([]);

  useEffect(() => {
    async function getTableRows() {
      try {
        const reviews = await fetchReviews();
        SetReviews(reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }

    getTableRows();
  }, []);

  useEffect(() => {
    if (Reviews.length > 0) {
      const itemsPerPage = 4;
      SetTotalPages(Math.ceil(Reviews.length / itemsPerPage));
      const startIndex = (curentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setTableRows(Reviews.slice(startIndex, endIndex));
    }
  }, [Reviews, curentPage]);

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
      const response = await DeleteReviewForAdmin(id);
      if (response.status == 200) {
        SetReviews((prevReviews) =>
          prevReviews.filter((review) => review.Object_id !== id)
        );
      } else {
        console.log("couldnt delete Review");
      }
    } catch (error) {
      console.log(error, error.message);
    }
  };

  return (
    <>
      {!tableRows.length == 0 ? (
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
                      className="border-y border-blue-gray-100 bg-[#ffa9202a] p-4"
                    >
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
                  ({ comment, owner, property_id, date, rating, Object_id }, index) => {
                    const imageUrl =
                      property_id?.images?.[0]?.url || defaultImage;
                    const isLast = index === tableRows.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <div className="flex items-center gap-4">
                            <Avatar
                              src={imageUrl}
                              alt={property_id.title}
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
                                {property_id.price} MAD
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-4">
                            <Avatar
                              src={
                                owner.ProfilePic
                                  ? owner.ProfilePic
                                  : defaultAvatar
                              }
                              alt={name}
                              size="8"
                            />
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
                        <td className={classes}>
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
                              {comment}
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
                          <div className="flex justify-center">
                            <Tooltip
                              content="Delete Review"
                              className="bg-red-300 text-white font-semibold border rounded-lg "
                            >
                              <IconButton variant="text">
                                <Trash className="h-6 w-6 text-red-500" onClick={() => handleDeleteReview(Object_id)}/>
                              </IconButton>
                            </Tooltip>
                          </div>
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
                onClick={handlePrevPage}
                disabled={curentPage == 1}
              >
                Previous
              </Button>
              <Button
                variant="outlined"
                size="sm"
                onClick={handleNextPage}
                disabled={curentPage == totalPages}
              >
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <div>no review yet</div>
      )}
    </>
  );
}
