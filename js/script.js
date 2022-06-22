var Button = document.querySelector('#Button');
var sideBar = document.querySelector('#sideBar');
const img = document.querySelector('#img');
const para = document.querySelector('#topPara');
const cardOne = document.querySelector('#cardOne');
const cardTwo = document.querySelector('#cardTwo');
const cardThree = document.querySelector('#cardThree');

var x = true;
Button.addEventListener('click', () => {
    if (x == true) {
        sideBar.classList.add('error-side-bar');
        Button.classList.add('ButtonOne');
        img.classList.add('img');
        para.classList.add('topPara');
        cardOne.classList.remove('cardOne');
        cardTwo.classList.remove('cardTwo');
        cardThree.classList.remove('cardThree');
        x = false;
    } else {
        sideBar.classList.remove('error-side-bar');
        Button.classList.remove('ButtonOne');
        img.classList.remove('img');
        para.classList.remove('topPara');
        cardOne.classList.add('cardOne');
        cardTwo.classList.add('cardTwo');
        cardThree.classList.add('cardThree');

        x = true;
    }
})

var ButtonTwo = document.querySelector('#Button2');
var sideBarTwo = document.querySelector('#sideBarTwo')
var x = true;

ButtonTwo.addEventListener('click', () => {
    if (x == true) {
        sideBarTwo.classList.remove('error-side-two');
        sideBarTwo.classList.add('side-bar-two');
        x = false;
    } else {
        sideBarTwo.classList.remove('side-bar-two');
        sideBarTwo.classList.add('error-side-two');
        x = true;
    }
})

let dispHome = document.querySelector('#dispHome');
let dispInfo = document.querySelector('#dispInfo');
let dispForum = document.querySelector('#dispForum');

let divOne = document.querySelector('#all-div-one');
let divTwo = document.querySelector('#all-div-two');
let divThree = document.querySelector('#all-div-three');

let navTwoHome = document.querySelector('#navTwoHome');
let navTwoInformation = document.querySelector('#navTwoInformation');
let navTwoForum = document.querySelector('#navTwoForum');
var a = true;

dispHome.addEventListener('click', (e) => {
    e.preventDefault()
    if (a == true) {
        divOne.classList.remove('divOne');
        divTwo.classList.remove('divTwo');
        divThree.classList.remove('divThree');
        navTwoHome.classList.add('home');
        navTwoInformation.classList.remove('information');
        navTwoForum.classList.remove('forum');


        x = false;
    } else {
        divOne.classList.add('divOne');
        x = true;
    }

})

dispInfo.addEventListener('click', (e) => {
    e.preventDefault()
    if (a == true) {
        divTwo.classList.add('divTwo');
        divOne.classList.add('divOne');
        divThree.classList.remove('divThree');
        navTwoInformation.classList.add('information');
        navTwoHome.classList.remove('home');
        navTwoForum.classList.remove('forum');


        x = false;
    } else {
        divTwo.classList.remove('divTwo');
        divOne.classList.remove('divOne');
        x = true;
    }

})
dispForum.addEventListener('click', (e) => {
    e.preventDefault()
    if (a == true) {
        divThree.classList.add('divThree');
        divOne.classList.add('divOne');
        divTwo.classList.remove('divTwo');
        navTwoForum.classList.add('forum');
        navTwoInformation.classList.remove('information');
        navTwoHome.classList.remove('home');


        x = false;
    } else {
        divThree.classList.remove('divThree');
        divOne.classList.add('divOne');
        divTwo.classList.remove('divTwo')
        x = true;
    }

})