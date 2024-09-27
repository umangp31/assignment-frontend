
import Hero from "../../components/Hero";
import Marque from "../../components/Marque";
import Points from "../../components/Points";

function Home() {
  return (
    <div className="">
      <section className="homeSection h-screen pt-9 pr-[45px] pb-0 pl-[45px] ">
        <Hero/>
      </section>
      <nav className=" w-screen px-0 mx-0">
        <Marque/>
      </nav>
      <section className="h-screen w-screen mt-8 pt-16 px-[44px] bg-pink-40 " >
        <Points/>
      </section>
    </div>
  );
}

export default Home;
