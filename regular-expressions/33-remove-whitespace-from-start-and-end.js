let hello = "   Hello, World!  ";
let wsRegex = /(^ +)|( +$)/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line