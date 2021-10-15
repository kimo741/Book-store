let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
let loginForm = document.querySelector(".login-form");
let formClose = document.querySelector("#form-close");
let formBtn = document.querySelector('#login');
let display = document.getElementById('darkMood');

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
}


// navbar toggle
menu.addEventListener("click" , () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    loginForm.classList.remove("active");
})
// display.onclick=() => {
// document.querySelector('body').classList.toggle("dark-mood");
// display.classList.toggle('whitem');
// };




// formLogin
formBtn.addEventListener("click" , () =>{
    loginForm.classList.toggle("active");
})
formClose.addEventListener("click" , () =>{
    loginForm.classList.remove("active");
})

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});


// header color 
// window.addEventListener('scroll', function () {
//     const header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 0);
// });;

// let tabs =document.querySelectorAll(".aaa");
// let tabsArray = Array.from(tabs);
// let divs = document.querySelectorAll(".content div");
// let divsArray = Array.from(divs);

// tabsArray.forEach((ele) => {
// ele.addEventListener("click", function (e) {
//     tabsArray.forEach((ele)=>{
//         ele.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     var x= e.currentTarget.getAttribute('data-class');
//     ele.currentTarget.getAttribute('data-class').style.display='none';
//     document.querySelector('.'+ x ).style.display='block';
// });
// });
// const food = {one:"berger" , tow:"pizza" , three:"chiken"}

// const {one , tow , three , four="defulte"} =food;

// console.log(one , tow , three , four)
const mymap = new Map([["name" , "kareem"] , ["age" , 26] , ["jop" , "programing"]  ]);
mymap.forEach((val,key)=> console.log(key,val) 

)