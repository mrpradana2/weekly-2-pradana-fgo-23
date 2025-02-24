import { consola } from "consola";

export const checkPalindrom = (word) => {
  let reverseWord = [];
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord.push(word.charAt(i));
  }
  let checkWord = [];
  for (let i = 0; i < word.length; i++) {
    word.charAt(i) !== reverseWord[i] ? false : checkWord.push(true);
  }
  if (checkWord.length !== word.length) return consola.success("Not palindrom");
  if (checkWord.length === word.length) return consola.success("Palindrom");
};

export const reverseSentence = (sentence) => {
  const arrWord = sentence.split(" ");
  const reverseWord = [];
  for (let i = arrWord.length - 1; i >= 0; i--) {
    reverseWord.push(arrWord[i]);
  }
  consola.success(reverseWord);
};
