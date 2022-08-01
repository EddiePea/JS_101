//See MD notes

function greetings(arr, obj) {
  let nameStr = arr.join(' ');

  console.log(`Hello, ${nameStr}! Good to have a ${obj['title']} ${obj['occupation']} around.`);
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });

//LS solution

function greetings2(name, status) {
  return `Hello, ${name.join(' ')}! Nice to have a ${status['title']} ${status['occupation']} around.`;
}

console.log(greetings2(["Eddie", "L", "Pea"], { title: "Senior", occupation: "Associate" }));