import Image from "next/image";

export default function Banner() {
  return (
    <div className="tablet:grid tablet:grid-cols-2 items-center justify-start tablet:px-6 mobile:text-center tablet:text-left">
      <div className="font-bold text-orange-edusync desktop:w-590 space-y-6 tablet:block tablet:container mobile:px-2 mobile:flex mobile:flex-col mobile:items-center">
        <h1 className="desktop:text-5xl tablet:text-32 mobile:text-20 leading-58 mobile:leading-40">
          Lorem ipsum dolor sit amet, consectetur
        </h1>
        <h2 className="text-base-edusync leading-8 font-normal desktop:pr-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </h2>
        <button className="bg-orange-edusync text-md text-white p-3 px-16 rounded-full flex items-center gap-2">
          SIGN UP NOW{" "}
          <Image src="/icon/right.svg" width={12} height={12} alt="Icon" />
        </button>

        <div className="flex gap-4 font-normal pt-10">
          <button className="rounded-sm bg-orange-edusync-100 px-2 py-1">
            Cryptos
          </button>
          <button className="rounded-sm bg-orange-edusync-100 px-2 py-1">
            NFTs
          </button>
          <button className="rounded-sm bg-orange-edusync-100 px-2 py-1">
            Games
          </button>
        </div>
      </div>
      <Image className="tablet:block hidden" src="/img/person.svg" width={1392} height={499} alt="Icon" />
    </div>
  );
}
