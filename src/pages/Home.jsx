import { useEffect, useState } from "react";
import Cta from "../assets/homeCta.jpg";
import Searchbar from "../components/Searchbar";
import SmallCard from "../components/SmallCard/SmallCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [recentlyAdded, setRecentlyAdded] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [selling, setSelling] = useState([]);

  useEffect(() => {
    fetch("https://realestate-api-ec44019958c8.herokuapp.com/properties")
      .then((response) => response.json())
      .then((data) => {
        setRecentlyAdded(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(
      "https://realestate-api-ec44019958c8.herokuapp.com/properties/type/renting"
    )
      .then((response) => response.json())
      .then((data) => {
        setRentals(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(
      "https://realestate-api-ec44019958c8.herokuapp.com/properties/type/selling"
    )
      .then((response) => response.json())
      .then((data) => {
        setSelling(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-full">
      <div className="relative text-white">
        <img
          className="max-h-[80vh]"
          style={{ width: "-moz-available" }}
          src={Cta}
        />
        <h1 className="absolute md:text-3xl text-lg font-bold top-[35%] left-[7%]">
          Want to find your dream house?
        </h1>
        <Link to={"/properties/search/Paris"}>
          <button className="px-2 py-1 md:px-4 md:py-2 bg-red-500 rounded-full text-white font-bold text-lg absolute bottom-4 right-5 md:bottom-12 md:right-14 hover:bg-red-600 transition-all duration-300 ease-in-out">
            Let's go
          </button>
        </Link>
      </div>

      <div className="w-full p-5 flex justify-end">
        <Searchbar />
      </div>

      <div className="p-4">
        <div className="flex flex-col items-center">
          <div className="xl:w-3/4">
            <p className="mb-5 mt-12 font-bold text-2xl">Recently added</p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              {recentlyAdded.map((item) => (
                <SmallCard key={item.id} data={item} />
              ))}
            </div>
          </div>

          <div className="xl:w-3/4">
            <p className="mb-5 mt-12 font-bold text-2xl">To rent</p>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              {rentals.map((item) => (
                <SmallCard key={item.id} data={item} />
              ))}
            </div>
          </div>

          <div className="xl:w-3/4">
            <p className="mb-5 mt-12 font-bold text-2xl">To sale</p>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              {selling.map((item) => (
                <SmallCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
