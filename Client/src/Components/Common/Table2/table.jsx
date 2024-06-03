import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import VillaImg from "../../../assets/Villai.jpg";

const INITIAL_VISIBLE_COLUMNS = [
  "title",
  "price",
  "category",
  "listingType",
  "createdAt",
  "city",
  "owner",
];

export default function Table2({ Listings }) {
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const filteredItems = React.useMemo(() => {
    if (!filterValue) return Listings;
    return Listings.filter(
      (listing) =>
        (listing.title &&
          listing.title.toLowerCase().includes(filterValue.toLowerCase())) ||
        (listing.category &&
          listing.category.toLowerCase().includes(filterValue.toLowerCase()))
    );
  }, [Listings, filterValue]);

  const paginatedItems = filteredItems.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const renderCell = (listing, columnKey) => {
    const cellValue = listing[columnKey];
    if (columnKey == "title") {
      const imageUrl =
        listing.images && listing.images[0] && listing.images[0].url
          ? listing.images[0].url
          : VillaImg;
      return (
        <div className="flex">
          <div className="w-40 h-30 ">
            {" "}
            <img
              src={imageUrl}
              alt={listing.title}
              className="w-full h-full rounded-lg mb-2"
            />
          </div>
          <span className="flex text-md justify-end font-semibold items-center ml-2">
            {cellValue}
          </span>
        </div>
      );
    } else if (columnKey == "price") {
      const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 0,
      }).format(cellValue);
      return (
        <span className="text-start">
          <span className="text-lg font-semibold">
            {formattedPrice}
          </span>
          <span className="font-semibold text-md"> MAD</span>
        </span>
      );
    } else if (columnKey === "owner") {
      const { Username, ProfilePic } = listing.owner || {};
      return (
        <div className="flex items-center">
          <img
            src={ProfilePic || VillaImg}
            alt={Username}
            className="w-8 h-8 object-cover rounded-full"
          />
          <span className="ml-2">{Username}</span>
        </div>
      );
    }
    return cellValue;
  };

  const renderColumn = (column) => {
    if (column == "title") {
      return (
        <TableColumn
              key={column}
              className="bg-[#ffa9202a] text-[#FFA920]  text-sm"
            >
              {column.toUpperCase()}
            </TableColumn>
      )
    }
    return (
    <TableColumn
              key={column}
              className="bg-[#ffa9202a] text-[#FFA920]  text-sm text-center"
            >
              {column.toUpperCase()}
            </TableColumn>)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Recent Listings</div>
        <form className="w-[30%]">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search titles, categories"
            />
          </div>
        </form>
      </div>
      <Table>
        <TableHeader>
          {INITIAL_VISIBLE_COLUMNS.map((column) => (
            renderColumn(column)
          ))}
        </TableHeader>
        <TableBody>
          {paginatedItems.map((listing) => (
            <TableRow key={listing.id}>
              {INITIAL_VISIBLE_COLUMNS.map((column) => (
                <TableCell key={column} className="text-center">
                  {renderCell(listing, column)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        total={Math.ceil(filteredItems.length / rowsPerPage)}
        page={page}
        onChange={handlePageChange}
        className="mt-3"
      />
    </div>
  );
}
