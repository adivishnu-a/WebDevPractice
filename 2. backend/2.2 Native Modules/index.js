const fs = require('fs');

fs.writeFile('./2. backend/2.2 Native Modules/message.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});

fs.readFile("./2. backend/2.2 Native Modules/message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});