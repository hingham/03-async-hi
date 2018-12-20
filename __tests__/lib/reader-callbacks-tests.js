'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-fixed.js');
// const reader = require('../../index.js');
// 
describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    
    expect(()=>{
      reader(files, (err,data) => {});
    }).toThrow();
  });



  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    
    reader(files, (err,data) => {
      console.log('here is the errr' , err);
      expect(err).toBeUndefined();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });

});
