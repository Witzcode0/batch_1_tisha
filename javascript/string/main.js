// Syntax :

// 1] let string_name = 'string_value' // single 
// 2] let string_name = "string_value" // double
// 3] let string_name = `string_value` // backtics

let first_name = "Brijesh";
// console.log(first_name[0])

// for(let start = 0; start < first_name.length; start++){
//     console.log(first_name[start]);
// }

// use index and get char
// console.log(first_name.charAt(4))

// let name = "my name is \"brijesh gondaliya\"";
// console.log(name)

// console.log("\\")
// console.log("\"")
// console.log("\'")
// console.log("\\\\")

let company = "BHaRat fUTuriSI aI"
// console.log(company.length)

// case coversion
// console.log(company.toLowerCase())
// console.log(company.toUpperCase())

// console.log(company.charAt(5))
// console.log(company.charCodeAt(2))

// console.log(company.indexOf("aI"))
// console.log(company.lastIndexOf("a"))

// let email = "Brijesh@bharatfutuistai.com".toLowerCase()
// if (email.includes("@")){
//     if (email.endsWith("bharatfutuistai.com")){
//         if(email.startsWith("brijesh")){
//             console.log("Valid company email of brijesh")
//         }else{
//             console.log("Invalid company email of brijesh")
//         }
//     }else{
//         console.log("Invalid company email of brijesh")
//     }
// }
// else{
//     console.log("Invalid company email of brijesh")
// }

// let lang = "JavaScript";
// console.log(lang.slice(4));     // "Script"
// console.log(lang.substring(0, 4)); // "Java"
// console.log(lang.substr(4, 3)); // "Scr" (deprecated)

// let sentence = "I like apples. Apples are sweet.".toLowerCase();
// console.log(sentence.replace("apples", "oranges"));
// console.log(sentence.replaceAll("apples", "oranges"));

let spaced = "   Hello  World   ";
// console.log(spaced.replaceAll("  ", " ").replaceAll("  ", " "))
// console.log(spaced.replaceAll("  ", " ").replaceAll("  ", " ").trim())
// console.log(spaced.trimStart())
// console.log(spaced.trimEnd())

// let items = "apple,banana,grape";
// console.log(items.split(",")[0])

// let fname = "Brijesh"
// let space = " "
// let lname = "Gondaliya"

// let fullname = fname.concat(space).concat(lname)
// console.log(fullname)

// let otp = "647376"
// let message = `
// This is a one time password '${otp}'. 
// for forgot your account password
// `
// console.log(message)

// let str = "Hello";
// // console.log(str[0])
// str[0] = "J";  // ❌ Does not change the string
// console.log(str); // "Hello"


// console.log(10 == '10')
// console.log(10 === '10')
// console.log("a" < "b");   
// console.log("é".localeCompare("e"));