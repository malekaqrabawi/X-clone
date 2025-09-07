"use client";

import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

export default function Homepage() {
  const endpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT || "";

  return (
    <div className="">
      <div className="flex justify-center text-textGray border-b-[1px] border-borderGray ">
        <Link href="/" className="pt-4 pb-3 flex items-center border-b-4 border-iconBlue">For you</Link>
        <Link href="/" className="pt-4 pb-3 flex items-center">Following</Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}
