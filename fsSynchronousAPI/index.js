// File System - Synchronous API
import * as fs from "fs";

// Creating Directory - Path should be there
fs.mkdirSync("c:\\nodejs\\ch8\\geek");

// Creating Directory - Path is not required to be there
// fs.mkdirSync('c:\\nodejs\\ch8\\test\\demo', { recursive: true });

// Read Content of Directory
// const files = fs.readdirSync('c:\\nodejs\\ch8\\test');
// for (const file of files)
//  console.log(file);

// Remove Directory - Directory should be empty
// fs.rmdirSync('c:\\nodejs\\ch8\\test\\demo');

// Create and Write File
// fs.writeFileSync('readme.txt', 'Hello Node JS ');

// Read File
// const data = fs.readFileSync('readme.txt');
// console.log(data);

// const data = fs.readFileSync('readme.txt', 'utf-8');
// console.log(data);

// Append Data into File
// fs.appendFileSync('readme.txt', 'Rajeev kumar');

// Copy File
// fs.copyFileSync('readme.txt', 'info.txt');

// Get File Information
// const stats = fs.statSync('c:\\nodejs\\ch8\\test\\emp.js');
// console.log(stats.isDirectory());
// console.log(stats.isFile());
// console.log(stats);
