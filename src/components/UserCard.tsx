"use client";
/* eslint-disable @next/next/no-img-element */
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const UserCard = () => {
  const userDetail = useAppSelector((state) => state.userReducer.user);
  const users = useAppSelector((state) => state.userReducer.users);
  const router = useRouter();
  const handleNavigate = (id: number) => {
    router.push(`/${id}/profile`);
  };

  return (
    <div className="flex flex-col absolute  right-0 top-16 bg-white rounded-lg p-4 shadow-lg w-72 ">
      <div className="flex flex-col items-center justify-center border-b ">
        <img
          src={userDetail?.profilepicture}
          className="w-20 h-20 rounded-full"
          alt={userDetail?.name}
        />
        <div className="mt-2 text-center">
          <h3>{userDetail?.name}</h3>
          <h4 className="text-gray-400">{userDetail?.email}</h4>
        </div>
      </div>
      {users?.slice(0, 2).map((item: any) => (
        <div
          className="flex  border-b p-2 items-center gap-2 cursor-pointer"
          key={item?.id}
          onClick={() => handleNavigate(item?.id)}
        >
          <img
            src={item?.profilepicture}
            className="w-8 h-8 rounded-full"
            alt={item?.name}
          />
          <span className="text-base">{item?.name}</span>
        </div>
      ))}
      <div className="flex justify-center mt-2">
        <Link href="/">
          <button
            type="button"
            className="bg-red-600 rounded-lg p-1 px-2 text-slate-100"
          >
            Sign Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
