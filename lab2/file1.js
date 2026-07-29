import { writeFile } from "fs/promises";

await writeFile("stud.txt", "Name: Aniket Kumar Singh");
console.log("File written");
