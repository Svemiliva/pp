/*7. Write a program that calculates a number of digits of a given number.*/



function digits_count(n) {
    var count = 0;
    
    while (n > 1) {
      n /= 10;
      ++count;
    }
    return count;
  }
  // jednocifreni
  // 1: n = 3, count = 0, 3 / 10 (0.3) > 1(false), end of loop, return 0

  // dvocifreni
  // 1: n = 12, count = 0, 12 / 10 (1.2) > 1(true), n = n /10(1.2), count++(1)
  // 2: n = 1.2, count = 1, 1.2 / 10 (0.12) > 1(false), end of loop, return 1

  

  console.log(digits_count(28.25));
  console.log(digits_count(5155645612156456121561));




/* n= 987
sum= 9+8+7
*/