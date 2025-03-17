import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
function ResponsiveMenu({ showMenu, setShowMenu }) {

  const onclose = () => {
    setShowMenu(false);
  }

  console.log("showMenu", onclose);
  return (
    <div
      className={`md:hidden fixed top-0 left-0 w-[75%] 
      h-screen dark:bg-slate-900 text-violet-950 dark:text-white bg-violet-300 px-8 pb-6 pt-24 
      flex flex-col justify-between z-50 transition-all duration-300 ease-in-out ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="card">
<div className="absolute top-1 right-9" onClick={onclose}
>
  <HiOutlineDotsHorizontal size={30} />
</div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Tania</h1>
            <h1 className="text-sm text-slate-700">Premium User</h1>
          </div>
        </div>

        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li >
              <a href="#" className="mb-2 inline-block hover:border-b-2 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="mb-2 inline-block hover:border-b-2">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="mb-2 inline-block hover:border-b-2">
                Top Stories
              </a>
            </li>
            <li>
              <a href="#" className="mb-2 inline-block hover:border-b-2">
                Submit Your Story
              </a>
            </li>
            <li>
              <a href="#" className="mb-2 inline-block hover:border-b-2">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer mt-auto">
        <h1>© 2025 All Rights Reserved</h1>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
