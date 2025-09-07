import Link from "next/link";
import React from "react";
import Image from "./Image";
const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];
export default function LeftBar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* Logo Menu Button */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* Logo */}
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <Image src="icons/logo.svg" alt="Logo" w={24} h={24} />
        </Link>
        {/* Menu List */}
        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="flex items-center p-2 rounded-full hover:bg-[#181818] gap-4"
            >
              <Image
                src={`icons/${item.icon}`}
                alt={item.name}
                w={24}
                h={24}
              />
              <span className="hidden xxl:inline ml-2">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* Post Button */}
        <Link
          href="/"
          className="xxl:hidden bg-white text-black rounded-full w-12 h-12 flex items-center justify-center"
        >
          <Image
            src="icons/post.svg"
            alt="new post"
            w={24}
            h={24}
            className="inline mr-2"
          />
        </Link>
        <Link
          href="/"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>
      {/*User */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <div className="w-10 h-10 relative rounded-full overflow-hidden ">
            <Image
              src="/general/avatar.png"
              alt="@MalekAq7"
              tr={true}
              w={40}
              h={40}
              className="rounded-full"
            />
          </div>
          <div className="hidden xxl:flex flex-col ml-2">
            <span className="font-bold">Malek Aqrabawi</span>
            <span className="text-sm text-textGray">@MalekAq7</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
}
