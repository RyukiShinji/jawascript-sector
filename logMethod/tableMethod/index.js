console.group("as an object");

let user = {
  name: "Ryuki",
  age: 19,
  job: "pengangguran 😢🌹",
};
console.log(user);

console.groupEnd();

console.group("array");

let cities = ["banjarmasin", "ngawi", "medan", "palembang"];
console.table(cities);

console.groupEnd();

console.group("array of array");

let destionations = [
  ["unknown", "error"],
  ["unknown", "error"],
  ["unknown", "error"],
];
console.table(destionations);

console.groupEnd();

console.group("array of object");

let users = [
  {
    name: "semvak firaun",
    age: 12340,
  },
  {
    name: "MyTirex",
    age: 190000000,
  },
  {
    name: "tiktaalik",
    age: 300000000000,
  },
];
console.table(users);

console.groupEnd();

console.group("nested object");

let roles = {
    writter: {
      name: "Ryuki",
      lastname: "Shinji",
      email: "wongirengjembuten654@gmail.com",
    },
    reviewer: {
      name: "semvak",
      lastname: "firaun",
      email: "kingegypt333@gmail.com",
    },
};

console.table(roles);

console.groupEnd();
