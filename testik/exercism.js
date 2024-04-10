const birdsPerDay = [9, 0, 8, 4, 5, 1, 3];
let sum = 0;
  for (let i  = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }
console.log(sum);