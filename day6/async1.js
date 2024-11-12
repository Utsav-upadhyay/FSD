    // sayhello =( ) => {
    //     console.log("Hello function");
        
    // };
    // console.log("start");
    // setTimeout(sayhello, 4000);
    // console.log("End");

    // console.log("start");
    // setTimeout( ()=> {
    //     console.log("first task completed");
    //     setTimeout(()=>{
    //         console.log("second task completed");
    //         setTimeout(()=>{
    //             console.log("third task completed");
        
    //         })
    //     })
    // })
    // console.log("end");

// const myPromise=new Promise((resolve,reject) => {
//     let success = false;
//     if (success){
//         resolve ("Data send success");
//     }else {
//         reject("data failed to send");
//     }
// })

// myPromise
//  .then((message)=>console.log(message))
//  .catch((error) => console.log("error fetching data "+ error));

function task(message,delay){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
    });
}
task("first task",1000)
 .then(()=> task("second task completed",2000))
 .then(()=> task("third task completed",3000))