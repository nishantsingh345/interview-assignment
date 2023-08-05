import ProviderRedux from "@/redux/provider";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthLayout from "@/components/layout/AuthLayout";
import { sideNav } from "@/config/sideNav";
import Navbar from "@/components/layout/Navbar";
import OnlineList from "@/components/layout/footer/OnlineList";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto mt-10">
        <ProviderRedux>
          <div className="flex flex-col md:flex-row gap-5 h-full w-full">
            <AuthLayout config={sideNav} />
            <div className="flex-1 w-full">
              <Navbar />
              {children}
              <OnlineList />
            </div>
          </div>
        </ProviderRedux>
      </body>
    </html>
  );
}