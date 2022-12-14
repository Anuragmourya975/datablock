import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <header
        className="header w-full fixed z-50 top-0 flex items-center justify-between px-0 py-0"
        style={{
          borderBottom: "1px solid #333154",
          backgroundColor: "black",
        }}
      >
        {/* <!-- logo --> */}
        <div className="w-3/12 flex pl-5 ">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
            alt=""
            width="40px"
            // srcset=""
            // style={{ filter: "invert(1)" }}
          />
          <div className="flex justify-center ml-5">
            <button className=" p-2 hover:bg-pepegray text-white text-xs font-semibold">
              VIEW
            </button>
            <button className="p-2 hover:bg-pepegray text-white text-xs font-semibold">
              HELP
            </button>
          </div>
        </div>

        <nav className="nav font-semibold text-lg">
          <ul className="flex items-center">
            <li className="p-4  border-opacity-0 hover:border-opacity-100 duration-200 cursor-pointer active text-white text-sm">
              <a href="" style={{ color: "#f8f8f2" }}>
                data flow
              </a>
            </li>
          </ul>
        </nav>
        <div className="w-3/12 flex justify-end px-5">
          <div className="flex justify-center ml-5">
            <button className="p-2 hover:text-anurag text-white text-xs font-semibold">
              LOGIN
            </button>
            <button className="p-2 hover:text-anurag text-white text-xs font-semibold">
              SIGN UP
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
