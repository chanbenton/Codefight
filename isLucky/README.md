# isLucky

> Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half. Given a ticket number n, determine if it's lucky or not.

## Example
``` 
For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
```

*Execution time limit*: 4 seconds (js)

*input*: integer n
Guaranteed constraints:
10 ≤ n < 106.

A ticket number represented as a positive integer with an even or odd number of digits.

*output*: boolean
- true if n is a lucky ticket number, false otherwise.
