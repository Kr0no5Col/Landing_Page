import React from "react";
import { Link } from "react-scroll";



export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 nav backdrop-blur-md border-white border-b-[0.1rem] border-opacity-10">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text- "
              href="/"
            >
              ANDRES
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none Button_Menu"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto Opciones">
              <Link
                smooth
                spy
                to="inicio"
              >
                <span className="ml-2">
                  Home
                </span>
              </Link>
              <Link
                smooth
                spy
                to="page1"
              >
                <span className="ml-2 ">
                  About
                </span>
              </Link>
              <Link
                smooth
                spy
                to="page2"
              >
                <span className="ml-2 ">
                  Studies
                </span>
              </Link>
              <Link
                smooth
                spy
                to="page3"
              >
                <span className="ml-2 ">
                  Experience
                </span>
              </Link>

              <Link
                smooth
                spy
                to="page4"
              >
                <span className="ml-2 ">
                  Projects
                </span>
              </Link>
              <Link
                smooth
                spy
                to="page5"
              >
                <span className="ml-2 ">
                  Contact
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
