
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
    <div className="flex flex-col">
      <section className="homeSection h-screen pt-9 pr-[45px] pb-0 pl-[45px] ">
        <Hero/>
      </section>
      <nav className=" w-screen px-0 mx-0">
        <Marque/>
      </nav>
      <section className="h-screen w-screen mt-8 pt-16 px-[44px]" >
        <Points/>
      </section>
      <section className="w-screen px-[44px]" >
        <Stats/>
      </section>
      <section className="w-screen px-11" >
        <Testimony/>
      </section>
      <section className="w-screen px-11" >
        <FAQ/>
      </section>
      <article className="w-screen mx-0 px-[86px] py-24 bg-[#F1F2F6] " >
        <Contact/>
      </article>
      <nav className=" w-screen px-0 mx-0">
        <TagLine/>
      </nav>
    </div>
  );
}

export default Home;
