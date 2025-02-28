import { consola } from "consola";

export const getData = async (url) => {
  try {
    const responseServer = await fetch(url);
    if (!responseServer.ok) throw new Error("Failed to fetch data");
    const dataUsers = await responseServer.json();
    const user = [];
    dataUsers.forEach((dataUser) => {
      user.push({ name: dataUser.name, domicile: dataUser.address.city });
    });
    user.sort((a, b) => {
      if (a.domicile < b.domicile) return -1;
      if (a.domicile > b.domicile) return 1;
    });
    return console.log(user);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  } finally {
    consola.success("Process completed");
  }
};
