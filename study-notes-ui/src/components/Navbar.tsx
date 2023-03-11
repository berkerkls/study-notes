import React from "react";
import Link from "next/link";

function Navbar() {
  const links = [
    {
      name: "React",
      link: "/react-notlari",
      textcolor: "text-info",
    },
    {
      name: "TypeScript",
      link: "/ts-notlari",
      textcolor: "text-blue-500",
    },
  ];
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <Link
                href="/about"
                className="bg-transparent hover:bg-transparent"
              >
                <button className="btn text-black bg-transparent hover:bg-transparent border-0">
                  About
                </button>
              </Link>
            </li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                {links.map((item: any, index: number) => (
                  <li key={index}>
                    <Link href={item.link} className="hover:bg-transparent">
                      <button
                        className={`btn bg-transparent btn-sm border-0 hover:bg-transparent ${item.textcolor}`}
                      >
                        {item.name}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <a className="btn mr-2">Login</a>
          <a className="btn ml-2">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
