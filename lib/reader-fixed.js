'use strict';

const fs = require('fs');
let contents = [];


let args = process.argv.slice(2);

console.log(args);


/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files, callback) => {
  readAll([...files],callback);//from index 
  contents = [];
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */
const readOne = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    else { callback(undefined, data); }
  });
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = (paths, callback) => {
  console.log('looking the the path argument ', paths);

  contents = [];
  readOne(paths[0], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      console.log('Read File 1');
      contents.push(data.toString().trim());

      readOne(paths[1], (err, data) => {
        console.log(paths[1]);
        if (err) {
          callback(err);
        }
        else {
          console.log('Read File 2');
          console.log(data.toString());
      
          contents.push(data.toString().trim());
  
          readOne( paths[2], (err, data) => {
            if (err) {
              callback(err);
            }
            else {
              console.log('Read File 3');
              contents.push(data.toString().trim());
              callback(undefined, contents);
            }
          });
        }
      });
    }
  });

  console.log('contents', contents);
  // callback(undefined, contents);
};


// readAll(args, (err, data) => {
//   if (err) {
//     console.log('error');
//   }
//   else{
//     console.log('i ran');
//     // return contents;
//     // console.log('tring to console');
//   }
// });

