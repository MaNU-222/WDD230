const currentDate = new Date();
let last = document.lastModified

let yearEl = document.querySelector('#year')
let lastModificationEl = document.getElementById("lastmodified")



yearEl.textContent += currentDate.getFullYear() + " |"
lastModificationEl.textContent += last + " |"