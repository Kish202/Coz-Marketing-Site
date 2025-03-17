import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-gradient-to-r from-violet-950 to-violet-900 border-t-4 border-violet-900 ">
      <section className=" mx-auto max-w-[1200px] text-white">
        <div className="grid py-5 md:grid-cols-3">
          <div className="px-4 py-8">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home" className="">
                COZ
                <span className="inline-block font-bold text-primary">WEB</span>
              </a>
            </h1>

            <p className="pb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              illum facilis nostrum. Eligendi enim illum fuga tenetur odio?
              Debitis animi inventore totam fugit! Optio eligendi quisquam
              numquam voluptate voluptatem quae!
            </p>

            <div className="flex items-center gap-3  cursor-pointer duration:300 mt-2">
              <FaLocationArrow className="text-primary  cursor-pointer" />
              <a href="#">
                <p>Noida, Uttar Pradesh</p>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaMobileAlt className="text-primary" />
              <p>+91 1234567890</p>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-2xl">
                  Important Items
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Home
                  </li>

                  <li className="cursor-pointer transition-all duration:300 hover:translate-x-[2px]">
                    about ua
                  </li>

                  <li className="cursor-pointer transition-all duration:300 hover:translate-x-[2px]">
                    Services
                  </li>

                  <li className="cursor-pointer transition-all duration-300  hover:translate-x-[2px]">
                    Login
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl sm:text:2xl font-bold sm:text-left ">
                  Links
                </h1>

                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Privacy Policy
                  </li>

                  <li classNane="cursor-pointer transition-all duration:300 hover:translate-x-[2px]">
                    Services
                  </li>

                  <li className="cursor-pointer transition-all duration:300 hover:translate-x-[2px]">
                    abouT us
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="py-8 px-4">
                <h1
                className="
                  mb-3
                  text-justifu
                  sm:text-left
                  font-bold
                  text-xl
                  sm:text-2xl"
                >
                  Social Links
                </h1>
                <div className=" flex flex-col gap-3 line-clamp-1">
                  <h1 className="pt-2 pb-1 ">Subscribe to our newsletter.</h1>
                  <input
                    className="rounded-full px-3 py-1 max-md:mx-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 "
                    type="text"
                    placeholder="Email"
                  />

                  <div className="flex items-center  mt-6">
                    <a href="#" className="duration-200 hover:scale-105 px-2">
                      <FaInstagram className="text-2xl text-white  " />
                    </a>
                    <a
                      href="#
"
                      className="duration-200 hover:scale-105 px-2"
                    >
                      {" "}
                      <FaFacebook className="text-2xl" />
                    </a>

                    <a
                      href="#
"
                      className="duration-200 hover:scale-105 px-1"
                    ></a>
                    <FaLinkedin className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="border-t-2 border-gray-300/50  py-2 md:py-6 text-center">
          @copyright 2025 Travery || Me
        </div>
      </section>
    </div>
  );
}

export default Footer;
