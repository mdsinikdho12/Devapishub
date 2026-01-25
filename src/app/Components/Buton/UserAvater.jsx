"use client";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import DropdownMenu from "../UserComponent/DropdownMenu";

function AvaterSection() {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownopen] = useState(false);

  return (
    <div className="flex items-center gap-1 md:gap-3">
      {session?.user ? (
        <div className="flex  mr-2 items-center gap-2 lg:gap-3 lg:bg-white lg:shadow-sm lg:px-4 h-[45px] md:h-[55px] rounded-full transition-all">
          <p className="hidden lg:block font-semibold font-sans text-purple-600 text-sm whitespace-nowrap max-w-[100px] truncate">
            {session.user.name.length > 8
              ? session.user.name.slice(0, 8) + "..."
              : session.user.name}
          </p>

          <div
            className="cursor-pointer shrink-0"
            onClick={() => setIsDropdownopen(!isDropdownOpen)}>
            <Image
              src={
                session.user.image ||
                "https://img.icons8.com/color/48/user-male-circle--v5.png"
              }
              width={40}
              height={40}
              alt="Avatar"
              className="rounded-full object-cover border-2 border-purple-200 hover:border-purple-500 transition-all md:w-[44px] md:h-[44px]"
            />
          </div>

          {isDropdownOpen && (
            <>
              <DropdownMenu session={session} />
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsDropdownopen(false)}
              />
            </>
          )}
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-purple-500 text-white px-4 md:px-6 py-2 md:py-2.5 mr-1 md:mr-2 rounded-full font-medium text-xs md:text-sm hover:bg-purple-600 transition-all shadow-md">
          Login
        </button>
      )}
    </div>
  );
}

export default AvaterSection;
