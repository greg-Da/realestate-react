import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Searchbar({value = ''}) {

  const [search, setSearch] = useState(value)
  let navigate = useNavigate()

  function handleKey(e){
    if (e.key === 'Enter'){
      navigate(`properties/search/${search}`)
    }
  }


  return (
    <div className="border-2 py-1 px-2 rounded-full shadow-lg">
      <input
        type="text"
        value={search}
        onKeyDown={(e) => handleKey(e)}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search City"
        className="border-0 outline-none bg-transparent"
      />
      <i className="text-gray-400 fa-solid fa-magnifying-glass"></i>
    </div>
  );
}
