// import file system
import * as fs from "node:fs";

// import path
import path from "node:path";

// import npm consola
import { consola } from "consola";

// programme begins to run
export const programFile = async (rl) => {
  // path data
  const dirPath = path.dirname("./data/data");

  // if the data directory does not exits, then create the directory and data files
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    consola.success("Successfully create a data directory");
  }

  // input user to running programme
  const answer = await rl.question(
    `What do you want to do?\n1. add file\n2. delete file\n3. show file\nanswer > `
  );

  // validation to select a programme
  if (answer !== "1" && answer !== "2" && answer !== "3") {
    consola.error("Programme not found");
    return;
  }

  // if the selected programme exists then execute the following code
  switch (answer) {
    case "1":
      // add file
      consola.start("Add file");
      const fileName = await rl.question(`Enter your file name : `);
      const fileContent = await rl.question(`insert file content : `);
      const filePath = path.format({
        dir: dirPath,
        base: fileName,
      });
      fs.writeFileSync(filePath, fileContent, "utf-8");

      // information that the data was successfully saved
      consola.success(`File was successfully saved`);
      break;
    case "2":
      // delete file
      consola.start("Delete file");
      const fileDeleteName = await rl.question(
        `Enter the name of the file you want to delete > `
      );
      const fileDeletePath = path.format({
        dir: dirPath,
        base: fileDeleteName,
      });

      // request confirmation from the user, whether the file will be deleted
      const confirm = await rl.question(
        `Are you sure you want to delete the ${fileDeletePath} file ? \n(yes/no) > `
      );
      switch (confirm) {
        case "yes":
          fs.unlink(fileDeletePath, (err) => {
            if (err) return consola.warn(err);
          });
          consola.success(`${fileDeletePath} was deleted`);
          break;
        case "no":
          consola.warn("File undeleted");
          break;
        default:
          consola.error("Wrong command");
          break;
      }
      break;
    default:
      // show file
      consola.start("File List\n==============");
      const display = fs.readdirSync(dirPath);
      display.forEach((fileName) =>
        console.log(
          `${fileName}\n---------------------------------------------`
        )
      );
      if (display.length === 0) consola.warn("Empty directory");
      break;
  }
};
