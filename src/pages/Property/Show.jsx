import { useState } from "react";
import Searchbar from "../../components/Searchbar";
import { useEffect } from "react";
import checkAuth from "../../utils/checkAuth";
import { useParams } from "react-router-dom";

export default function Show() {
  const [
    {
      area,
      price,
      name,
      location,
      city,
      description,
      furnished,
      basement,
      renting,
      terrace,
      number_of_rooms,
      number_of_bedrooms,
    },
    setData,
  ] = useState({});
  const [selectedImage, setSelectedImages] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/properties/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        // setSelectedImages(data.images[0])
      });
  }, [id]);

  return (
    <div className="p-6 w-full">
      <div className="w-full p-5 flex justify-end">
        <Searchbar />
      </div>

      <section>
        <img src={selectedImage} alt="Property image" />

        <div></div>

        <div className="w-full">
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold">{name}</h1>
              <ul className="flex list-disc ml-5">
                <li>{number_of_rooms} Rooms</li>
                <li className="mx-5">{number_of_bedrooms} Bedrooms</li>
                <li>{area} m²</li>
              </ul>
            </div>
            <p className="mt-1">{price} $</p>
          </div>

          <div className="md:flex mt-5">
            <div className="w-2/3">
              <h2 className="text-xl font-bold">Description</h2>
              <p>{description}</p>
            </div>

            <aside className="md:w-1/3 bg-gray-300 p-3">
              <p className="font-bold">Type :</p>
              <p className="ml-3">{renting ? "To Rent" : "For Sale"}</p>

              <p className="mt-4 font-bold">Address :</p>
              <p className="ml-3">{location}</p>

              <p className="mt-4 font-bold">City :</p>
              <p className="ml-3">{city}</p>

              {checkAuth() ? (
                <>
                  <p className="mt-4 font-bold">Email :</p>
                  <p className="ml-3">Example@gmail.com</p>
                </>
              ) : (
                ""
              )}

              <p className="mt-4 font-bold">Furnished :</p>
              <p className="ml-3">{furnished ? "Yes" : "No"}</p>

              <p className="mt-4 font-bold">Terrace :</p>
              <p className="ml-3">{terrace ? "Yes" : "No"}</p>

              <p className="mt-4 font-bold">Basement :</p>
              <p className="ml-3">{basement ? "Yes" : "No"}</p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
