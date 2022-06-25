
const inputWay = document.getElementById('formInput')
const form = document.querySelector('form')

form.addEventListener('submit', () => {
    const userName = inputWay.value

    localStorage.setItem('userName', userName)
})













