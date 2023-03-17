interface IClassNamesObj {
  [classes: string]: boolean | undefined;
}

type ClassNamesType = string | string[] | IClassNamesObj;

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
