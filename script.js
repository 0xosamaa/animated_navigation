const nav = document.querySelector('nav')
const toggle = document.querySelector('button')

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
})