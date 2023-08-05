/* eslint-disable @next/next/no-img-element */
"use client";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile({ params }: { params: { userId: number } }) {
  const userProfile = useAppSelector((state) => state.userReducer?.user);

  return (
    <div className="flex flex-col gap-5 md:flex-row items-start py-10">
      <div className="flex flex-col border-r md:w-[70%] w-full">
        <div className="profile flex flex-col gap-2  ">
          <div className="flex flex-col gap-2 items-center justify-center">
            <img
              src={userProfile?.profilepicture}
              alt={userProfile?.name}
              className="w-36 h-36 rounded-full"
            />
            <p>{userProfile?.name}</p>
          </div>
          <div className=" flex flex-col gap-1 items-center px-10">
            <p className="text-gray-400">
              UserName : <span className="text-gray-800">{userProfile?.username}</span>
            </p>
            <p className="text-gray-400">
              Email : <span className="text-gray-800">{userProfile?.email}</span>
            </p>
            <p className="text-gray-400">
              Phone : <span className="text-gray-800">{userProfile?.phone}</span>
            </p>
            <p className="text-gray-400">
              Website : <span className="text-gray-800">{userProfile?.website}</span>
            </p>
          </div>

          <div className="py-2">
            <p className="text-center text-slate-700 font-bold py-2 border-t">Company</p>
            <div className="flex flex-col gap-1 items-center ">
              <p className="text-gray-400">
                Name : <span className="text-gray-800">{userProfile?.company?.name}</span>
              </p>
              <p className="text-gray-400">
                CatchPhrase :
                <span className="text-gray-800">{userProfile?.company?.catchPhrase}</span>
              </p>
              <p className="text-gray-400">
                bs : <span className="text-gray-800">{userProfile?.company?.bs}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:pl-4 w-full">
        <p className="text-gray-400 font-bold">Address : </p>
        <div className="flex flex-col items-start px-6 gap-4">
          <div className="flex flex-col gap-2  pt-2">
            <p className="text-gray-400">
              Street : <span className="text-gray-800">{userProfile?.address?.street}</span>
            </p>
            <p className="text-gray-400">
              Suite : <span className="text-gray-800">{userProfile?.address?.suite}</span>
            </p>
            <p className="text-gray-400">
              City : <span className="text-gray-800">{userProfile?.address?.city}</span>
            </p>
            <p className="text-gray-400">
              Zipcode : <span className="text-gray-800">{userProfile?.address?.zipcode}</span>
            </p>
          </div>

          <div className="">
            <iframe
              width="450"
              height="250"
              src="https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS"
            ></iframe>

            <div className="flex gap-2 items-end justify-end">
              <p className="text-gray-400">
                Lat : <span className="text-gray-800">{userProfile?.address?.geo?.lat}</span>
              </p>
              <p className="text-gray-400">
                Lng : <span className="text-gray-800">{userProfile?.address?.geo?.lng}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
