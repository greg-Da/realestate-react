import { useRef } from "react";

export default function FileInput({ uploadFile }) {
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="flex">
      <button onClick={handleClick}>Upload</button>
      <input
        ref={hiddenFileInput}
        type="file"
        className="hidden"
        onChange={uploadFile}
      />
    </div>
  );
}
