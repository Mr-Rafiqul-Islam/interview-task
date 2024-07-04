import React, { useEffect, useState } from "react";
import Container from "../Container";
// icons
import { RiMenu2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import Button from "../Button";
import { Link } from "react-router-dom";
function Header1() {
  const [isSticky, setIsSticky] = useState(false);
  // for sticky header
  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`w-full z-50 transition-all duration-500 top-0 left-0 py-10 ${
        isSticky ? "bg-primary sticky" : "bg-transparent fixed"
      }`}
    >
      <Container>
        <div className="flex flex-wrap gap-y-5 sm:flex-row justify-between">
          <div className="w-1/2 sm:w-1/3">
            <div className="flex items-center gap-x-3">
              <RiMenu2Line className="text-white text-3xl cursor-pointer" />
              <div className="flex text-white cursor-pointer">
                EN <MdKeyboardArrowDown className=" text-2xl" />
              </div>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 text-center">
            <img src="src/assets/logo4.png" alt="" className="mx-auto" />
          </div>
          <div className="w-full sm:w-1/3">
            <div className="flex justify-between sm:justify-end sm:gap-x-5 items-center">
              <Link to="tel:+123456789" className="flex items-center gap-x-2">
                <IoIosCall className="text-white text-3xl"/>
                <p className="text-white font-roboto font-bold text-sm sm:hidden lg:flex leading-4 tracking-[2px]">
                  +1 800 603 6035
                </p>
              </Link>
              <Button text={`Book now`} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header1;
