import "./BigCard.css";
import { Link } from "react-router-dom";

export default function BigCard({
  data: { id, img, price, location, name, number_of_rooms, renting, area, description },
}) {

  return (
    <div className="border border-black overflow-hidden rounded-xl md:flex">
      
      <Link className="w-[45%]" to={`/properties/${id}`}>
        <img src={img} alt={`Picture of ${location}`} />
      </Link>

      <div className="py-1 px-2 md:w-full">
        <div className="flex justify-between">
          <Link to={`/properties/${id}`} className="font-bold text-lg md:text-2xl">
            {name}
          </Link>
          <small className="my-auto md:text-lg">{price} $</small>
        </div>

        <div className="flex">
          <div className="w-3/4 md:w-[40%]">
            <div className="flex md:block md:mt-2">
              <p className="w-3/4 md:w-full clamp-2">
                <i className="fa-solid fa-location-dot"></i> {location}
              </p>
              <p>
                <i className="fa-solid fa-couch"></i> {number_of_rooms}
              </p>
            </div>

            <div className="flex md:block">
              <p className="w-3/4">
                <i className="fa-solid fa-maximize"></i> {area} m2
              </p>
              <p>
                <i className="fa-solid fa-house"></i>{" "}
                {renting ? "Rent" : "Sale"}
              </p>
            </div>
          </div>

          <div className="w-3/4 hidden md:block md:mt-2">
            <p className="clamp-5">{description}</p>
          </div>

          <div className="w-1/4 md:w-fit flex justify-end items-end">
            <Link
              to={`/properties/${id}`}
              className="flex justify-center items-center w-10 h-10 bg-red-500 rounded-full text-white font-bold text-lg hover:bg-red-600 transition-all duration-300 ease-in-out"
            >
              <i className=" fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
