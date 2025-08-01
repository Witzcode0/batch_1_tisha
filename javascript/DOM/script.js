// Selecting elements
// let h1 = document.getElementById("title");
// console.log(h1);

// let h2 = document.getElementsByClassName("group-a")
// console.log(h2)

// let h2 = document.querySelector(".group-a");
// console.log(h2)

// let h2 = document.querySelectorAll("h2");
// console.log(h2)


// Changing content and attributes

// let h1 = document.getElementById("name");
// console.log(h1);
// h1.innerHTML = "My name is Tisha";
// console.log(h1);

// let box = document.getElementById("box");
// box.innerHTML = `<p>this is a box</p>`

// let p = document.querySelector("p")
// p.setAttribute("class", "para")
// p.setAttribute("id", "stu1")
// p.setAttribute("student_id", "#111")
// console.log(p.getAttribute("fkey"))
// p.removeAttribute("fkey")
// console.log(p)


// Creating, Removing and cloning of an elements

// create element
// let div = document.createElement("div");
// div.textContent = "This is a javascript!!!";
// document.body.appendChild(div);

// Removing element
// let p = document.querySelector("p");
// p.remove();

// cloning element
// let copy = p.cloneNode(true);
// document.body.appendChild(copy);

// Event listener
let button = document.querySelector("button");

// console.log(button)
// button.classList.add("btn-red");
// button.classList.add("btn-font-size");
button.classList.add("btn-red","btn-font-size");
// button.addEventListener("click", function(){
//     alert("Button clicked!!!");
// })

// class list and styling element
// classList:
// button.classList.add("highlight");
// button.classList.remove("btn");
// console.log(button)


// button.style.color = "orange";
// button.style.backgroundColor = "white"
// button.style.borderBottom = "1px solid red"


// DOM Travesal
// let ob = document.getElementById("outerBox");
// let ib = document.getElementById("innerBox");
// let btn = document.querySelectorAll("button");

// console.log(btn);

// console.log(ob, ib, btn);
// console.log(ib.parentElement);
// console.log(ib.children)
// console.log(ib.firstElementChild)
// console.log(ib.lastElementChild)
// console.log(ib.nextElementSibling)
// console.log(ib.previousElementSibling)

