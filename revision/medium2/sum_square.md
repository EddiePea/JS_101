**INSTRUCTIONS**
- Function:
  - Computes difference between:
    - A: [square] of the [sum] of the [first] [count] [positive_integers] AND
    - B: [sum] of the [squares] of the [first] [count] [positive_integers]
  
- A:
  - square = **2 (multiplied by itself)
  - sum => addition of all parts
  - positive integers => whole numbers from [1]
  - first_count => integers from [1] until [num] (inclusive), e.g. 3 -> 1, 2, 3

- B: 
  - sum
  - squares of first count positive integers => take each positive integers from [1] to [num] inclusive and square them and add the results

**OUTLINE**
- INPUT: number (count)
- OUTPUT: number (difference between A and B)

**RULES**

**ASSUMPTIONS**
- [0] is not a positive integer

**TESTS**

**DATA STRUCTURE**
- numbers
- OR could use arrays

**ALGORITHM**
**Numbers*
- Function to compute A => sum square
  - SET sum = 0;
  - SET count = num;

  - Create a loop which runs while count > 0
    - sum += count; (?) //CHECK THIS
    - count -= 1;
  - return (sum ** 2)

- Function to compute B => square sum
  - SET sum = 0;
  - SET count = num;

  - Create loop which runs while count > 0;
    - sum += count ^^ 2;
    - count -= 1;
  - Return sum

- Difference function:
  return sumSquare(num) - squareSum(num);

**Arrays*
- Function to create array of nums from 1 to num
  - let arr = [];
  - create a loop which runs while arr.length < num
  - Inside the loop: 
    - Add num to the array
    - Decrement num by 1

- Function to compute A:
  - Call function to create array of nums
  - Compute sum of all nums in array 
  - Return square of sum

- Function to compute B:
  - Call function to create array of nums
  - Transform array of nums so that each element is converted into its square
  - Compute the sum of the transformed array elements
  - Return the sum

- Diff function:
  - funcA - funcB

**NOTES**
- Always try to boil down your functions 
- If you are repeating yourself inside different functions -> combine!
- If you're using a method and then reduce, think 'can I just use reduce'?