import { Users } from "&src/components";
import ripple from "&src/ripple.svg";
import favIcon from "&images/favicon-32x32.png";

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
  return (
    <div className="home" data-test="appComponent">
      <img src={favIcon} alt="Name" />
      <img src={ripple} alt="Rippling" />
      <h1>With Typescript</h1>
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
      <Users />
    </div>
  );
};

export default HomePage;
