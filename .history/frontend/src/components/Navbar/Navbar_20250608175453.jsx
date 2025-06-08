import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";

function Navbar({theme, setTheme}) {
 
  
  
 
 
  const [showMenu, setShowMenu] = useState(false);



  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };



  return (
    <header className="relative  border-b-[1px] border-primary/50 bg-gradient-to-t from-violet-900 via-violet-600 to-violet-900 text-white dark:bg-gradient-to-t dark:from-violet-900 dark:via-violet-950 dark:to-violet-900 shadow-lg font-sans">
      <nav className="container flex h-[70px] items-center justify-between py-2">
        <div className="text-2xl text-white md:text-3xl">
          <a href="/#home ">
            COZ
            <span className="inline-block font-bold text-primary ">WEB</span>
          </a>
        </div>

        <div className="hidden  md:block">
          <ul className="flex items-center gap-10">
            <li className="cursor-pointer group relative">
            <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Home{" "}
                <span>
                  <FaCaretDown className="transtion-all duration-200 group-hover:rotate-180" />
                </span>
              </a>

              <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                <ul className="space-y-2">
                  <li className=" hover:bg-violet-200">Services</li>
                  <li className="  hover:bg-violet-200"> about us</li>
                  <li className=" hover:bg-violet-200">Privacy Policy</li>
                </ul>
              </div>
            </li>



            <li className="cursor pointer group">
              <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Services{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>

              <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block">
                <div className="grid grid-cols-3 gap-5">
                  <div className=" overflow-hidden">
                    <img
                      className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      src="https://picsum.photos/200"
                      alt="pics"
                    />
                  </div>

                  <div className=" flex  col-span-2">
   
   
                  {/* <div>
                    <h1 className="pb-3 text-slate-600 text-xl font-semibold">BesT Selling</h1>
                    <p className="text-sm text-slate-600  ">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Illo, amet.
                    </p>
                   </div> */}

   <div className="grid grid-cols-3 gap-2">
   <div>
                    <h1 className="pb-3 mt-2  text-xl m-1 font-semibold">BEST Selling</h1>
                <p className="text-sm m-1 ">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Illo, amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio sint excepturi,
                       magnam molestiae quidem distinctio dolor quaerat tenetur tempore?
                    </p>
                   </div> 

                    <div className="grid grid-cols-3 col-span-2  gap-12">
                      <ul className="mt-3 pb-10 flex flex-col gap-2 ">
                        <h1 className="pb-1 text-xl font-semibold">
                          Development
                        </h1>

                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Web Development
                        </li>

                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          IOS app development
                        </li>

                        <li className=" cursor-pointer text-black/80 hover:text-primary ">
                          The app development
                        </li>
                      </ul>

                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">
                          Other Services
                        </h1>

                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          {" "}
                          Other Services
                        </li>

                        <li className="cursor-primary text-black/80 hover:text-primary">
                          {" "}
                          Cloud Services
                        </li>

                        <li className="curor-pointer text-black/80 hover:text-primary">
                          {" "}
                          Mobile app
                      
                        </li>
                        </ul>
                        <div className="overflow-hidden max-h-[700px]">
                          <img className="max-h-[700px] w-full mt-2 rounded-b-3xl object-fill" src="https://picsum.photos/180" alt="no image" />
                        </div>
                     
                    </div>
                 
                 </div> </div>
                </div>
              </div>
            </li>
            <li className="cursor pointer">   <a href="/#contact">About us</a></li>

            <div className="flex items-center gap-4">
            
            
            
            
            <li>
              <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
            </li>
            <li>
              <div>
                <p className="text-sm">Call us on</p>
                <p className="text-lg">
                  {" "}
                  <a href="tel:+91123456789">+91 123456789</a>
                </p>
              </div>
            </li>
          </div>
       
       
       
          {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
        {/* <button onClick={() => handleThemeChange("light")}> light</button> */}
       
          </ul>
        </div>

       
  
 
  
  <div className="flex items-center gap-4 md:hidden ">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
     
      </nav>
   <ResponsiveMenu showMenu={showMenu}  setShowMenu={setShowMenu} />
    </header>
  );
}

export default Navbar;
