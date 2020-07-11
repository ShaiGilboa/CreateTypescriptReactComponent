import fs from 'fs';
import path from 'path'; 

console.log('path', path.dirname('/src'))

fs.mkdir(path.join(__dirname, ''), (err) => { 
  if (err) { 
    if(err.code === 'EEXIST') {
      console.log('directory exist')
      return
    }
    return console.error(err); 
  } 
  console.log('Directory created successfully!'); 
});
