function foo(obj) {
  return "def";
}

let bar = { qux: "xyzzy" };

console.log(foo({ qux: "xyzzy" }));

console.log(foo(bar));
console.log(bar);

