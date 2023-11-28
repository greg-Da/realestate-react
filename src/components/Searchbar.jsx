export default function Searchbar() {
  return (
    <div className="border-2 py-1 px-2 rounded-full shadow-lg">
      <input
        type="text"
        placeholder="Search City"
        className="border-0 outline-none bg-transparent"
      />
      <i className="text-gray-400 fa-solid fa-magnifying-glass"></i>
    </div>
  );
}
