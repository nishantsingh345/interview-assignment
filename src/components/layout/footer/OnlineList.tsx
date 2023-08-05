/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { ChevronRight, MessageSquare } from "lucide-react";
import { useAppSelector } from "@/redux/store";

const OnlineList = () => {
  const users = useAppSelector((state) => state.userReducer.users);
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState<any>({});

  const handleUser = (user: any) => {
    setShow(true);
    setUserName(user);
  };
  return (
    <div className="fixed -bottom-[8px]  right-0">
      <div className="w-full px-4 pt-16">
        <div className=" w-full  rounded-2xl bg-white p-2">
          <div className="flex gap-2 ">
            {show && (
              <Disclosure as="div">
                {({ open }) => (
                  <div className="md:w-72 flex-shrink bottom-0 fixed md:right-72">
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-600 px-4 py-2 text-left text-sm  text-white hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 font-bold capitalize rounded-bl-none rounded-br-none">
                      <span className="flex items-center gap-1">
                        <img
                          src={userName?.profilepicture}
                          className="w-6 h-6 rounded-full"
                          alt=""
                        />
                        {userName?.name}
                      </span>
                      <div className="flex items-center gap-1">
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-white`}
                        />
                        <button className="" onClick={() => setShow(false)}>
                          x
                        </button>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className=" pt-4 text-sm text-gray-500 bg-white border border-blue-600">
                      <div className="h-[250px] ">
                        <div className="h-[230px]  overflow-y-auto px-4 pb-2">
                          <div className="flex  gap-2 flex-start">
                            <div className="flex flex-col gap-2">
                              <div className="bg-gray-100 p-2 rounded-md inline-block basis-1/2">
                                Hi there
                              </div>
                              <div className="bg-gray-100 p-2 rounded-md inline-block">
                                how are you
                              </div>
                            </div>
                          </div>
                          <div className="flex  gap-2 justify-end">
                            <div className="flex flex-col gap-2">
                              <div className="bg-gray-100 p-2 rounded-md inline-block basis-1/2">
                                Hi there
                              </div>
                              <div className="bg-gray-100 p-2 rounded-md inline-block">
                                how are you
                              </div>
                              <div className="bg-gray-100 p-2 rounded-md inline-block">
                                how are you
                              </div>
                            </div>
                          </div>
                          <div className="flex  gap-2 justify-start">
                            <div className="flex flex-col gap-2">
                              <div className="bg-gray-100 p-2 rounded-md inline-block basis-1/2">
                                Hi there
                              </div>
                              <div className="bg-gray-100 p-2 rounded-md inline-block">
                                how are you
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex relative">
                        <input
                          type="text"
                          placeholder="Type here..."
                          className="border p-2 w-full outline-none"
                        />
                        <ChevronRight className="font-bold text-blue-500 absolute right-0 top-2" />
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            )}
            <Disclosure>
              {({ open }) => (
                <div className="w-64">
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-600 px-4 py-2 text-left text-sm  text-white hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 font-bold capitalize rounded-bl-none rounded-br-none">
                    <span className="flex items-center gap-1">
                      <MessageSquare />
                      chats
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-blue-600">
                    <div className="max-h-[350px] overflow-y-auto ">
                      {users?.map((user: any) => (
                        <div
                          className="flex  my-2 cursor-pointer"
                          key={user?.key}
                          onClick={() => handleUser(user)}
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={user?.profilepicture}
                              alt={user?.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <h3>{user?.name}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineList;
