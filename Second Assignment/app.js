// 1.1 Create file using write 
var file_s = require('fs');
file_s.writeFile('index.html','HIII', function(err) {
  if (err) throw err;
  console.log("File created successfully !!");
});

// 1.2 Create file using append
var file_s = require('fs');
file_s.appendFile('index.html','HIII', function(err) {
  if (err) throw err;
  console.log("File created successfully !!");
});

// 1.3 Create file using open
var file_s = require('fs');
file_s.open('index.html','w', function(err) {
  if (err) throw err;
  console.log("File created successfully !!");
});

// 2.1 Update by append file 
var file_s = require('fs');
file_s.appendFile("index.html", 'Hello welcome to Kirirom!', function(err){
  if (err) throw err;
  console.log("File updated successfully!");
});

// 2.2 Update by write file 
var file_s = require('fs');
file_s.writeFile("index.html", 'Hello welcome to Kirirom!', function(err){
  if (err) throw err;
  console.log("File updated successfully!");
});

// 3. close file 
const file_s = require('fs');
open_f = file_s.openSync('index.html');
console.log("file open successfully!");
file_s.close(open_f, (err) => {
  if (err)
    console.error('Failed to close the file!', err);
  else {
    console.log("File Closed successfully!");
  }
});

// 4. delete 
var file_s = require('fs');
file_s.unlink('index.html', function(err){
  if (err) throw err; 
  console.log('File deleted !');
});

// 5. Rename file 
var file_s = require('fs');
file_s.rename("index.html", "new_index.html", function(err){
  if (err) throw err;
  console.log("File rename successfully !");
});  

// 6. Update 
var file_s = require('fs');
file_s.writeFile("new_index.html", '<!-- <!DOCTYPE html> -->', function(err){
  if (err) throw err;
  console.log("File updated !");
});