import React from "react";
import { FaUserCircle } from "react-icons/fa";
function ResponsiveMenu({ showMenu }) {
  console.log("showMenu", showMenu);
  return (
    <div
  className={`md:hidden fixed top-0 left-0 w-[75%] 
    h-full   dark:bg-slate-900 text-violet-950 dark:text-white bg-violet-300 px-8 pb-6  pt-24 flex-col justify-between z-50 transition-all duration-300 ${
      showMenu ? "left-0" : "-left-[100%]"
    }`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Tania</h1>
            <h1 className="text-sm text-slate">Premium User</h1>
          </div>
        </div>

        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <a href="#" className="mb-2 inline-block">
                Home
              </a>
          
          
            </li>
          <li>
            <a href="#" className="mb-2 inline-block">
              Services
            </a>
         </li>
       
            <li>
              <a href="#" className="mb-2 inline-block">
                Top Stories
              </a>
            </li>

            <li>
              <a href="#" className="mb-2 inline-block">
                Submit Your Story
              </a>
            </li>

            <li>
              <a href="#" className="mb-[200px] inline-block">
                Contact
              </a>
            </li>
     
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© 2025 All Rights Reserved</h1>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
