"use client";
import React from "react";
import Image from "next/image";

const Steps = () => {
  return (
    <div>
      <div className="bg-customPurple">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto mb-10">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-customLighterPink font-semibold text-2xl md:text-4xl md:leading-tight">
              Step Into the Action
            </h2>
            <p className="mt-1 text-white">
              Discover Exciting Games: Your Playbook Awaits! Explore a wide
              variety of thrilling options
              <br />
              tailored for every player.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <Image
                src="https://img.freepik.com/premium-photo/casino-game-with-number-poker-chips-table_662214-135698.jpg"
                alt="PartyCasino Logo"
                width={450}
                height={0}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-customLighterPink text-xs font-medium uppercase">
                  Steps
                </h3>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-white text-customLighterPink font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-white">
                      Create an Account
                      <br />
                    </span>
                    Fill in the registration form with your details. Agree to
                    the terms and conditions and submit your information. Check
                    your email for a verification link and click it to activate
                    your account.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-white text-customLighterPink font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-white">
                      Make A Deposit <br />
                    </span>
                    Navigate to the “Cashier” or “Deposit” section. Select your
                    preferred payment method and enter the amount you wish to
                    deposit. Follow the prompts to complete your transaction
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-white text-customLighterPink font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-white">Explore Games <br/></span>
                    Browse our game library from the homepage. Use filters to
                    find specific types of games (slots, table games, live
                    dealer).
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-white text-customLighterPink font-semibold text-xs uppercase rounded-full">
                      4
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-white">Claim Bonuses <br/></span>
                    Check the promotions section for any available bonuses.
                    Follow the instructions to claim your bonus (some may
                    require a deposit).
                  </p>
                </div>
              </div>

              <a
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-customLighterPink font-medium text-sm text-white rounded-full focus:outline-none"
                href="#"
              >
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                    d="M14.05 2a9 9 0 0 1 8 7.94"
                  ></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                    d="M14.05 6A5 5 0 0 1 18 10"
                  ></path>
                </svg>
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
