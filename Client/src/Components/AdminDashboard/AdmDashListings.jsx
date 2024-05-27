import React, { useState, useEffect } from 'react';
import { PencilIcon } from "@heroicons/react/24/solid";
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
import { getAllListings } from '../../Api/Authapi';

const TABLE_HEAD = ["Property", "Description", "Status", "Date", ""];


async function fetchlistings() {
  try {
    const response = await getAllListings();
    const listings = response.data;
    console.log(listings);
    return listings
  } catch (error) {
    console.log('Error fetching user reviews:', error);
  }
}

export function ListingsTable() {
  const defaultImage = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    async function getTableRows() {
      try {
        const listings = await fetchlistings();
        console.log(listings);
        setTableRows(listings);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    }

    getTableRows();
  }, []);
  return (
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
                  className="border-y border-blue-gray-100 bg-gray-200 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center leading-none opacity-70"
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
              ({ price, title, description, images, isActive }, index) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes} style={{ width: "35%" }}>
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
                            className="font-bold	"
                          >
                            {price} MAD
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes} style={{ width: "40%" }}>
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
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={isActive ? "Active" : "Inactive"}
                          color={isActive ? "green" : "red"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {'date'}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
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
  );
}
