import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { ContextAuth } from "../../../Context/AuthContext";

function IconDropDown() {


  const { UserProfile, handleLogout } = ContextAuth();
  console.log(UserProfile);

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            description={UserProfile.Email}
            name={UserProfile.Username}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{UserProfile.Email}</p>
          </DropdownItem>
          <DropdownItem key="Profile">Profile</DropdownItem>
          <DropdownItem key="Dashbaord">Dashboard</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleLogout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default IconDropDown;
