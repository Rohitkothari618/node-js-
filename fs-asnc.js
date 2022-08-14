const {readFile,writeFile, write}=require('fs');
readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  console.log(result);
  readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
      console.log(err)
      return
    }
    console.log(result);


  })

  writeFile('./content/result-asynchnoures.txt',`here is the first and scond txt`,
  (err,result)=>{
    if(err){
      console.log(err)
      return
    }
    console.log(result);

  })
})