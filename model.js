
const btnOpen = document.querySelector('.open-model-btn');
const model = document.querySelector('.model');
const iconClose = document.querySelector('.model__header i');
const btnClose = document.querySelector('.model__footer button');

function toggleModel() {
    model.classList.toggle('hide')
}
btnOpen.addEventListener('click', toggleModel);
btnClose.addEventListener('click', toggleModel);
iconClose.addEventListener('click', toggleModel);
model.addEventListener('click', function (e) {
    // e.stopPropagation();

    // if (e.target === model) {
    //     toggleModel();
    // }

    if (e.target == e.currentTarget) {
        toggleModel();
    }
});