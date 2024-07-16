"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let alienColors = "green";
//version 1
if (alienColors === "green") {
    console.log("varsion 1: Player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Player earned 15 points. ");
}
else {
    console.log("Please choose the appropriate color.");
}
//version 2
alienColors = "yellow";
if (alienColors === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("version 2: Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Player earned 15 points. ");
}
else {
    console.log("Please choose the appropriate color.");
}
//version 3
alienColors = "red";
if (alienColors === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("version 3: Player earned 15 points. ");
}
else {
    console.log("Please choose the appropriate color.");
}
