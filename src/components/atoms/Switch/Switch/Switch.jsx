import "./Switch.css";

export default function Switch({handleChange, value}) {
  return (
    <div className="flex">
      <label className="switch">
        <input onChange={handleChange} type="checkbox" />
        <span className="slider round"></span>
      </label>
      <p className="my-auto ml-5">{value ? 'Renting' : 'Selling'}</p>
    </div>
  );
}
