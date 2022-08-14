const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);
writeFileSync(
  "./content/subfolder/create.txt",
  `here the file is ${first},${second}`,
  { flag: "a" }
);
writeFileSync(
  "./content/subfolder/hellow.txt",
  `this is the second program and made my day today `,
  { flag: "a" }
);
