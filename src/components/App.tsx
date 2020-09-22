import React from "react";

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
  refDesc:
    "This article has config file examples...like a much longer tsconfig.json",
};

const App = (): JSX.Element => {
  return (
    <div className="app" data-test="appComponent">
      <h1>{componentContent.h1}</h1>
      <p>{componentContent.text}</p>
      <div>
        <a href={componentContent.reference}>
          {componentContent.refDesc}
        </a>
        <div>
          Or, just run `tsc --init` after `npm install typescript`.
        </div>
      </div>
    </div>
  );
};

export default App;
