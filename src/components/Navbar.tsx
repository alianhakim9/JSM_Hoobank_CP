import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        {navLinks.map((navLink, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>

      <ul className="list-none sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Toggle"
          onClick={() => setToggle((prev) => !prev)}
          className="w-[28px] h-[28px] object-contain"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-center items-center flex-1">
            {navLinks.map((navLink, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
