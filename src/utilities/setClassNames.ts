interface IClassNamesObj {
  [classes: string]: boolean | undefined;
}

type ClassNamesType = string | string[] | IClassNamesObj;

/**
 *  This is a limited copy of the `classnames` npm package.
 *  Function to set CSS class names to component either in list of names
 *  or with use of object where key consists of string of class names that
 *  is only used if the value is set to true.
 */
export function setClassNames(...rest: ClassNamesType[]) {
  return rest.reduce((acc: string, curr: ClassNamesType) => {
    switch (typeof curr) {
      case "string": {
        return `${curr} ${acc}`;
      }
      case "object": {
        if (Array.isArray(curr)) {
          return `${curr.join(" ")} ${acc}`;
        }
        let tempCurr = acc;
        for (let [key, value] of Object.entries(curr)) {
          if (value) {
            tempCurr = `${key} ${tempCurr}`;
          }
        }
        return tempCurr;
      }
      default: {
        return acc;
      }
    }
  }, "");
}
