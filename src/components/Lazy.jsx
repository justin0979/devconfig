import { useState } from "react";
import MyPic from "./my_name-32x32.png";

const Lazy = () => {
  const [comment, setComment] = useState("");

  const handleClick = (event) => {
    setComment("Who??? And Where???");
  };

  return (
    <div className="lazy">
      <h1>I think I'll just be lazy loaded</h1>
      <img className="lazy__pic" src={MyPic} alt="GIMP work of art" />
      <div onClick={handleClick} className="comment">
        {comment}
      </div>
    </div>
  );
};

export default Lazy;
