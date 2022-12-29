fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var products = document.querySelector('.products');
        products.innerHTML = ''
        data.forEach(item => {
            var newProduct = document.createElement('div');
            newProduct.classList.add('product');
            newProduct.innerHTML = `
            <img src = "${item.image}">
            <div class="info">
            <div class="name">${item.title}</div>
            <div class="price">$${item.price}</div>
            </div>
            `
            products.appendChild(newProduct);
        })
    })
var searchInput = document.querySelector('.search input');
searchInput.addEventListener('input', function (e) {
    const txtSearch = e.target.value.trim().toLowerCase();
    const listProductDom = document.querySelectorAll('.product');
    listProductDom.forEach(item => {
        if (item.innerText.toLowerCase().include(txtSearch)) {
            item.classList.remove('hide')
        }
        else {
            item.classList.add('hide')
        }
    })
})
