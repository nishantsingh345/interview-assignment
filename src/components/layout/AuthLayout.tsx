"use client";
import { SideNavType } from "@/config/sideNav";
import { ChevronRight } from "lucide-react";
// import { SideNavType } from "@/config/SideNavType";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AuthLayout = ({
  params,
  config,
}: {
  params?: { userId: number };
  config: SideNavType[];
}) => {
  let pathname = usePathname();
  const currentPath = pathname.split("/")[2];
  const pathId = pathname.split("/")[1];

  return (
    <div className="md:w-52 bg-gradient-to-br from-blue-500 rounded-2xl to-blue-800 md:h-[80vh] flex flex-col justify-center w-full">
      <div className="flex md:flex-col flex-row gap-5 md:gap-2 px-4 py-2">
        {config.map((link) => {
          const isActive = currentPath === link.url;

          return (
            <div
              className={`${
                isActive ? "text-white" : "text-slate-200"
              } flex relative justify-between items-center border-b border-slate-100 py-2 pl-2`}
              key={link.url}
            >
              <Link href={`/${pathId}/${link.url}`}>{link.name}</Link>
              {isActive && (
                <span className="bg-white w-6 h-6 rounded-tl-full text-center rounded-bl-full absolute -right-4 hidden md:block">
                  <ChevronRight className="text-slate-600 ml-1" />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuthLayout;
