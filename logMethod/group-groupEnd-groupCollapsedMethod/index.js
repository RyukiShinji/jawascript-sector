console.log("This is the first level");

console.group("First group");
console.log("In the first group");

console.group("Second group");
console.log("in the second under first group");
console.warn("Still in the second group");

console.groupEnd();

console.log("back into first group");
console.groupEnd();

console.log("---------");

console.group("first group")
console.log("main list 1")
console.log("main list 2")
console.log("main list 3")
console.groupCollapsed("groupCollapsed")
console.log("list 1")
console.log("list 2")
console.log("list 3")
console.groupEnd();
