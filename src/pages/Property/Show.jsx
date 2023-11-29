import { useState } from "react";
import Searchbar from "../../components/Searchbar";
import { useEffect } from "react";
import checkAuth from "../../utils/checkAuth";

export default function Show() {
  const [data, setData] = useState({});
  const [selectedImage, setSelectedImages] = useState("");

  // useEffect(() => {
  //     fetch('', {
  //         method: 'GET',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         }
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //         // console.log(data)

  //         // setData(data)
  //         // setSelectedImages(data.images[0])

  //     })

  // }, [])

  return (
    <div className="p-6 w-full">
      <div className="w-full p-5 flex justify-end">
        <Searchbar />
      </div>

      <section>
        <img src={selectedImage} alt="Property image" />

        <div></div>

        <div className="w-full">
          <h1 className="text-4xl font-bold">Title</h1>
          <ul className="flex list-disc ml-5">
            <li>2 Rooms</li>
            <li className="mx-5">2 Bedrooms</li>
            <li>45 m²</li>
          </ul>

          <div className="flex mt-5">
            <div className="w-2/3">
              <h2 className="text-xl font-bold">Description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </p>
            </div>

            <aside className="w-1/3 bg-gray-300 p-3">
              <p className="font-bold">Type :</p>
              <p className="ml-3">To Rent</p>

              <p className="mt-4 font-bold">Address :</p>
              <p className="ml-3">1 Av de Paris</p>

              {checkAuth() ? (
                <>
                  <p className="mt-4 font-bold">Email :</p>
                  <p className="ml-3">Example@gmail.com</p>
                </>
              ) : (
                ""
              )}

              <p className="mt-4 font-bold">Furnished :</p>
              <p className="ml-3">Yes</p>

              <p className="mt-4 font-bold">Terrace :</p>
              <p className="ml-3">Yes</p>

              <p className="mt-4 font-bold">Basement :</p>
              <p className="ml-3">Yes</p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
