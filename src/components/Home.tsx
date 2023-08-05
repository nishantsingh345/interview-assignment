/* eslint-disable @next/next/no-img-element */
"use client";

import { getUser, getUsers } from "@/redux/features/usersSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

type Props = {
  id: number;
  name: string;
  profilepicture: string;
};

const HomeData = ({ data }: { data: Props[] }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(data));
  }, [data, dispatch]);

  const handleNavigate = async (id: number) => {
    router.push(`/${id}/profile`);
  };
  return (
    <div className="">
      <div className="bg-gradient-to-r w-full releative from-blue-500 to-blue-800 h-[50vh] py-30 text-green-600">
        <div className="max-w-md mx-auto absolute left-0 right-0 top-32 shadow-lg rounded-lg  bg-slate-50 overflow-hidden">
          <h1 className="bg-slate-300 text-center antialiased px-2 py-4 font-semibold text-lg text-slate-900">
            Select an account
          </h1>
          <div className="px-6 py-4 max-h-[350px] overflow-y-auto">
            {data.map((item: Props) => (
              <div
                className="flex py-2 gap-2 items-center border-b border-slate-300 cursor-pointer"
                key={item?.id}
                onClick={() => handleNavigate(item?.id)}
              >
                <img
                  src={item.profilepicture}
                  alt={item.name}
                  className="w-10 h-10 object-cover rounded-full "
                />
                <h4 className="text-gray-900 font-normal">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeData;
