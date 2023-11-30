import "./SmallCard.css";
import { Link } from "react-router-dom";

export default function SmallCard({
  data: { id, image, price, location, name, number_of_rooms, renting, area },
}) {
  return (
    <div className="border border-black overflow-hidden rounded-xl">
      <div className="flex justify-center">
        <Link to={`/properties/${id}`}>
          <img className="h-44 w-80" src={image} alt={`Picture of ${location}`} />
        </Link>
      </div>

      <div className="py-1 px-2">
        <div className="flex justify-between">
          <Link to={`/properties/${id}`} className="font-bold text-lg">
            {name}
          </Link>
          <small className="my-auto">{price} $</small>
        </div>

        <div className="flex">
          <div className="w-3/4">
            <div className="flex">
              <p className="w-3/4 md:w-2/3 clamp-2">
                <i className="fa-solid fa-location-dot"></i> {location}
              </p>
              <p>
                <i className="fa-solid fa-couch"></i> {number_of_rooms}
              </p>
            </div>

            <div className="flex">
              <p className="w-3/4 md:w-2/3">
                <i className="fa-solid fa-maximize"></i> {area} m2
              </p>
              <p>
                <i className="fa-solid fa-house"></i>{" "}
                {renting ? "Rent" : "Sale"}
              </p>
            </div>
          </div>

          <div className="w-1/4 flex justify-end items-end">
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
