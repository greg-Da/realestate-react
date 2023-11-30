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
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/properties/search/${city}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setFilteredData(data);
      });
  }, [city]);

  useEffect(() => {
    let filtered = data;

    if (filters.minPrice !== "") {
      filtered = filtered.filter(
        (item) => item.price >= parseInt(filters.minPrice)
      );
    }

    if (filters.maxPrice !== "") {
      filtered = filtered.filter(
        (item) => item.price <= parseInt(filters.maxPrice)
      );
    }

    if (filters.minSurface !== "") {
      filtered = filtered.filter(
        (item) => item.area >= parseInt(filters.minSurface)
      );
    }

    if (filters.maxSurface !== "") {
      filtered = filtered.filter(
        (item) => item.area <= parseInt(filters.maxSurface)
      );
    }

    if (filters.nmbBedroom !== "") {
      filtered = filtered.filter(
        (item) => item.number_of_bedrooms >= parseInt(filters.nmbBedroom)
      );
    }

    if (filters.nmbRoom !== "") {
      filtered = filtered.filter(
        (item) => item.number_of_rooms >= parseInt(filters.nmbRoom)
      );
    }

    if (filters.furnished !== "") {
      const bool = filters.furnished === "true";
      filtered = filtered.filter((item) => item.furnished === bool);
    }

    if (filters.renting !== "") {
      const bool = filters.renting === "true";
      filtered = filtered.filter((item) => item.renting === bool);
    }

    if (filters.basement === true) {
      filtered = filtered.filter((item) => item.basement === true);
    }

    if (filters.terrace === true) {
      filtered = filtered.filter((item) => item.terrace === true);
    }

    setFilteredData(filtered);
  }, [filters, data]);

  function handleFilterChange(value, key) {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <div className="p-6 w-full">
      <div className="w-full p-5 flex justify-end">
        <Searchbar value={city} />
      </div>

      <FilterSearch filters={filters} setFilters={handleFilterChange} />

      <div>
        {filteredData.map((item) => (
          <div className="mt-5" key={item.id}>
            <BigCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
