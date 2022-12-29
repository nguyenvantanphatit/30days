const cardImg = document.querySelector('.card__img')
const cardHeading = document.querySelector(".card__info h2")
const cardContent = document.querySelector(".card__info p")
const cardBtn = document.querySelector(".card__info button")

setTimeout(() => {
    cardImg.innerHTML = '<img src="https://picsum.photos/200/300" alt="">'
    cardHeading.innerHTML = "Tan Phat"
    cardContent.innerHTML = "Toi la sinh vien IT"
    cardBtn.innerHTML = "Xem thêm"
    document.querySelectorAll('.loading').forEach((item) => {
        item.classList.remove('loading');
    });
}, 4000)