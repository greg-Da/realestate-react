import { useState } from "react";
import Switch from "../../components/atoms/Switch/Switch";
import { useEffect } from "react";
import FileInput from "../../components/atoms/Switch/FileInput";

export default function New() {
  const [images, setImages] = useState([]);
  const [renting, setRenting] = useState(false);
  const [basement, setBasement] = useState(false);
  const [terrace, setTerrace] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [surface, setSurface] = useState(0);
  const [nmbRooms, setNmbRooms] = useState(0);
  const [nmbBedrooms, setNmbBedrooms] = useState(0);

  const cities = [
    "Paris",
    "Nice",
    "Toulouse",
    "Bordeaux",
    "Marseille",
    "Nantes",
    "Lyon",
  ];

  useEffect(() => {
    console.log(images);
  }, [images]);

  function handleChange() {
    setRenting(!renting);
  }

  function handleFileUpload(e) {
    setImages((prev) => [...prev, URL.createObjectURL(e.target.files[0])]);
  }

  return (
    <div className="p-6 w-full m-auto xl:w-2/3">
      <h1 className="font-bold text-3xl text-center">Add your property</h1>

      <div className="my-5 grid grid-cols-2 md:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <img className="w-auto h-auto " key={index} src={image} />
        ))}
        {images.length < 5 ? <FileInput uploadFile={handleFileUpload} /> : ""}
      </div>

      <div>
        <Switch value={renting} handleChange={handleChange} />

        <div className="mt-3">
          <label htmlFor="address">Address :</label>
          <input
            className="text-black w-full rounded-full border p-2 outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            name="address"
            placeholder="Address"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="city">City :</label>

          <select
            className="text-black rounded-full border p-2 outline-none bg-white w-full"
            name="city"
            onChange={(e) => setCity(e.target.value)}
          >
            <option hidden value="">
              Choose option
            </option>

            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-3">
          <label htmlFor="price">Price :</label>
          <input
            name="price"
            className="text-black w-full rounded-full border p-2 outline-none"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Price"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="description">Description :</label>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full text-black rounded-md border p-2 outline-none"
            name="description"
            rows="10"
          ></textarea>
        </div>

        <div className="mt-3">
          <label htmlFor="surface">Surface :</label>
          <input
            className="text-black w-full rounded-full border p-2 outline-none"
            value={surface}
            onChange={(e) => setSurface(e.target.value)}
            type="number"
            placeholder="Surface"
            name="surface"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="nmbRooms">Number of Rooms :</label>
          <input
            className="text-black w-full rounded-full border p-2 outline-none"
            value={nmbRooms}
            onChange={(e) => setNmbRooms(e.target.value)}
            type="number"
            name="nmbRooms"
            placeholder="Number of Rooms"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="nmbRooms">Number of Rooms :</label>
          <input
            className="text-black w-full  rounded-full border p-2 outline-none"
            value={nmbBedrooms}
            onChange={(e) => setNmbBedrooms(e.target.value)}
            name="nmbBedrooms"
            type="number"
            placeholder="Number of Bedrooms"
          />
        </div>

        <div className="flex justify-around mt-3">
          <label>
            <input
              type="checkbox"
              className="mr-3 w-4 h-4"
              checked={basement}
              onChange={() => setBasement(!basement)}
            />
            Basement
          </label>

          <label>
            <input
              type="checkbox"
              className="mr-3 w-4 h-4"
              checked={terrace}
              onChange={() => setTerrace(!terrace)}
            />
            Terrace
          </label>

          <label>
            <input
              type="checkbox"
              className="mr-3 w-4 h-4"
              checked={furnished}
              onChange={() => setFurnished(!furnished)}
            />
            Furnished
          </label>
        </div>
      </div>

      <div className="w-full flex justify-center mt-5">
        <button
          disabled={`${address && description && city ? "" : "disabled"}`}
          className={`px-2 py-1 md:px-4 md:py-2 ${
            address && description && city
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gray-400"
          }  rounded-full text-white font-bold text-lg transition-all duration-300 ease-in-out`}
        >
          Add your property
        </button>
      </div>
    </div>
  );
}
