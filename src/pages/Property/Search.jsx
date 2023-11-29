import { useParams } from "react-router-dom";
import Searchbar from "../../components/Searchbar";
import { useState, useEffect } from "react";
import FilterSearch from "../../components/FilterSearch";
import BigCard from "../../components/BigCard/BigCard";

import Cta from "../../assets/homeCta.jpg";

export default function Search() {
  const { city } = useParams();

  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    minSurface: "",
    maxSurface: "",
    nmbRoom: "",
    nmbBedroom: "",
    renting: "",
    furnished: "",
    basement: false,
    terrace: false,
  });

  const data = [
    {
      id: 1,
      img: Cta,
      price: 150000,
      location: "Lagos, Nigeria Lagos, Nigeria Lagos, Nigeria Nigeria",
      name: "Lagos House",
      number_of_rooms: 6,
      renting: true,
      area: 90,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod",
    },
  ];

  function handleFilterChange(value, key) {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  useEffect(() => {
    console.log(filters);
    // IMPLEMENT SEARCH DATA
  }, [filters]);

  return (
    <div className="p-6 w-full">
      <div className="w-full p-5 flex justify-end">
        <Searchbar value={city} />
      </div>

      <FilterSearch filters={filters} setFilters={handleFilterChange} />

      <div>
        {data.map((item) => (
          <div className="mt-5" key={item.id}>
            <BigCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
