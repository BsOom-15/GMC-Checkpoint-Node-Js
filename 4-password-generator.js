// const ganaratepassword = require('generate-password');

// // Function To Random Password:
// function randomPassword () 
// {
//     const password = ganaratepassword.generate({
//         length: 12,
//         numbers: true,
//         symbols: true,
//         uppercase: true,
//         excludeSimilarCharacters: true
//     });
//     return password;
// }

// const password = randomPassword();
// console.log(`Generated Password: ${password}`);


const ganaratepassword = require("generate-password");

function ganaretedRandomPassword(){
    const password = ganaratepassword.generate(
        {
            length:20,
            symbols: true,
            numbers: true,
            uppercase: true,
            lowercase: true,
            excludeSimilarCharacters: true
        }
        );
        return password
}

const password = ganaretedRandomPassword();
console.log(`Generated Password: ${password}`);