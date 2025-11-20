import React from "react";
import myImage from '../../assets/MyImage.jpeg'
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  function gotoHome() {
    navigate('/')
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div onClick={gotoHome} className="flex-1">
        <a className="btn btn-ghost text-xl">Pokemons</a>
      </div>
      <div className="flex gap-2">
        <Search />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={myImage}
              />
            </div>
          </div>
          {/* <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
