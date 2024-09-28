import Vinita from "../assets/Home/Ayesha.svg";
import Milly from "../assets/Home/Marin.svg";
function Contact() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-16 mx-0 lg:items-start lg:h-full px-6 lg:px-0 ">
      {/* Left Column: Heading + List of People */}
      <div className="lg:flex lg:flex-col lg:justify-between h-full space-y-8 lg:space-y-0 ">
        <div className="lg:flex text-left ">
          <h2 className=" text-5xl lg:text-7xl font-semibold font-everett">
            LET'S START SOMETHING <br />{" "}
            <span className="text-red-500">NEW</span> <br />
            TOGETHER
          </h2>
        </div>

        {/* List of People */}
        <div className="lg:flex gap-4">
          {[
            {
              name: "Milly Cyrus",
              title: "Global Lead",
              description:
                "All-round advertising go-to lady. Has a thing for stories; she calls this the side effect of a life lived with plot twists.",
              image: Milly,
            },
            {
              name: "Vinita Singh",
              title: "Asst. Global Lead",
              description:
                "All-round advertising go-to lady. Has a thing for stories; she calls this the side effect of a life lived with plot twists.",
              image: Vinita,
            },
          ].map((person, index) => (
            <div
              key={index}
              className="flex flex-col border-b-[2px] justify-center items-center lg:items-baseline lg:justify-start mx-4 lg:mx-0  lg:border-b-0 lg:border-l-[2px] gap-y-2 lg:space-x-4  "
            >
              <img
                src={person.image}
                alt={person.name}
                className="my-3 lg:my-1 object-cover w-28 h-28 lg:w-16 lg:h-16  rounded-full mx-4"
              />
              <div>
                <p className="text-gray-600 my-1">{person.description}</p>
                <h4 className="font-bold my-4">
                  {person.name}, {person.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="flex flex-col lg:block justify-center items-center self-center mx-0 lg:mx-0 px-0 lg:px-0 w-fit pb-8 lg:gap-x-8 lg:w-[70%] pt-8 lg:pt-4 ">
        <h3 className="text-2xl font-semibold font-opensans">
          Give us a few details and we’ll get in touch
        </h3>
        <form className="pb-8 pt-4 bg-transparent ">
          <input
            type="text"
            placeholder="Name*"
            className="w-full px-3 py-5 bg-transparent border-b border-[#525252] focus:outline-none focus:border-b-[1px] focus:border-red-500"
          />
          <input
            type="text"
            placeholder="Company name*"
            className="w-full px-3 py-5 bg-transparent border-b border-[#525252] focus:outline-none focus:border-b-[1px] focus:border-red-500"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full px-3 py-5 bg-transparent border-b border-[#525252] focus:outline-none focus:border-b-[1px] focus:border-red-500"
          />
          <input
            type="text"
            placeholder="Phone no*"
            className="w-full px-3 py-5 bg-transparent border-b border-[#525252] focus:outline-none focus:border-b-[1px] focus:border-red-500"
          />
          <input
            type="text"
            placeholder="Message*"
            className="w-full px-3 py-5 bg-transparent border-b border-[#525252] focus:outline-none focus:border-b-[1px] focus:border-red-500"
          />
          <button
            type="submit"
            className="w-full px-6 py-4 mt-10 rounded-full font-bold text-white transition duration-300 bg-red-500 hover:bg-red-600"
          >
            CONTACT US →
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
