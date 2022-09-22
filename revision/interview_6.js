/*
INSTRUCTIONS/RULES:
- Function
- Args: array of strings (ARR)
  - All string chars = lowercase a-z

- Return -> longest common [prefix string] from ARR
  - OR empty string if no common prefix string
  - prefix string = starting substring

ASSUMPTIONS:
- If one string element is included at the start of each string, that is
the common prefix string, e.g. ['hell', 'hello', 'helloooo'] => hell
- Case sensitive => irrelevant

INPUT: array of strings

OUTPUT: string (the commmon prefix OR empty string)

EXAMPLES:

DATA STRUCTURE:
- Example:
  - ['flower', 'flow', 'flight'] => 'fl'
  - From array to string
- Array:
  - [flow] -> match?
  - [flo] -> match?
  - [fl] etc

ALGO:
- Find shortest word in array -> longest possible prefix
  - sort words arr in length order
  - take first element (doesn't matter if two are equally short)
- SET as prefix

- Loop while prefix -> length > 1 (non-built in loop so can break out)
  - Loop through remaining array elements
    e.g. ['flower', 'flight'];
        - flower includes [flow]? false
        - flight includes [flow]? false

  - Ask if ALL remaining array elements taken in turn start with prefix
  - If true for BOTH => return prefix

  - At end of each loop, remove one char from prefix
    - reassign prefix to prefix.slice(0, prefix.length - (indx + 1))

- Otherwise return empty string

*/

function includesStr(str, arr) {
  return arr.every(elem => {
    return elem.startsWith(str);
  });
}

function commonPrefix(arr) {
  let sortedArr = arr.slice().sort((a, b) => a.length - b.length);
  let prefix = sortedArr[0];

  for (let indx = 0; indx < prefix.length; indx += 1) {
    let remainingArr = sortedArr.slice(1);

    if (includesStr(prefix, remainingArr)) {
      return prefix;
    }
    prefix = prefix.slice(0, (prefix.length - 1));
  }
  return '';
}

console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']));
console.log(commonPrefix(['interspecies', 'interspecies', 'interspecies']));
