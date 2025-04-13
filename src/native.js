const fs =require('fs')//maneja archivos

const data =fs.readFileSync('example.txt','utf8');
console.log('File Content:',data)