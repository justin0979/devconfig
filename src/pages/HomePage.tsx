import { useState, ReactNode } from "react";
import { Users } from "../components";
import ripple from "../ripple.svg";
import favIcon from "../images/my_name-32x32.png";

interface Content {
  reference: string;
  refDesc: string;
}

const componentContent: Content = {
  reference:
    "https://medium.com/@dahvinchee/how-to-set-up-a-react-typescript-project-from-scratch-with-babel-and-webpack-6b069881229d",
  refDesc: `There are lots of articles with explanations 
    (like this one) for setup, like the tsconfig.json`,
};

const HomePage = () => {
  const [show, setShow] = useState(false);

  const renderButton = (): ReactNode => {
    if (show) {
      return (
        <button className="btn" onClick={() => setShow(false)}>
          Remove All Users
        </button>
      );
    }
    return (
      <button className="btn" onClick={() => setShow(true)}>
        Get Users with Axios
      </button>
    );
  };

  return (
    <div data-test="appComponent">
      <span className="home-icon">
        <img src={favIcon} alt="Name" />
        <img src={ripple} alt="Rippling" />
      </span>
      <h1 data-testid="h1test">React With Typescript</h1>
      <p>
        This works, but just know that I typed this up over a couple of
        years ago
      </p>
      <div className="content">
        <a href={componentContent.reference}>
          {componentContent.refDesc}
        </a>
        <div>
          Or, just run `tsc --init` after `npm install typescript`.
          <p>You will have to look up any configurations though.</p>
        </div>
      </div>
      {renderButton()}
      {show && <Users />}
    </div>
  );
};

export default HomePage;
