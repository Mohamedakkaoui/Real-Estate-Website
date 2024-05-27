import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
//  import { PencilIcon } from "@heroicons/react/outline/AcademicCapIcon";
import { fetchListings } from '../../Api/apiProprety';

export function ListingsTable() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllListings = async () => {
      try {
        const response = await fetchListings();
        const { data } = response; // Extract the data property from the response
        console.log('Fetched Listings:', data);
        if (Array.isArray(data)) {
          setListings(data);
        } else {
          console.error('Fetched data is not an array:', data);
          setListings([]); 
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching listings:', err);
        setError(err.message);
        setLoading(false);
      }
    };
  
    getAllListings();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(listings) || listings.length === 0) {
    console.log('No listings available:', listings);
    return <div>No listings available</div>;
  }

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
              <th className="border-y border-blue-gray-100 bg-gray-200 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-center leading-none opacity-70"
                  style={{ fontWeight: "bold" }}
                >
                  Title
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-gray-200 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-center leading-none opacity-70"
                  style={{ fontWeight: "bold" }}
                >
                  Description
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-gray-200 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-center leading-none opacity-70"
                  style={{ fontWeight: "bold" }}
                >
                  Category
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-gray-200 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-center leading-none opacity-70"
                  style={{ fontWeight: "bold" }}
                >
                  Listing Type
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-gray-200 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-center leading-none opacity-70"
                  style={{ fontWeight: "bold" }}
                >
                  Location
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-gray-200 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-center leading-none opacity-70"
                  style={{ fontWeight: "bold" }}
                >
                  Price
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-gray-200 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-center leading-none opacity-70"
                  style={{ fontWeight: "bold" }}
                >
                  Size
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-gray-200 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-center leading-none opacity-70"
                  style={{ fontWeight: "bold" }}
                >
                  Features
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-gray-200 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-center leading-none opacity-70"
                  style={{ fontWeight: "bold" }}
                >
                  Actions
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {listings.map(({ _id, title, description, category, listingType, location, price, size, features, images }) => (
              <tr key={_id}>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar
                      src={images.length > 0 ? images[0].url : ""}
                      alt={title}
                      style={{ width: "150px", height: "120px" }}
                    />
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal mb-4"
                      >
                        {title}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className="p-4">
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
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {category}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {listingType}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {location}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {price}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {size}
                  </Typography>
                </td>
                <td className="p-4">
                  <div>
                    {features.map((feature, index) => (
                      <div key={index}>{feature}</div>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <Tooltip content="Edit Listing">
                    <IconButton variant="text">
                      {/* <PencilIcon className="h-4 w-4" /> */}
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
