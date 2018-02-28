const Observable = require('rxjs').Observable;

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delay);
    }, delay);
  });
}


interval(1000)
  .subscribe(() => {
    console.log('1s');
  });
