import Image from "next/image";

export default function Table() {
  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <h3 className="text-center pt-28 pb-10 font-bold text-base-edusync text-32">
        Top Cryptos
      </h3>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 initial bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Crypto
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Change
            </th>
            <th scope="col" className="px-6 py-3">
              Trade
            </th>
          </tr>
        </thead>
        <tbody className="text-base-edusync">
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-base-edusync-500 whitespace-nowrap dark:text-white"
            >
              01
            </th>
            <td className="px-6 py-4 flex items-center gap-2">
              <Image
                src="/icon/icon-mini1.svg"
                width={32}
                height={32}
                alt="Bitcoin"
              />{" "}
              Bitcoin <span className="text-base-edusync-500">BTC</span>
            </td>
            <td className="px-6 py-4">US$ 25.499,52</td>
            <td className="px-6 py-4 text-green-edusync-700">+5,65%</td>
            <td className="px-6 py-4">
              <button className="rounded-full bg-green-edusync-700 px-6 py-1 text-white">
                Buy
              </button>
            </td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-base-edusync-500 whitespace-nowrap dark:text-white"
            >
              02
            </th>
            <td className="px-6 py-4 flex items-center gap-2">
              <Image
                src="/icon/icon-mini2.svg"
                width={32}
                height={32}
                alt="Ethereum"
              />{" "}
              Ethereum <span className="text-base-edusync-500">ETH</span>
            </td>
            <td className="px-6 py-4">US$ 15.499,52</td>
            <td className="px-6 py-4 text-red-edusync-700">-5,65%</td>
            <td className="px-6 py-4">
              <button className="rounded-full bg-green-edusync-700 px-6 py-1 text-white">
                Buy
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-base-edusync-500 whitespace-nowrap dark:text-white"
            >
              03
            </th>
            <td className="px-6 py-4 flex items-center gap-2">
              <Image
                src="/icon/icon-mini3.svg"
                width={32}
                height={32}
                alt="Cardano"
              />{" "}
              Cardano <span className="text-base-edusync-500">ADA</span>
            </td>
            <td className="px-6 py-4">US$ 5.490,52</td>
            <td className="px-6 py-4 text-red-edusync-700">-5,65%</td>
            <td className="px-6 py-4">
              <button className="rounded-full bg-green-edusync-700 px-6 py-1 text-white">
                Buy
              </button>
            </td>
          </tr>
          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-base-edusync-500 whitespace-nowrap dark:text-white"
            >
              04
            </th>
            <td className="px-6 py-4 flex items-center gap-2">
              <Image
                src="/icon/icon-mini4.svg"
                width={32}
                height={32}
                alt="Solana"
              />{" "}
              Solana <span className="text-base-edusync-500">SOL</span>
            </td>
            <td className="px-6 py-4">US$ 2.499,52</td>
            <td className="px-6 py-4 text-green-edusync-700">+5,65%</td>
            <td className="px-6 py-4">
              <button className="rounded-full bg-green-edusync-700 px-6 py-1 text-white">
                Buy
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-center font-medium text-md p-8 text-orange-edusync">View more +</p>
    </div>
  );
}
