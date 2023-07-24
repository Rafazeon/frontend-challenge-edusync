import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div
        style={{ backgroundImage: "url('/img/bg-footer.svg')" }}
        className="tablet:h-96 mobile:h-98 bg-cover"
      >
        <div className="container mobile:py-5">
          <div className="tablet:grid tablet:grid-cols-2 h-96 desktop:px-32 mobile:space-y-10">
            <div className="flex flex-col mobile:justify-center desktop:w-96 mobile:w-full">
              <p className="text-orange-edusync-200 tablet:text-2xl mobile:text-md">Lorem ipsum</p>
              <h2 className="text-white desktop:text-40 py-2 pb-4 tablet:text-32 mobile:text-2xl font-bold">Lorem ipsum</h2>
              <p className="text-white text-md mobile:w-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
            </div>

            <div className="flex flex-col justify-center desktop:w-96 mobile:w-full">
              <label className="text-white pb-2">Email</label>
              <input className="p-3 rounded-lg" placeholder="Email" />
              <button className="bg-orange-edusync rounded-full text-white mt-5 p-3">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex tablet:justify-between mobile:justify-center tablet:p-6 mobile:pt-6">
            <p className="text-base-edusync mobile:hidden tablet:block">Copyright © 2022 - All rights reserved</p>
            <Image src="/img/mini-logo.svg" width={94} height={16} alt="Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
