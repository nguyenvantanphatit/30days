var content = document.querySelector('ul');
var input = document.querySelector('input');

var btnRemoveAll = document.querySelector('.btn-removeAll');
var tags = ['Nodejs', 'Reactjs'];

function render() {
    content.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>
           ${tag}
           <i class="uit uit-multiply" onclick="removeTag(${i})"> </i>
           </li>
           `
    }
    content.appendChild(input)
    input.focus();
}
function removeTag(index) {
    tags.splice(index, 1);
    render();
}



render();

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        tags.push(input.value.trim());
        input.value = '';
        render();
    }

})


btnRemoveAll.addEventListener('click', function () {
    tags = [];
    render();
})

