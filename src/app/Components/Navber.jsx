"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserIcon from "./UserComponent/UserIcon";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Explore APIs", href: "/apis" },
    { name: "Docs", href: "/Doc" },
    { name: "Playground", href: "/apiPlayground" },
    { name: "About", href: "/about" },
  ];
  const open = () => {
    setIsOpen(!isOpen);
    setTimeout(() => setIsOpen(false), 2000);
  };
  return (
    <nav className="sticky top-4 z-50 px-4">
      <div className="max-w-7xl flex items-center justify-between p-3 bg-[#0F1720]/90 backdrop-blur-md border border-white/10 mx-auto w-full h-[70px] rounded-2xl shadow-xl relative">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.svg"
            width={100}
            height={100}
            alt="DevApiHub Logo"
            className="ml-1"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-white transition-colors ${
                pathname === link.href ? "text-blue-400" : ""
              }`}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <UserIcon />

          {/* Hamburger  Icon  */}
          <div
            className="md:hidden text-white cursor-pointer p-1"
            onClick={open}>
            {isOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-[#0F1720] border border-white/10 rounded-2xl p-5 flex flex-col gap-4 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors ${
                  pathname === link.href ? "text-blue-400" : "text-gray-300"
                }`}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
