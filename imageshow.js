var imgFeature = document.querySelector('.img-wrap img');
var listImg = document.querySelectorAll('.list-img div');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');


var currentIndex = 0;

function updataImgByIndex(index) {
    currentIndex = index;
    imgFeature.src = listImg[index].querySelector('img').src;
    listImg.forEach((item) => {
        item.classList.remove('active');
    })
    listImg[currentIndex].classList.add('active');
}


listImg.forEach((imgElement, index) => {

    imgElement.addEventListener('click', (e) => {
        imgFeature.style.opacity = 0;
        setTimeout(() => {
            updataImgByIndex(index);
            imgFeature.style.opacity = 1;
        }, 400);

    })
})

prevBtn.addEventListener('click', (e) => {

    if (currentIndex == 0) {
        currentIndex = listImg.length - 1;
    } else {
        currentIndex--;
    }
    imgFeature.style.animation = ''
    updataImgByIndex(currentIndex);
})
nextBtn.addEventListener('click', (e) => {
    if (currentIndex == listImg.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    imgFeature.style.animation = ''
    updataImgByIndex(currentIndex);
})

updataImgByIndex(0);