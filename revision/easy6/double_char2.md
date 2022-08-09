**INSTRUCTIONS**
- Function 
- Arg: string
- Output: double every consonent in string
- Return output as new string
- Do not double vowels, digits, punctuation or whitespace

**OUTLINE**
- INPUT: string
- OUTPUT: new string with only consonents doubled

**REQUIREMENTS**

**ASSUMPTIONS**

**TESTS**
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

**DATA STRUCTURE**
- String
- Maybe consider using array inside function

**ALGORITHM**
- Create function that returns true if arg = non-vowel char
  - Take advantage of UTF-16 code order of vowels
  - Use includes + vowels
- Convert string to array of chars
- Loop through array and transform certain elements
  - If nonVowelChar function returns true -> return double char
  - OTHERWISE return char
- Join new array to output string

**NOTES**