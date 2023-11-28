import Cta from "../assets/homeCta.jpg";
import Searchbar from "../components/Searchbar";
import SmallCard from "../components/SmallCard/SmallCard";

import homeCta from "../assets/homeCta.jpg";

export default function Home() {
  const data = {
    id: 1,
    img: homeCta,
    price: 150000,
    location: "Lagos, Nigeria Lagos, Nigeria Lagos, Nigeria Nigeria",
    name: "Lagos House",
    number_of_rooms: 6,
    renting: true,
    area: 90,
  };
  return (
    <div>
      <div className="relative text-white">
        <img src={Cta} />
        <h1 className="absolute md:text-3xl text-lg font-bold top-[35%] left-[7%]">
          Want to find your dream house?
        </h1>
        <button className="px-2 py-1 md:px-4 md:py-2 bg-red-500 rounded-full text-white font-bold text-lg absolute bottom-4 right-5 md:bottom-12 md:right-14 hover:bg-red-600 transition-all duration-300 ease-in-out">
          Let's go
        </button>
      </div>

      <div className="w-full p-5 flex justify-end">
        <Searchbar />
      </div>

      <div className="p-4">
        <div>
          <h2 className="mb-5 font-bold text-2xl">Recently added</h2>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
            <SmallCard data={data} />
            <SmallCard data={data} />
            <SmallCard data={data} />
            <SmallCard data={data} />
            <SmallCard data={data} />
            <SmallCard data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
