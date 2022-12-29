// const face = document.querySelector('.counter.face h2')
// const youtube = document.querySelector('.counter.youtube h2')
// const tiktok = document.querySelector('.counter.tiktok h2')

// function counterUp(el, to) {
//     let speed = 200
//     let from = 0
//     let step = to / speed
//     const counter = setInterval(function () {
//         from += step
//         if (from > to) {
//             clearInterval(counter)
//             el.innerText = to
//         } else {
//             el.innerText = Math.ceil(from)
//         }
//     }, 1)
// }

// counterUp(face, 3300)
// counterUp(youtube, 1000)
// counterUp(tiktok, 9900)

const listCounter = document.querySelectorAll('.counter')

function count(el) {
    var numberEl = el.querySelector('h2')
    var to = parseInt(numberEl.innerText)
    var count = 0;
    var time = 144;
    var step = to / time

    let counting = setInterval(() => {
        count += step
        if (count > to) {
            clearInterval(counting)
            numberEl.innerText = to
        }
        else {
            numberEl.innerText = Math.round(count)
        }

    })
}
listCounter.forEach(item => {

    count(item)
})
