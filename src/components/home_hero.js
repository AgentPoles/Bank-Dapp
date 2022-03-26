import React from "react";
import TypeAnimation from "react-type-animation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <p class="lg:text-6xl md:text-6xl sm:text-4xl mb-4 text-4xl font-bold text-gray-900">
            The Me Protocol
          </p>

          <div className="flex flex-row space-x-1 text-2xl items-baseline">
            <span class="mb-8 leading-relaxed">the future of rewards is </span>
            <TypeAnimation
              cursor={true}
              sequence={[
                " customer-driven",
                3000,
                " borderless",
                3000,
                " pan-industry",
                3000,
                "Me",
                8000,
              ]}
              wrapper="a"
              repeat={Infinity}
            />
          </div>
          <div class="flex w-full justify-center items-end">
            <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label for="hero-field" class="leading-7 text-sm text-indigo-600">
                Unlock Possiblities
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                placeholder="Email"
                class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Join
            </button>
          </div>
          <p class="text-sm mt-2 text-gray-500 mb-8 w-full">
            Join the Waitlist
          </p>
          <div class="flex">
            <Link to={"/user"}>
              <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-xs text-gray-600 mb-1">
                    Do I need this?
                  </span>
                  <span class="title-font font-medium">User</span>
                </span>
              </button>
            </Link>

            <Link to={"/business"}>
              <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-xs text-gray-600 mb-1">
                    Do I need this?
                  </span>
                  <span class="title-font font-medium">Business</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
