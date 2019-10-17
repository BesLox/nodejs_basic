import { resolve } from "path";

// Create array 1000 element
var arr = []
for (let i=0; i<1000; i++){
    arr[i] = i;
    console.log(arr[i])
}

// // Call back
// let n =  Math.floor(Math.random()*1000);

// function start(n, callback){
//     console.log("Dang thu hien giao dich " + n + " bang Callback")
//     callback();
// }

// start(n, () => {
//     setTimeout(() => {
//         console.log("Da xu ly xong giao dich " + n + " bang Callback")      
//     }, Math.floor(Math.random()*901)+100)
// });

// // Promise
// let p = Math.floor(Math.random()*1000);
// function promise(p){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (p == 1010)/*Math.floor(Math.random()*1000))*/{
//                 reject("Promise Error Cause My Random :)")
//             }
//             else{
//               resolve(p)  
//             }
//         }, Math.floor(Math.random()*901)+100)
//     })
// }
// promise(p).then(()=>{console.log("Da xu ly xong giao dich " + p + " bang Promise het " + p + " ms")}).catch(err => {console.log(err)})

// // Async/Await
// async function work(){
//     await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random()*901)+100))
//     console.log("Da xu ly xong giao dich bang Async/Await")
// }
// work();

// Xu ly toan bo giao dich
async function success(){
    
}

function process(n){
    return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(n<0||n>arr.length){
                    reject("ERROR")
                }
                else{
                    resolve("Da xu ly xong giao dich "+n)
                }
            }, Math.floor(Math.random()*901)+1)
            n++
    })
}
for (let n=0; n<arr.length; n++){
    try{
        let process = await process(n)
        console.log(process)
        if (n=arr.length-1) console.log("DONE")
    }
    catch(err){
        console.log(err)
    }
}
