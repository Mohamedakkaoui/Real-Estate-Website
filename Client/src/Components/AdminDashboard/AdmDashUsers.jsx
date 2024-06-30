import React, { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
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
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { getAllUsers } from "../../Api/Authapi";
import { Dot, Trash } from "lucide-react";
import { DeleteUser } from "../../Api/UserApi";
import Loading from "../Common/Loading";

const TABLE_HEAD = ["Member", "Contact", "Role", "Status", "joined", "Actions"];

async function fetchUsers() {
  try {
    const response = await getAllUsers();
    const users = response.data;
    return users;
  } catch (error) {
    console.log("Error fetching users:", error);
  }
}

export function MembersTable() {
  const defaultAvatar =
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=ais_user";

  const [tableRows, setTableRows] = useState([]);
  const [curentPage, setCurrentPage] = useState(1);
  const [totalPages, SetTotalPages] = useState(1);
  const [Users, SetUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    async function getTableRows() {
      try {
        const users = await fetchUsers();
        SetUsers(users);
      } catch (error) {
        console.error("Error fetching user reviews:", error);
      }
    }

    getTableRows();
  }, []);

  useEffect(() => {
    if (Users.length > 0) {
      const itemsPerPage = 6;
      SetTotalPages(Math.ceil(Users.length / itemsPerPage));
      const startIndex = (curentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setTableRows(Users.slice(startIndex, endIndex));
    }
  }, [Users, curentPage]);

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
      const users = await DeleteUser(id);
      if (users.status == 200) {
        toast.success("User Deleted with Success", {
          style: { backgroundColor: "#76C776", color: "white" },
        });
        SetUsers((prevUsers) =>
          prevUsers.filter((user) => user.OwnerId !== id)
        );
      } else {
        toast.error("Error :Couldnt Delete User", {
          style: { backgroundColor: "#FF7F7F", color: "white" },
        });
        console.log("couldnt delete  user");
      }
    } catch (error) {
      toast.error(error.message, {
        style: { backgroundColor: "#FF7F7F", color: "white" },
      });
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
                  Members list
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  See informations about all members
                </Typography>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll mx-2 px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
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
                {tableRows.length > 0 &&
                  tableRows.map(
                    (
                      {
                        FirstName,
                        LastName,
                        Username,
                        Email,
                        PhoneNumber,
                        ProfilePic,
                        isActive,
                        OwnerId,
                        Role,
                      },
                      index
                    ) => {
                      const isLast = index === tableRows.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <div className="flex items-center gap-4">
                              <Avatar
                                src={ProfilePic ? ProfilePic : defaultAvatar}
                                alt={Email}
                                size="8"
                              />
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {FirstName} {LastName}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  @{Username}
                                </Typography>
                              </div>
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="flex flex-col gap-2">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="flex align-center gap-2 font-bold opacity-70"
                              >
                                <MdOutlineEmail size={18} />
                                {Email}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="flex font-bold gap-2 opacity-70"
                              >
                                <MdOutlinePhone size={18} />
                                +212{PhoneNumber}
                              </Typography>
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal text-center"
                            >
                              {Role}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <div className="mx-auto w-max">
                              <div className="flex px-0">
                                {" "}
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
                                    isActive ? "text-green-500" : "text-red-500"
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
                              date
                            </Typography>
                          </td>
                          <td className={classes}>
                            <div className="flex justify-center gap-4">
                              {" "}
                              <Tooltip
                                content="Delete User"
                                className="bg-red-300 text-white font-semibold border rounded-lg"
                              >
                                <IconButton variant="text">
                                  <Trash
                                    className="h-6 w-6 text-red-500"
                                    onClick={() => handleDeleteUser(OwnerId)}
                                  />
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
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50  px-4 py-2">
            <div>
              {" "}
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
                disabled={curentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <div className="h-full w-full flex justify-center flex-align-center">
          <Loading />
        </div>
      )}
      <Toaster position="top-center" />
    </>
  );
}
