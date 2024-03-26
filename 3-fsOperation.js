const fs = require("fs");

// 1- Create File Named "Welcome.txt":

let content = "Hello Node\n";
fs.writeFile('Welcome.txt', content, (err) => {
    if (err) {
        console.error('Error creating file:', err);
    } else {
        console.log('File "Welcome.txt" created successfully.');
    }
});

// 2- Read and console.log data from hello.txt:-

fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("Data From 'hello.txt':", data);
    }
});
