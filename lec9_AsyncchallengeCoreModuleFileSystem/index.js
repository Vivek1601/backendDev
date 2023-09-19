const fs = require("fs");

//  fs.mkdir("thapa",
//  (err) => {
//     if(err){
//         console.log(err);
//     }
//  }
//  );

//  fs.writeFile("thapa/bio.txt","hello i am vivek",
//     (err) => {
//         if(err){
//             console.log(err);
//         }
    
//     });

    // fs.appendFile("thapa/bio.txt"," how r u",
    // (err) => {
    //     if(err){
    //         console.log(err);
    //     }
    
    // });


// fs.readFile("thapa/bio.txt","utf-8",
//     (err,data) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(data);
//         }
    
//     });

    // fs.rename("thapa/bio.txt","thapa/mybio.txt",
    // (err) => {
    //     if(err){
    //         console.log(err);
    //     }
    
    // });

    // fs.unlink("thapa/mybio.txt",(err) =>{
    //     if(err){
    //                 console.log(err);
    //             }
    // })

    fs.rmdir("thapa",(err) =>{
        if(err){
                    console.log(err);
                }
    })
