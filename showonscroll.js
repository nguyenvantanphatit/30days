// let animationElements = document.querySelectorAll('.show-on-scroll')



// function toggleAnimationElementInWindown(e) {
//     var rect = e.getClientRects()
//     var heightScreen = window.innerHeight;


//     if (!(rect.bottom < 0 || rect.top > heightScreen)) {
//         e.classList.add('start');
//     }
//     else {
//         e.classList.remove('start');
//     }
// }

// function checkAnimation() {
//     animationElements.forEach(el => {
//         toggleAnimationElementInWindown(el);

//     })
// }
// window.onscroll = checkAnimation;

let elToShow = document.querySelectorAll('.show-on-scroll');
let isElInViewport = function (el) {
    let rect = el.getBoundingClientRect();
    // some browsers support innerHeight, others support documentElement.clientHeight
    let viewHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
        (rect.top >= 0 && rect.bottom <= viewHeight)

    )

}

function Loop() {
    elToShow.forEach((item) => {
        if (isElInViewport(item)) {
            item.classList.add('start');
        }
        else {
            item.classList.remove('start');
        }
    })
}

window.onscroll = Loop
Loop();