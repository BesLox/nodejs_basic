
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
let process = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(id)
        }, Math.floor(Math.random()*901)+100)
    })
}
let processAll = async (id) => {
    let i = await process(id)
    console.log("Da xu ly xong "+ i)
}
async function all(arr){
    let array = arr.shift()
    await processAll(array)

    if (arr.length != 0){
        await all(arr)
    }
}
all(arr).then(()=>console.log("DONE"))

// Xy ly 2 giao dich cung thoi diem
function dual(arr){
    Promise.all([all(arr), all(arr)]).then(()=> console.log("DONE"))
}

// Xu ly n giao dich cung thoi diem
function allProcess(arr, n){
    arr_list = []
    for (let i=0; i<n; i++){
        arr_list.push(all(arr))
    }
    Promise.all(arr_list).then(()=>console.log("DONE"))
}
allProcess(arr, 5)