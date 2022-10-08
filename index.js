import { print } from "./js/lib.js";
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

const dog = {
  species: "dog",
  name: "Sharik",
  gender: "male",
  legs: 4,
  hands: 0,
  saying: "woof-woof!",
};
const cat = {
  species: "cat",
  name: "Mirzik",
  gender: "male",
  legs: 4,
  hands: 0,
  saying: "moow-moow!",
};
const woman = {
  species: "woman",
  name: "Yulia",
  gender: "famele",
  legs: 2,
  hands: 2,
  saying: "Hi Ihor!",
};
const man = {
  species: "man",
  name: "Ihor",
  gender: "male",
  legs: 2,
  hands: 2,
  saying: "Hello Yulia!",
};

const inhabitants = [dog, cat, woman, man];

inhabitants.forEach((obj) => {
  print(
    obj.species +
      ";" +
      obj.name +
      ";" +
      obj.gender +
      ";" +
      obj.legs +
      ";" +
      obj.hands +
      ";" +
      obj.saying
  );
});
