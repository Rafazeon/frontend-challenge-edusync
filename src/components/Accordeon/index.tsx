"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

function Accordion() {
  const [isOpen, setIsOpen] = useState(0); // Inicia com o primeiro item aberto

  const toggleItem = (index: number) => {
    setIsOpen(isOpen === index ? -1 : index);
  };

  const coins = [
    {
      icon: "icon-mini1",
      name: "Bitcoin",
      title: "BTC",
      price: "US$ 25.499,52",
      change: "+5,65%",
      variation: "up"
    },

    {
      icon: "icon-mini2",
      name: "Ethereum",
      title: "ETH",
      price: "US$ 15.499,52",
      change: "-5,65%",
      variation: "down"
    },

    {
      icon: "icon-mini3",
      name: "Cardano",
      title: "ADA",
      price: "US$ 5.499,52",
      change: "-5,65%",
      variation: "down"
    },

    {
      icon: "icon-mini4",
      name: "Solana",
      title: "SOL",
      price: "US$ 2.499,52",
      change: "+5,65%",
      variation: "up"
    },
  ];

  return (
    <div>
      <h3 className="text-center pt-16 pb-8 font-bold text-base-edusync text-20">
        Top Cryptos
      </h3>

      <div className="flex justify-between px-5 text-12 text-base-edusync-500">
        <p>Crypto</p>
        <p>Trade</p>
      </div>

      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl overflow-hidden md:max-w-2xl">
        {coins.map((item, i) => (
          <div
            key={i}
            onClick={() => toggleItem(i)}
            className={`${i % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
          >
            <button className="p-4 w-full text-left text-gray-600 focus:outline-none">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={`/icon/${item.icon}.svg`}
                    width={32}
                    height={32}
                    alt="Ethereum"
                  />
                  {item.name}
                  <span className="text-base-edusync-500">{item.title}</span>
                </div>
                <div>
                  {isOpen === i ? <RiArrowUpSLine size={26} color="#FBAB34" /> : <RiArrowDownSLine size={26} color="#FBAB34" />}
                </div>
              </div>
            </button>
            {isOpen === i && (
              <div className="border-t border-gray-200">
                <p className="p-4 text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <p className="text-12 text-base-edusync-500">Price</p>
                    <p className="text-sm text-base-edusync">{item.price}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-12 text-base-edusync-500">Change</p>
                    <p className={`${item.variation === "up" ? "text-green-edusync-700" : "text-red-edusync-700"}`}>{item.change}</p>
                  </div>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-center font-normal text-md pb-8 pt-3 text-orange-edusync">
        View more +
      </p>
    </div>
  );
}

export default Accordion;
