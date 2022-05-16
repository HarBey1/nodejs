const {readFile, writeFile, write } = require('fs')
console.log('start');
readFile ('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    //console.log(result);

    const first = result;
    readFile ('./content/first.txt','utf8', (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
    const second =result;
    writeFile('./content/newsync.txt', `here is the result: ${first}, ${second}`, (err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log('done')
    })
    })
    
})
console.log('start next');