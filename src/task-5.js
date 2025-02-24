import { consola } from "consola";

export const devidedAndSort = (input) => {
  if (typeof input !== "number") return console.log("input must be a number");
  const devided = input.toString().split("0");
  const sort = devided.map((number) => number.split("").sort().join(""));
  const result = sort.join("");
  return consola.success(result);
};
