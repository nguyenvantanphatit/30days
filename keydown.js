const eKey = document.querySelector('.card.key p:last-child');
const eLocation = document.querySelector('.card.location p:last-child');
const eWhich = document.querySelector('.card.which p:last-child');
const eCode = document.querySelector('.card.code p:last-child');
const alert = document.querySelector('.alert');
const box = document.querySelector('.box');

document.addEventListener('keydown', function (e) {
    eKey.innerHTML = e.key;
    eLocation.innerHTML = e.location;
    eWhich.innerHTML = e.which;
    eCode.innerHTML = e.code;
    alert.classList.add('hide');
    box.classList.remove('hide');

})