const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 1");
        },1000)
})
promiseOne.then(() => {
    console.log();
    
})

