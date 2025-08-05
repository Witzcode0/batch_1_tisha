// Event bubbling and capturing
// document.getElementById("parent").addEventListener("click", function() {
//     alert("Parent element clicked!!!");
// });
// document.getElementById("child").addEventListener("click", function() {
//     alert("Child element clicked!!!");
// });

// document.getElementById("parent").addEventListener("click", function(){
//     alert("Parent element clicked!!!");
// }, true)

// document.getElementById("child").addEventListener("click", function() {
//     alert("Child element clicked!!!");
// });


// document.getElementById("outer").addEventListener("click", function(){
//     alert("outer div clicked");
// })

// document.getElementById("inner").addEventListener("click", function(event){
//     alert("button clicked");
//     event.stopPropagation()
// })

// document.getElementById("nasa-link").addEventListener("click", function(event){
//     event.preventDefault();
//     alert("link was clicked");
// })

// document.getElementById("myform").addEventListener("submit", function(event){
//     event.preventDefault();
//     alert("Form submitted");
// });

// function alertMe(){
//     alert("Button clicked");
// }

// document.getElementById("myinput").addEventListener("change", function(){
//     console.log(this.value);
// })