import Vinita from "../assets/Home/Ayesha.svg";
import Milly from "../assets/Home/Marin.svg";
function Contact() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 space-x-16 mx-0 lg:items-start lg:h-full">
      {/* Left Column: Heading + List of People */}
      <div className="flex flex-col justify-between h-full space-y-0 ">
        <div className="flex text-left ">
          <h2 className="text-7xl font-semibold font-everett">
            LET'S START SOMETHING <br />{" "}
            <span className="text-red-500">NEW</span> <br />
            TOGETHER
          </h2>
        </div>

        {/* List of People */}
        <div className="flex gap-4">
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
              className="flex flex-col border-l-[2px] gap-y-2 space-x-4  "
            >
              <img
                src={person.image}
                alt={person.name}
                className="object-cover w-16 h-16 my-1 rounded-full mx-4"
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
      <div className="pb-8 gap-x-8 w-[70%] pt-4 ">
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
