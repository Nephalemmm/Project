var rxjs = require('rxjs')

const random = Math.random()

const observable = rxjs.Observable.fromEvent(document, 'click');

// const observable = rxjs.Observable.create((observer) => {
//     observer.next(random);
// })

//Sub 1
observable.subscribe((data) => {
    console.log(data)
})


//Sub 2
observable.subscribe((data) => {
    console.log(data)
})