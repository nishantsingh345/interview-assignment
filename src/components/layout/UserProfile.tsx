/* eslint-disable @next/next/no-img-element */

"use client";

import { useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserCard from "../UserCard";

const UserProfile = () => {
  const [show, setShow] = useState<boolean>(false);
  const userDetail = useAppSelector((state) => state.userReducer.user);

  return (
    <div
      className="flex items-center gap-2 group/user relative"
      onClick={() => setShow(!show)}
    >
      <div className="flex items-center cursor-pointer gap-2">
        <img
          src={userDetail?.profilepicture}
          alt={userDetail?.name}
          className="w-10 h-10 rounded-full"
        />
        <h3>{userDetail?.name}</h3>
      </div>
      <div className={`${show ? "block" : "hidden"}`}>
        <UserCard />
      </div>
    </div>
  );
};

export default UserProfile;
