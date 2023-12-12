JS-ben:

Synces:

const fs = require('fs') "vagy felulre az import:" import \* as fs from "node:fs"

const data = fs.readFileSync("data.json", "utf-8")
let newDates = JSON.parse(data)

Asynces:

import \* as fs from 'node:fs';
let convertDates = (err,data) => {
if (err) {
console.error(err);
return
}
let newDates = JSON.parse(data);
console.log(dateKeyConverter(newDates))
console.log(dateKeyConverter2(newDates))
console.log(dateKeyConverter3(newDates))
}

fs.readFile("data.json", "utf8", convertDates)

TS-ben:

import fileSystem from "fs";
// itt quick fixel telepitetnunk kell a már megirt kódot

const data = fileSystem.readFileSync(`${__dirname}/../data.txt`, "utf-8"); VAGY : const data = fileSystem.readFileSync(két alulvonásdirname + "/../data.txt", "utf-8")
let newDates = JSON.parse(data);
