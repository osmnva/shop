const arr = [
    {
        id: 1,
        name: 'wewee'
    }
]

const element = document.querySelector(".rating");

document.addEventListener("DOMContentLoaded", e => {
    arr.forEach(i => element.insertAdjacentHTML(`<div>${i.name}</div>`))
});