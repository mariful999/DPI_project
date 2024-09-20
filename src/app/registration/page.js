import Image from "next/image";
import React from "react";
import { saliderOne } from "../assets";
import Container from "../ui/Container";

const Registration = () => {
  return (
    <Container>
      <section className="py-12 px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="mb-8 lg:mb-0 lg:w-6/12 xl:w-5/12">
            <Image
              src={saliderOne}
              className="w-full h-auto rounded-lg shadow-lg"
              alt="Sample image"
            />
          </div>

          <div className="w-full lg:w-6/12 xl:w-5/12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <div className="flex flex-row items-center justify-center bg-amber-200 rounded-md p-4 mb-6">
              <p className="mb-0 me-4 text-lg">Sign up with</p>

              <div className="flex space-x-2">
                <button
                  type="button"
                  className="p-2 rounded-full bg-[#32a6ab] hover:bg-[#137a7d] transition duration-150 ease-in-out"
                  aria-label="Sign up with Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-5 h-5"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="p-2 rounded-full bg-[#32a6ab] hover:bg-[#137a7d] transition duration-150 ease-in-out"
                  aria-label="Sign up with Google"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="p-2 rounded-full bg-[#32a6ab] hover:bg-[#137a7d] transition duration-150 ease-in-out"
                  aria-label="Sign up with Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </button>
              </div>
            </div>

            <p className="text-center text-gray-600 mb-4">Or</p>

            <form>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="peer block w-full rounded border border-gray-300 bg-transparent px-3 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:text-primary"
                  id="email"
                  placeholder="Email address"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-2 text-gray-500 transition-transform duration-200 ease-out peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Email address
                </label>
              </div>

              <div className="relative mb-6">
                <input
                  type="password"
                  className="peer block w-full rounded border border-gray-300 bg-transparent px-3 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:text-primary"
                  id="password"
                  placeholder="Password"
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 top-2 text-gray-500 transition-transform duration-200 ease-out peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Password
                </label>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    className="form-check-input rounded-full h-4 w-4 border border-gray-300 checked:bg-primary checked:border-primary focus:outline-none"
                    type="checkbox"
                    id="remember-me"
                  />
                  <label className="ml-2 text-gray-800" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-primary hover:text-[#32a6ab]">
                  Forgot password?
                </a>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary px-7 py-3 text-sm font-medium uppercase leading-normal transition duration-500 ease-in-out hover:bg-[#0e6467] bg-[#86d0d2] text-white"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Registration;
