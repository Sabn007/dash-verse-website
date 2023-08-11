import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/dashverse.jpg"
              alt="Dash Verse Logo"
              width={50}
              height={50}
            />

            <div className="ml-2 text-xl font-bold">Dash Verse</div>
          </div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
