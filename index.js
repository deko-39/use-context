const a = [1, 2, 3, 4, 5, 6];

const b = a.map((item) => item * 2);

Array.prototype.mapImplement = (arr, callback) => {
  const tempArr = [];
  for (const item of arr) {
    tempArr.push(callback(item));
  }
};

const c = a.mapImplement(a, (item) => item * 2);

console.log(b);
console.log(c);
