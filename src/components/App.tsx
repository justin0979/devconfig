import { Provider } from "react-redux";
import { store } from "&state";
import Users from "&components/Users";
import ripple from "&src/ripple.svg";
import favIcon from "&images/favicon-32x32.png";

interface Content {
  h1: string;
  text: string;
  reference: string;
  refDesc: string;
}

const componentContent: Content = {
  h1: "With Typescript",
  text: "This works",
  reference:
    "https://medium.com/@dahvinchee/how-to-set-up-a-react-typescript-project-from-scratch-with-babel-and-webpack-6b069881229d",
  refDesc: `There are lots of articles with explanations 
    (like this one)`,
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app" data-test="appComponent">
        <img src={favIcon} alt="Name" />
        <img src={ripple} alt="Rippling" />
        <h1>{componentContent.h1}</h1>
        <p>{componentContent.text}</p>
        <div className="content">
          <a href={componentContent.reference}>
            {componentContent.refDesc}
          </a>
          <div>
            Or, just run `tsc --init` after `npm install
            typescript`.
            <p>
              You will have to look up any configurations
              though.
            </p>
          </div>
        </div>
        <Users />
      </div>
    </Provider>
  );
};

export default App;
