import { useState } from "react";
import Switch from "../../components/atoms/Switch/Switch";
import { useEffect } from "react";

export default function New() {
    const [renting, setRenting] = useState(false)
    useEffect(() => {
        console.log(renting)
        if(renting) {
            console.log("Renting")
        } else {
            console.log("Selling")
        }
        return () => {} // cleanup function
    
    })

    function handleChange(){
        setRenting(!renting)
    }
  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl">Add your property</h1>

      <div className="mt-5"></div>

      <div><Switch value={renting}  handleChange={handleChange}/></div>
    </div>
  );
}
