import { useState} from "react";

export default function FilterSearch({filters, setFilters}) {
  const [showFilter, setShowFilter] = useState(false);

  const {minPrice, maxPrice, minSurface, maxSurface, nmbRoom, nmbBedroom, basement, terrace, renting, furnished} = filters;

  return (
    <div className="bg-gray-300 p-3 text-black rounded-md">
      <div className={`${showFilter ? "block" : "hidden md:block"}`}>
        <div className="flex flex-wrap md:justify-between">
          <div className="md:w-[47%]">
            <label>Price :</label>
            <div className="flex justify-center items-center">
              <input
                type="number"
                placeholder="Min"
                className="rounded-full w-full border p-2 outline-none"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*)\./g, "$1"))
                }
                value={minPrice}
                onChange={(e) => setFilters(e.target.value, "minPrice") }
              />
              <i className="fa-solid fa-arrow-right text-2xl mx-3"></i>
              <input
                type="number"
                placeholder="Max"
                className="rounded-full w-full border p-2 outline-none"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*)\./g, "$1"))
                }
                value={maxPrice}
                onChange={(e) => setFilters(e.target.value, "maxPrice")}
              />
            </div>
          </div>

          <div className="mt-5 md:mt-0 md:w-[47%]">
            <label>Surface :</label>
            <div className="flex justify-center items-center">
              <input
                type="number"
                placeholder="Min"
                className="rounded-full w-full border p-2 outline-none"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*)\./g, "$1"))
                }
                value={minSurface}
                onChange={(e) => setFilters(e.target.value, 'minSurface')}
              />
              <i className="fa-solid fa-arrow-right text-2xl mx-3"></i>
              <input
                type="number"
                placeholder="Max"
                className="rounded-full w-full border p-2 outline-none"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*)\./g, "$1"))
                }
                value={maxSurface}
                onChange={(e) => setFilters(e.target.value, 'maxSurface')}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:mt-5 justify-between">
          <div className="w-full mt-5 md:mt-0 md:w-1/5">
            <label>Nmb of Rooms :</label>
            <div className="flex justify-center items-center">
              <input
                type="number"
                placeholder="Rooms"
                className="rounded-full w-full border p-2 outline-none"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*)\./g, "$1"))
                }
                value={nmbRoom}
                onChange={(e) => setFilters(e.target.value, 'nmbRoom')}
              />
            </div>
          </div>

          <div className="w-full mt-5 md:mt-0 md:w-1/5">
            <label>Nmb of Bedrooms :</label>
            <div className="flex justify-center items-center">
              <input
                type="number"
                placeholder="Bedrooms"
                className="rounded-full w-full border p-2 outline-none"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*)\./g, "$1"))
                }
                value={nmbBedroom}
                onChange={(e) => setFilters(e.target.value, 'nmbBedroom')}
              />
            </div>
          </div>
          <div className="w-full mt-5 md:mt-0 md:w-1/5">
            <label>Furnished :</label>
            <div className="flex justify-center items-center">
              <select
                className="rounded-full bg-white w-full border p-2 outline-none"
                value={furnished}
                onChange={(e) => setFilters(e.target.value, 'furnished')}
                name="furnished"
              >
                <option value="">Any</option>
                <option value={"true"}>Yes</option>
                <option value={"false"}>No</option>
              </select>
            </div>
          </div>

          <div className="w-full md:w-1/5 mt-5 md:mt-0">
            <label>Type :</label>
            <div className="flex justify-center items-center">
              <select
                className="rounded-full bg-white w-full border p-2 outline-none"
                value={renting}
                onChange={(e) => setFilters(e.target.value, 'renting')}
                name="type"
              >
                <option value="">Any</option>
                <option value={"true"}>To Rent</option>
                <option value={"false"}>To Sale</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full mt-5 flex justify-around md:justify-center">
          <label className="md:mr-2">
            <input
              type="checkbox"
              className="mr-3 w-4 h-4"
              checked={basement}
              onChange={() => setFilters(!basement, 'basement')}
            />
            Basement
          </label>

          <label className="md:ml-2">
            <input
              type="checkbox"
              className="mr-3 w-4 h-4"
              checked={terrace}
              onChange={() => setFilters(!terrace, 'terrace')}
            />
            Terrace
          </label>
        </div>
      </div>

      <div
        className={`${
          showFilter ? "hidden" : "block md:hidden"
        } flex justify-center`}
      >
        <button onClick={() => setShowFilter(true)}>Show filter</button>
      </div>
    </div>
  );
}
