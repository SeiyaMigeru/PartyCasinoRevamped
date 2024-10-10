"use client";
import React from "react";

const Promo = () => {
  return (
    <div className="bg-customPurple">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-customLighterPink text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Promotions
          </h2>
          <p className="mt-1 text-white dark:text-neutral-400">
          Discover our latest bonuses and special offers designed to enhance your gaming experience!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a className="group flex flex-col focus:outline-none" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="size-full absolute top-0 start-0 object-fill group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src="https://scmedia.wv.betmgm.com/$-$/1e7551453f5e4d87b487f3985c323474.jpg"
                alt="Blog Image"
              />
              <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-customPink text-white py-1.5 px-3 dark:bg-neutral-900">
                Sponsored
              </span>
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-white group-hover:text-customPink dark:text-neutral-300 dark:group-hover:text-white">
                BetMGM Ricochet Rewards
              </h3>
              <p className="mt-3 text-white dark:text-neutral-200">
              Stop, drop, and win with BetMGM Ricochet Rewards! Grab a Casino Bonus prize every day.
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-customLighterPink decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                Learn more
                <svg
                  className="shrink-0 size-4"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>
          <a className="group flex flex-col focus:outline-none" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="size-full absolute top-0 start-0 object-fill group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src="https://scmedia.wv.betmgm.com/$-$/dfc980fb3f264a24aa96ec3f16a01674.jpg"
                alt="Blog Image"
              />
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-white group-hover:text-customPink dark:text-neutral-300 dark:group-hover:text-white">
                Bankin' More Bacon
              </h3>
              <p className="mt-3 text-white dark:text-neutral-200">
              Opt in to the Bankin’ More Bacon™ Bet & Get promotion.
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-customLighterPink decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                Learn more
                <svg
                  className="shrink-0 size-4"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>
          <a
            className="group relative flex flex-col w-full min-h-60 bg-[url('https://play-lh.googleusercontent.com/VYp2lgMSho-EZHm6rMO_sczc7kdVRKCcW03qDZR6u-F3uxJDm_hrW2LItU8Qbopm8Q')] bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition"
            href="#"
          >
            <div className="flex-auto p-4 md:p-6">
              <h3 className="text-xl text-white/90 group-hover:text-white">
                 Join the Action at Party Poker! Experience Thrilling Poker Games and Exclusive Bonuses!
              </h3>
            </div>
            <div className="pt-0 p-4 md:p-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70">
                Visit the site
                <svg
                  className="shrink-0 size-4"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promo;
