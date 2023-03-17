interface IClassNamesObj {
  [classes: string]: boolean | undefined;
}

type ClassNamesType = string | string[] | IClassNamesObj;

export function classNamesClone(...rest: ClassNamesType[]) {
  return rest.reduce((acc: string, curr: ClassNamesType) => {
    switch (typeof curr) {
      case "string": {
        return `${curr} ${acc}`;
      }
      case "object": {
        if (Array.isArray(curr)) {
          return `${curr.join(" ")} ${acc}`;
        }
        for (let [key, value] of Object.entries(curr)) {
          if (value) {
            return `${key} ${acc}`;
          }
        }
      }
      default: {
        return acc;
      }
    }
  }, "");
}
