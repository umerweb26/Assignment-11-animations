let users = [];

for (let i = 1; i <= 100; i++) {
  users.push({
    age: Math.floor(Math.random() * 40) + 1, 
    fullName: "User " + i,                  
    country: "Pakistan"                     
  });
}

let adults = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    adults.push(users[i]);
  }
}


console.log("All Users (100 objects):", users);
console.log("Adults (age 18+):", adults);
