"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function Cryptos() {
    return (
      <div className="flex text-sm text-black space-x-5">
        <p>
          BIT <span className="text-base-edusync">R$ 23,62</span>{" "}
          <span className="text-green-edusync-700 font-semibold">+7,082</span>
        </p>
        <p>
          DOG <span className="text-base-edusync">R$ 23,62</span>{" "}
          <span className="text-red-edusync-700 font-semibold">-5,230</span>
        </p>
        <p>ETH</p>
      </div>
    );
  }

  function NavTabletAndDesktop() {
    return (
      <div className="px-6 py-3 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center gap-7">
          <Image
            src="/img/logo.svg"
            width={124}
            height={21}
            alt="Logo CoinSynch"
          />

          <Link href="#">
            <span className="cursor-pointer text-sm text-base-edusync hover:text-gray-300">
              About us
            </span>
          </Link>

          <Link href="#">
            <span className="cursor-pointer text-sm text-base-edusync hover:text-gray-300">
              Top Cryptos
            </span>
          </Link>
        </div>

        <div className="flex gap-20 items-center mt-5 md:mt-0 md:justify-center md:flex-row">
          <div className="mobile:hidden desktop:block">
            <Cryptos />
          </div>
          <div className="space-x-10 ">
            <Link href="#">
              <span className="cursor-pointer text-sm text-base-edusync hover:text-gray-300">
                Sign In
              </span>
            </Link>

            <Link href="#">
              <span className="cursor-pointer p-2 px-6 text-sm text-white hover:text-gray-300 rounded-full bg-orange-edusync">
                Sign up
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  function NavMobile() {
    return (
      <div className="pb-5 flex justify-between md:items-center">
        <div className="flex items-center gap-7">
          <Image
            src="/img/logo.svg"
            width={124}
            height={21}
            alt="Logo CoinSynch"
          />
        </div>

        <div>
          <button
            type="button"
            className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image src="/icon/burger.svg" width={32} height={32} alt="Burger" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <header className="desktop:container desktop:px-9 mobile:px-5 py-5">
      <nav className="text-gray-100 mobile:flex mobile:flex-col">
        <div className="tablet:block mobile:hidden">
          <NavTabletAndDesktop />
        </div>

        <div className="tablet:hidden mobile:block">
          <NavMobile />
        </div>

        <div className="mobile:block desktop:hidden tablet:mx-auto">
          <Cryptos />
        </div>
      </nav>
    </header>
  );
}
