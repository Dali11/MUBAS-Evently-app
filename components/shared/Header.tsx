import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNavItems from "./MobileNavItems";

function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-40 flex font-bold">
          <Image
            src="/assets/images/MUBAS Logo.png"
            width={128}
            height={38}
            alt="Evently Logo"
          />
          <h4 className="pt-1"><span className="text-primary-500">MUBAS</span> <span className="text-sm">EVENTLY</span></h4>
        </Link>

        <SignedIn>
          <nav className='md:flex-between hidden'>
               <NavItems />
          </nav>
        </SignedIn>


        {/* ZOON MEETING */}

          

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
               <UserButton afterSignOutUrl="/" />
               <MobileNavItems />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </SignedOut>

        </div>
      </div>
    </header>
  );
}

export default Header;
