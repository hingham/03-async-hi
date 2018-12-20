//us fs module
//accepts a file name as a command line parameter
const fs = require('fs');

let args = process.argv.slice(1);


console.log(args);


fs.readFile(args[1], (err, data)=>{
  if(err ){console.log('error'); }
  //read the results
  console.log(data.toString());

  fs.writeFile(args[1], `${Math.random()}`, (err)=>{
    if(err ){console.log('error'); }
    console.log('file was saved');

    fs.readFile(args[1], (err, data)=>{
      if(err ){console.log('error'); }
      //read the results
      console.log('file contents after written ', data.toString() );
    });

  });

});

