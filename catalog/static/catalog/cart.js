
document.addEventListener('DOMContentLoaded', ()=> {
    const cartListContainer = document.querySelector(".cart-list")
    cartList.forEach(product => {
        cartListContainer.insertAdjacentHTML('beforeend', `
            <li data-id="${product.id}" class="product-item">
                <img class="product-image" src="${product.imageURL}" alt="${product.title}">
                <div class="product-title"><a href="/catalog/${product.id}">${product.title}</a></div>

                <div class="product-description">${product.description}</div>
                <div class="product-price">${product.price} р</div>
                <button class="product-add-button">Добавить в корзину</button>
            </li>
            `)
    })
})