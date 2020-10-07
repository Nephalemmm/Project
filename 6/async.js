// async function fn(){
//     await setTimeout(() => {console.log("time over")}, 2000);
//     return 99
// }
// console.log("after async")
// fn().then((res) => console.log(res))

class Thenable{
    constructor(num){
        this.num = num
    }
    then(resolve, reject){
        console.log(resolve)

        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

async function f(){
    let result = await new Thenable(1);
    console.log(result);
}

f();