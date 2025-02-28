// import program
import { getResponseData } from "./src/task-1.js";
import { getDataFromServer, processData } from "./src/task-2.js";
import { getData } from "./src/task-3.js";
import { checkPalindrom, reverseSentence } from "./src/task-4.js";
import { devidedAndSort } from "./src/task-5.js";
import { programFile } from "./src/task-6.js";

// import readline
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

// import consola
import { consola } from "consola";

// main program
const main = async (loop, loopConfirm) => {
  try {
    while (loop) {
      consola.success(rl.question);
      const answer = await rl.question(
        "Please select the programme to run\nCommand | Task Number | App Name\n   1    |   task - 1  | Get Response Data\n   2    |   task - 2  | Get Data from Server\n   3    |   task - 3  | Get Data from API\n   4    |   task - 4  | Check Palindrom\n   5    |   task - 4  | Reverse Sentence\n   6    |   task - 5  | Devided And Sort\n   7    |   task - 6  | Program File\nAnswer > "
      );

      switch (answer) {
        case "1":
          consola.info("Get Response Data App");
          consola.start("Loading Data...");
          await getResponseData(true);
          break;
        case "2":
          consola.info("Get Data From API App");
          consola.start("Loading Data...");
          await getDataFromServer(true, processData);
          break;
        case "3":
          consola.info("Get Data App");
          consola.start("Loading Data...");
          const url = "https://jsonplaceholder.typicode.com/users";
          await getData(url);
          break;
        case "4":
          consola.info("Check Palindrom App");
          checkPalindrom("malam");
          break;
        case "5":
          consola.info("Reverse Sentence App");
          reverseSentence("Saya Belajar Javascript");
          break;
        case "6":
          consola.info("Devided And Sort App");
          devidedAndSort(5956560159466056);
          break;
        case "7":
          consola.info("Program File App");
          await programFile(rl, true, true);
          break;
        default:
          consola.warn("Programme not found");
          break;
      }

      // asked for confirmation on whether to continue the My Program App
      loopConfirm = true;
      while (loopConfirm) {
        consola.start('My Program App said : ');
        const confirm = await rl.question(
          "Will you continue the my programme? \n(yes/no) > "
        );
        switch (confirm) {
          case "no":
            loop = false;
            loopConfirm = false;
            consola.success("Thank you for using my programme");
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
    rl.close();
  } catch (error) {
    if (error instanceof Error) console.log(error);
  }
};

main(true, true);
