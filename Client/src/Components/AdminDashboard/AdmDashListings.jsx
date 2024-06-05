import React, { useState, useEffect } from "react";
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
} from "@material-tailwind/react";

import { getAllListings } from "../../Api/Authapi";
import { Dot, Eye, Trash } from "lucide-react";
import { DeleteListing } from "../../Api/ListingsApi";
import { Link } from "react-router-dom";

const TABLE_HEAD = [
  "Properties",
  "For",
  "Description",
  "Status",
  "Date",
  "Actions",
];

async function fetchlistings() {
  try {
    const response = await getAllListings();
    const listings = response.data.Listings;
    return listings;
  } catch (error) {
    console.log("Error fetching user reviews:", error);
  }
}

export function ListingsTable() {
  const defaultImage ="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
  const [tableRows, setTableRows] = useState([]);
  const [curentPage, setCurrentPage] = useState(1);
  const [totalPages, SetTotalPages] = useState(1);
  const [Properties, SetProperties] = useState([]);

  useEffect(() => {
    async function getTableRows() {
      try {
        const listings = await fetchlistings();
        SetProperties(listings);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    }

    getTableRows();
  }, []);

  useEffect(() => {
    if (Properties.length > 0) {
      const itemsPerPage = 4;
      SetTotalPages(Math.ceil(Properties.length / itemsPerPage));
      const startIndex = (curentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setTableRows(Properties.slice(startIndex, endIndex));
    }
  }, [Properties, curentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await DeleteListing(id);
      if (response.status == 200) {
        SetProperties((prevProperties) =>
          prevProperties.filter((property) => property.Object_id !== id)
        );
      } else {
        console.log("couldnt delete Property");
      }
    } catch (error) {
      console.log(error, error.message);
    }
  };


  return (
    <>
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex justify-center items-center text-center mb-4">
          <div>
            <Typography variant="h4" color="blue-gray">
              Listings list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all properties
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0 ">
        <table className="mt-4 w-full table-auto text-left">
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
              (
                {
                  price,
                  title,
                  description,
                  images,
                  isActive,
                  createdAt,
                  listingType,
                  Object_id,
                },
                index
              ) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes} style={{ width: "30%" }}>
                      <div className="flex items-center gap-4">
                        <Avatar
                          src={images.length == 0 ? images[0] : defaultImage}
                          alt={title}
                          style={{ width: "150px", height: "120px" }}
                        />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-4 font-extrabold"
                          >
                            {title}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold        "
                          >
                            {price} MAD
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes} style={{ width: "10%" }}>
                      <div className="flex flex-col justify-center items-center">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {listingType}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes} style={{ width: "35%" }}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {description}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="mx-auto w-max">
                        <div className="flex px-0">
                          <Dot
                            className={`${
                              isActive ? "text-green-500" : "text-red-500"
                            } size-8`}
                          />
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={isActive ? "Active" : "Inactive"}
                            className={`${
                              isActive ? "text-green-400" : "text-red-400"
                            } pl-0`}
                          />
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {createdAt || "date"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="View User" className = "bg-white text-black border font-semibold border-black rounded-lg">
                        <IconButton variant="text">
                          <Link to={`/PropertyDetails/${Object_id}`}>
                          <Eye className="h-7 w-7 text-gray-400" /></Link>
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete Listing" className="bg-red-400 text-white font-semibold border rounded-lg">
                        <IconButton variant="text">
                          <Trash
                            className="h-6 w-6 text-red-500 ml-5"
                            onClick={() => handleDeleteUser(Object_id)}
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
    </>
  );
}
