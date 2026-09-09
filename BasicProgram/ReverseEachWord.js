let str = "I am working in QA automation";

let result = str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");

console.log(result);