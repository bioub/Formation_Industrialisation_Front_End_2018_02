function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
}

Promise.all([
  timeout(getRandom(0, 1000)),
  timeout(getRandom(0, 1000)),
]).then((delays) => {
  console.log(delays);
});

