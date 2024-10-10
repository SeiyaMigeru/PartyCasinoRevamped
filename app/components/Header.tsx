"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 bg-customPurple mb-16">
      <nav className="relative w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-24 mx-auto">
        <div className="md:col-span-3">
          <Image
            src="https://scmedia.partycasino.com/$-$/9266f52ed72f4a819631efd0854b8a17.svg"
            alt="PartyCasino Logo"
            width={200}
            height={0}
          />
        </div>
        <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <button
            type="button"
            className="py-2 px-5 inline-flex items-center gap-x-2 text-sm font-bold rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-300 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white"
          >
            LOG IN
          </button>
          <button
            type="button"
            className="py-2 px-5 inline-flex items-center gap-x-2 text-sm font-bold rounded-xl border border-transparent bg-customPink text-white hover:bg-customDarkerPink focus:outline-none transition disabled:opacity-50 disabled:pointer-events-none"
          >
            REGISTER
          </button>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              id="hs-navbar-hcail-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-hcail"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-hcail"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-hcail"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
          aria-labelledby="hs-navbar-hcail-collapse"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
              <a
                className="relative inline-block text-white hover:text-customPink transition focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1"
                href="#"
                aria-current="page"
              >
                Casino
              </a>
            </div>
            <div>
              <a
                className="relative inline-block text-white hover:text-customPink transition focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1"
                href="#"
              >
                Slots
              </a>
            </div>
            <div>
              <a
                className="relative inline-block text-white hover:text-customPink transition focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1"
                href="#"
              >
                Live Casino
              </a>
            </div>
            <div>
              <a
                className="relative inline-block text-white hover:text-customPink transition focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1"
                href="#"
              >
                Poker
              </a>
            </div>
            <div>
              <a
                className="relative inline-block text-white hover:text-customPink transition focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1"
                href="#"
              >
                Table Games
              </a>
            </div>
            <div>
              <a
                className="relative inline-block text-white hover:text-customPink transition focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1"
                href="#"
              >
                Sports
              </a>
            </div>
            <div>
              <a
                className="relative inline-block text-white hover:text-customPink transition focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1"
                href="#"
              >
                Offers
              </a>
            </div>
            <div>
              <a
                className="relative inline-block text-white hover:text-customPink transition focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1"
                href="#"
              >
                Safer Gambling
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
