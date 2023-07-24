import Image from "next/image";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";
import Table from "@/components/Table";
import Footer from "@/components/Footer";
import Accordeon from "@/components/Accordeon";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="tablet:mt-28 mobile:mt-2">
        <section>
          <Banner />
        </section>

        <Image className="py-10 pb-10" src="/img/divider.svg" width={1920} height={247} alt="Icon" />
        <section>
          <Solutions />
        </section>

        <section className="mobile:hidden tablet:block container px-9 pb-20">
          <Table />
        </section>

        <section className="tablet:hidden mobile:block container">
          <Accordeon />
        </section>
      </main>
      <Footer />
    </>
  );
}
