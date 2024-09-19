"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Dropdown, css } from "@nextui-org/react";
import UseMediaQuery from "./UseMediaQuery";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ArrowForwardIosRounded } from "@mui/icons-material";

const Navbar = () => {
  const hamburgerMenu = UseMediaQuery("(max-width: 1179px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const variants = {
    visible: { x: "0%" },
    hidden: { x: "-100%" },
    exit: { x: "-100%" },
    exitActive: { x: 0 },
  };

  return (
    <>
      {!hamburgerMenu ? (
        <nav
          style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }} className={`fixed top-[30px] px-20 w-screen text-lg flex py-2 justify-center items-center z-40 shadow-sm text-primary   bg-[#ffffff] `}
        >
          <div className="w-screen h-[30px] bg-primary fixed top-0 flex justify-center text-sm items-center text-white" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }} >
            <div className="max-w-[1400px] w-full flex justify-between items-center">
              <div className="flex justify-center items-center gap-1">
                <img src="/phone.svg" className="max-w-[25px]" />
                <p className="mr-4">0409 611 780</p>

                <img src="/email.svg" className="max-w-[25px]" />
                <p>sagecoordination@gmail.com</p>
              </div>

            </div>

          </div>
          <div className=" flex justify-between w-full max-w-[1400px] py-0 px-0" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="bg-white p-2 rounded-full">
                <img src="/sagelogo.png" className="max-w-[50px] rounded-full" />
              </div>

              <h1 style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>SAGE COORDINATION</h1>
            </div>

            <div className="flex justify-center items-center gap-3 
             text-[19px]  ">
              <div className=" rounded-md py-2 px-4 transition duration-300 flex justify-center items-center gap-10">
                <Link
                  href="/"
                  className="group text-primary transition-all duration-300 ease-in-out"
                >
                  <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                    Home
                  </h2>
                </Link>
                <Link
                  href="/services"
                  className="group text-primary transition-all duration-300 ease-in-out"
                >
                  <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                    Services
                  </h2>
                </Link>

                <Link
                  href="/contact"
                  className="group text-primary transition-all duration-300 ease-in-out"
                >
                  <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                    Contact
                  </h2>
                </Link>
                <Link
                  href="/referral"
                  className="group text-primary transition-all duration-300 ease-in-out"
                >
                  <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                    Referral
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="fixed top-0 w-screen bg-primary  text-lg text-white  flex px-5 py-4  justify-between items-center z-40">
          <button
            className="rounded-full ml-5 mt-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {" "}
            <MenuRounded className="text-white" fontSize="large" />{" "}
          </button>
          {isMenuToggled && (
            <AnimatePresence>
              {/* MOBILE MENU POPUP */}
              {isMenuToggled && (
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeOut", duration: 0.2 }}
                  exit="exit"
                  className="fixed bg-primary p-2 top-0 bottom-0 left-0 right-0 w-screen h-screen transition-300 shadow-md  "
                >
                  {/* CLOSE ICON */}
                  <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                      <CloseRounded className="text-white" fontSize="large" />
                    </button>
                  </div>

                  {/* MENU ITEMS */}
                  <div className="flex flex-col items-start justify-start gap-10  h-[50%]  text-[#292F36] mt-5">
                    <Link
                      href="/"
                      className=" border-b-[1px] w-full text-start flex justify-between items-center "
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      <p className="text-[20px] text-white">Home</p>
                      <ArrowForwardIosRounded className="text-white" />
                    </Link>

                    <Link
                      href="/about"
                      className=" border-b-[1px] w-full text-start flex justify-between items-center "
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      <p className="text-[20px] text-white">Services</p>
                      <ArrowForwardIosRounded className="text-white" />
                    </Link>
                    <Link
                      href="/about"
                      className=" border-b-[1px] w-full text-start flex justify-between items-center "
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      <p className="text-[20px] text-white">Contact</p>
                      <ArrowForwardIosRounded className="text-white" />
                    </Link>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
