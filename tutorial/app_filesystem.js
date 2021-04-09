const fs = require('fs');

// create a file
// fs.writeFile('example.txt', 'this is an example', (err) => {
//     if (err) 
//         console.log(err);
//     else {
//         console.log('File successfully created');
//         fs.readFile('example.txt','utf8', (err, file) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log(file);
//         });
//     }    
// });

// fs.rename('example.txt', 'example2.txt', (err) => {
//     if (err)
//         console.log(err)
//     else    
//         console.log('successfully renamed the file');
// })

// fs.appendFile('example2.txt', ' Some data being appended', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('Successfully appended data to file');
// })

// fs.unlink('example2.txt', (err) => {
//     if (err) 
//         console.log(err);
//     else 
//         console.log('successfully deleted the file');
// });

// *********** Part II ************
// fs.mkdir('tutorial', (err) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log('foler successfully created.');
//         fs.writeFile('./tutorial/example.txt', '123', (err) => {
//             if (err) 
//                 console.log(err);
//             else {
//                 console.log('successfully created file');
//             }
//         });
//     }
// });

// fs.rmdir('tutorial', (err) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log('successfully deleted the folder');
//     }
// })
// fs.unlink('./tutorial/example.txt', (err) => {
//     if (err) 
//         console.log(err);
//     else 
//         console.log('file deleted successfully');
// })
// fs.rmdir('tutorial', (err=>{
//     if (err) 
//         console.log(err);
//     else {
//         console.log('deleted folder');
//     }
// }));

fs.readdir('example', (err, files) => {
    if (err)
        console.log(err);
    else {
        console.log(files);
    }
});

fs.readdir('example', (err, files) => {
    if (err)
        console.log(err);
    else {
       for (let file of files) {
           fs.unlink('./example/'+file, (err) => {
               if (err) 
                    console.log(err);
                else {
                    console.log('successfully deleted file');
                }
           })
       }
    }
});