import { useState } from "react";
import { Button } from "../components";

const ButtonPage = () => {
  const [activated, setActivated] = useState<string | number>(0);

  const handleMouseOver = () => {
    console.log("Moused Over");
  };

  const handleClick = (id: string | number) => {
    setActivated(id);
    console.log("Button Clicked");
  };

  const makeActive = (id: string | number) => {
    return id === activated;
  };
  return (
    <div>
      <h1>Button Page</h1>
      <div>
        <Button
          id={1}
          onClick={handleClick}
          active={makeActive(1)}
          primary
        >
          Primary
        </Button>
      </div>
      <div>
        <Button
          id={2}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          active={makeActive(2)}
          secondary
        >
          Secondary
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
