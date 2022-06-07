type TObject = Record<string, any>;

const flattener = (obj: TObject) => {
  const result: TObject = {};

  const flatten = (obj: TObject, path: string) => {
    for (let key in obj) {
      const newPath = path.length > 0 ? path + "." + key : key;

      if (typeof obj[key] === "object") {
        flatten(obj[key], newPath);
      } else {
        result[newPath] = obj[key];
      }
    }
  };

  flatten(obj, "");

  return result;
};

export default flattener;
