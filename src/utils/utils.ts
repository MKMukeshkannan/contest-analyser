export const csvToArr = (stringVal: string, splitter: string) => {
  const [keys, ...rest] = stringVal
    .trim()
    .split("\n")
    .map((item) => item.split(splitter));

  const formedArr = rest.map((item) => {
    const object: { [key: string]: string } = {};
    keys.forEach((key, index) => {
      object[key] = item[index];
    });
    return object;
  });
  return formedArr;
};
