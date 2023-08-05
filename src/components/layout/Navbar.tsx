"use client";
import React, { useEffect } from "react";
import UserProfile from "./UserProfile";
import { getUser } from "@/redux/features/usersSlice";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";

const Navbar = () => {
  let pathanme = usePathname();
  const pathId = pathanme.split("/")[1];
  const name = pathanme.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(Number(pathId)));
  }, [dispatch, pathId]);
  return (
    <div className="flex  w-full justify-between border-b pb-2 items-center px-2">
      <h1 className="font-bold uppercase">{name}</h1>
      <UserProfile />
    </div>
  );
};

export default Navbar;
