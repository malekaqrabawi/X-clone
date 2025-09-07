import React from "react";
import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";
import Homepage from "./page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto justify-between max-w-screen-md">
          <div className="px-2 xsm:px-4 xxl:px-8">
            <LeftBar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
            <Homepage />
          </div>
          <div className="hidden lg:flex ml-4 md:ml-8 flex-1">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
