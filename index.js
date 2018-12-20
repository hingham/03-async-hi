'use strict';

const fileReader = require('./lib/reader-callbacks-array.js');
const fs = require('fs');

// Obtain and assert input of 3 files
let files = process.argv.slice(2);

// console.log(files);



if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

fileReader(files, (err,data) => {
  if(err){console.error('error'); }
  console.log('From Callback:', data);
});


// fs.readFile('./files/'+files[0], (err, data)=>{
//   if(err ){console.log('error'); }
//   console.log(data, data.toString());

//   fs.readFile('./files/'+ files[1], (err, data)=>{
//     if(err){console.error('error'); }
//     console.log(data.toString()) ;

//     fs.readFile('./files/'+ files[2], (err, data)=>{
//       if(err){console.error('error'); }
//       console.log(data.toString()) ;
//     });

//   });
  
// });


