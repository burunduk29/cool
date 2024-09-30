document.addEventListener('DOMContentLoaded', () => {
    const cartListContainer = document.querySelector(".cart-list");
    cartList.forEach(product => {
        cartListContainer.insertAdjacentHTML('beforeend', `
            <li data-id="${product.id}" class="product-item">
                <img class="product-image" src="${product.imageURL}" alt="${product.title}">
                <div class="product-details">
                    <div class="product-title"><a href="/catalog/${product.id}">${product.title}</a></div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-price">${product.price} р</div>
                </div>
                <div class="product-actions">
                    <button class="product-remove-button">Удалить</button>
                </div>
            </li>
        `);
    });

    // Добавляем обработчик для кнопок удаления
    cartListContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('product-remove-button')) {
            const productItem = event.target.closest('.product-item');
            const productId = productItem.getAttribute('data-id');

            // Удаление из DOM
            productItem.remove();

            // Удаление из cartList (если используете массив cartList)
            const index = cartList.findIndex(product => product.id == productId);
            if (index !== -1) {
                cartList.splice(index, 1);
                // Если используете localStorage
                localStorage.setItem('cartList', JSON.stringify(cartList));
            }

            // Обновление общего количества или общей суммы (если необходимо)
            updateCartSummary();
        }
    });
});

// Пример функции для обновления общей суммы и количества товаров
function updateCartSummary() {
    const totalItems = cartList.length;
    const totalPrice = cartList.reduce((sum, product) => sum + parseFloat(product.price), 0);
    
    document.querySelector('.cart-summary-items').textContent = `Всего товаров: ${totalItems}`;
    document.querySelector('.cart-summary-price').textContent = `Общая сумма: ${totalPrice} р`;

    // Обновление счетчика в кнопке "КОРЗИНА"
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}
