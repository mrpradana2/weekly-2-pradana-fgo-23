// import file system
import * as fs from "node:fs";

// import path
import path from "node:path";

// import npm consola
import { consola } from "consola";

// programme begins to run
export const programFile = async (rl, loop, loopConfirm) => {
  while (loop) {
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
        const loadFiles = fs.readdirSync(dirPath);
        if (loadFiles.length === 0) { 

          // if the directory is empty
          consola.warn("Empty directory, no files can be deleted")
        } else {

          // if the directory contains file
          const fileDeleteName = await rl.question(
            `Enter the name of the file you want to delete > `
          );
          const fileDeletePath = path.format({
            dir: dirPath,
            base: fileDeleteName,
          });
          const findFile = loadFiles.find(file => file === fileDeleteName);
          if (findFile === undefined) { 

            // if the file is not found
            consola.warn("The file name you are looking for does not exist")
          } else {

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
          }
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

        // if the files in the directory are empty
        if (display.length === 0) consola.warn("Empty directory");
        break;
    }
    
  // asked for confirmation on whether to continue the Program File App
  loopConfirm = true;
    while (loopConfirm) {
      consola.start('Program FIle App said : ');
      const confirm = await rl.question(
        "Will you continue the of the program file App? \n(yes/no) > "
      );
      switch (confirm) {
        case "no":
          loop = false;
          loopConfirm = false;
          consola.success("Thank you for using program file App");
          break;
        case "yes":
          loopConfirm = false;
          break;
        default:
          consola.warn("Wrong command");
          break;
      }
    }
  }
};
