import { consola } from "consola";

export async function getDataFromServer(status, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve(callback(["product1", "product2", "product3"], null));
      } else {
        const err = new Error("Failed to fetch data");
        err.name = "Error";
        reject(callback(null, err));
      }
    }, 3000);
  });
}

export async function processData(data, err) {
  try {
    const responseServer = await data;
    if (responseServer === null) throw new Error(err);
    if (!(responseServer instanceof Object))
      throw new Error(
        "The data type retrieved by the server is not an object or array"
      );
    return console.log(responseServer);
  } catch (err) {
    if (err instanceof Error) return console.log(err.message);
  } finally {
    consola.success("Proses selesai");
  }
}
