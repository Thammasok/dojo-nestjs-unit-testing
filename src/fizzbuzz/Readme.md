# FizzBuzz

Given an integer n, return a string answer where:

- answer == "FizzBuzz" if i is divisible by 3 and 5.
- answer == "Fizz" if i is divisible by 3.
- answer == "Buzz" if i is divisible by 5.
- answer == i (as a string) if none of the above conditions are true.

**Example:**

```txt
Example 1:
Input: n = 3
Output: "Fizz"

Example 2:
Input: n = 5
Output: "Buzz"

Example 3:
Input: n = 7
Output: "7"

Example 4:
Input: n = 15
Output: "FizzBuzz"
```

**Constraints:**

```txt
1 <= n <= 104
```

---

## Test Cases

| Input | Output |
| ----------- | ----------- |
| 0 | "Input must be between 1 and 104" |
| 1 | "1" |
| 2 | "2" |
| 3 | "Fizz" |
| 4 | "4" |
| 5 | "Buzz" |
| 6 | "Fizz" |
| 7 | "7" |
| 8 | "8" |
| 9 | "Fizz" |
| 10 | "Buzz" |
| 11 | "11" |
| 12 | "Fizz" |
| 13 | "13" |
| 14 | "14" |
| 15 | "FizzBuzz" |
| 30 | "FizzBuzz" |
| 45 | "FizzBuzz" |
| 104| "104" |
| 105 | "Input must be between 1 and 104" |

## Command

Run test for specific file

```bash
npm run test -- --verbose --findRelatedTests fizzbuzz.service.spec.ts
```
