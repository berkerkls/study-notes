import React, { useState } from "react";
import Link from "next/link";
import LoginDialog from "./Dialogs/LoginDialog";

function Navbar() {
  const [logindialog, setLoginDialog] = useState(false);

  const handleOpen = () => {
    setLoginDialog(true);
  };

  const handleClose = () => {
    setLoginDialog(false);
  };

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
          <a className="btn btn-ghost normal-case text-indigo-700 text-xl">
            Open Library
          </a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/home"
                className="bg-transparent hover:bg-transparent"
              >
                <button className="btn text-black font-light bg-transparent hover:bg-transparent border-0">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="bg-transparent hover:bg-transparent"
              >
                <button className="btn text-black font-light bg-transparent hover:bg-transparent border-0">
                  About
                </button>
              </Link>
            </li>
            <li tabIndex={0}>
              <a className="font-light hover:bg-transparent bg-transparent text-black">
                Notes
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
              <ul className="p-2 bg-indigo-100">
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
          <button
            onClick={handleOpen}
            className="btn btn-sm bg-transparent border-indigo-700 text-indigo-700 hover:text-white hover:border-indigo-700 hover:bg-indigo-700 mr-2"
          >
            Login
          </button>
          <LoginDialog open={logindialog} handleClose={handleClose} />
          <button className="btn btn-sm bg-indigo-700 text-white border-0 hover:bg-indigo-700 hover:opacity-80 ml-2">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
