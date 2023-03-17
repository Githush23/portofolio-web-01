let header = document.querySelector('header')
let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    navbar.classList.toggle('active')
}

let darkmode = document.querySelector('#darkmode')

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun')
        document.body.classList.add('active')
    } else {
        darkmode.classList.replace('bx-moon', 'bx-sun')
        document.body.classList.remove('active')
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.home')
const hiddenElement = document.querySelectorAll('.about')
const hiddenElemen = document.querySelectorAll('.skills')
const hiddenElmen = document.querySelectorAll('.services')
const hiddenElmn = document.querySelectorAll('.portofolio')
const hiddenEl = document.querySelectorAll('.contact');
hiddenElements.forEach((el) => observer.observe(el))
hiddenElement.forEach((el) => observer.observe(el))
hiddenElemen.forEach((el) => observer.observe(el))
hiddenElmen.forEach((el) => observer.observe(el))
hiddenElmn.forEach((el) => observer.observe(el))
hiddenEl.forEach((el) => observer.observe(el))

const scriptURL = '<https://script.google.com/macros/s/AKfycbwwFsNISS4C5SSB0JQOOOUWB8HqhOPq2rk6ltOnDbrPGwjvKFpg-pY1hZTNnNKiW8BsmA/exec>'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
