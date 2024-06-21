"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavItems() {
  const pathname = usePathname();

  return (
    <ul className="md:flex-row flex w-full gap-5 flex-col flex-start">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}
               className="hover:text-blue-400"
            >
               {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavItems;
