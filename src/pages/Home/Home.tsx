
import Contact from "../../components/Contact";
import FAQ from "../../components/FAQ";
import Hero from "../../components/Hero";
import Marque from "../../components/Marque";
import Points from "../../components/Points";
import Stats from "../../components/Stats";
import TagLine from "../../components/TagLine";
import Testimony from "../../components/Testimony";

function Home() {
  return (
    <div className="flex flex-col lg:overflow-x-hidden ">
      <section className="lg:w-screen h-full lg:px-[90px] lg:h-screen lg:pt-9  lg:pb-0 ">
        <Hero/>
      </section>
      <nav className=" w-screen py-6 lg:py-0 ">
        <Marque/>
      </nav>
      <section className="lg:h-screen w-screen mt-8 pt-4 lg:pt-16 lg:px-[90px]" >
        <Points/>
      </section>
      <section className="w-screen lg:px-[90px]" >
        <Stats/>
      </section>
      <section className="w-screen lg:px-[90px] " >
        <Testimony/>
      </section>
      <section className="w-screen lg:px-[90px]" >
        <FAQ/>
      </section>
      <article className="w-screen lg:px-[90px] py-24 bg-[#F1F2F6] " >
        <Contact/>
      </article>
      <nav className=" w-screen ">
        <TagLine/>
      </nav>
    </div>
  );
}

export default Home;
