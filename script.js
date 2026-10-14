



let body = document.querySelector("body");
let btn = document.querySelector(".toggle");
let dark = true;

let savedTheme = localStorage.getItem("theme");
 if(savedTheme == "dark"){
       dark = true;
       btn.innerHTML="dark"
       
    }else{
        dark = false;
      btn.innerHTML = "light";
    }
let handleMode = ()=>{

    if(dark == true){
    btn.innerHTML = "dark"
    dark = false
    localStorage.setItem("theme","dark");
    console.log("dark");
    }else
    {
     btn.innerHTML= "light"
     console.log("light");
      localStorage.setItem("theme","light");
     dark = true;
    
    } }
btn.addEventListener("click", handleMode);
// callBack Hell
//  function getData(dataid,nextData)
function getData(dataid)
{
    return new Promise((resolve, reject) => {
            setTimeout(()=>{
        console.log("data :"+dataid);
        resolve("scuss");
    },1000);
//     // if(nextData){
//     // nextData();
// }
    });
}


// ASYNC AWAIT
async function GetStudentData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData("completed")
}
GetStudentData();
// callback hell


// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)})})}
// );



// promises chaining
// getData(1).then((res)=>{
//     return getData(2)
// }).then((res)=>{
//     return getData(3)
// }).then((res)=>{
//     return getData(4)
// }).then((res)=>{
//    return getData("completed")
// })



// promises
// api
function getpromises(){
    return new Promise((resolve, reject) => {
        console.log("promise")
       resolve("scuss");
    })
}
// handell
let promise = getpromises();
promise.then((res)=>{
    console.log("scussfully:",res);
})

promise.catch((err)=>{
    console.log("error:",err)
})

