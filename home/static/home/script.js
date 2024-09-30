let productList = []
let cartList = []

// Функции для сохранения данных в хранилище
const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

const getFromStorage = (key, default_) => {
    return JSON.parse(localStorage.getItem(key)) || default_;
}

// Парсинг карточек товара
const getProducts = () => {
    document.querySelectorAll('.product-item').forEach(element => {
        const productID = element.dataset.id
        const isInCart = cartList.some(productInCart => productInCart.id === productID);

        if (isInCart) {
            element.querySelector(".product-add-button").textContent = "Удалить из корзины"
        }

        productList.push({
            id: productID,
            title: element.querySelector(".product-title > a").textContent,
            description: element.querySelector(".product-description").textContent,
            imageURL: element.querySelector(".product-image").src,
        })
    })
}

// Обработка событий карточки товара
const handleProductEvents = () => {
    document.querySelectorAll('.product-item').forEach(element => {
        const productID = element.dataset.id;

        element.querySelector('.product-add-button').addEventListener('click', event => {
            const isInCart = cartList.some(productInCart => productInCart.id === productID);
            
            if (isInCart) {
                event.target.textContent = "Добавить в корзину"
                cartList = cartList.filter(productInCart => productInCart.id !== productID);
            
            } else {
                event.target.textContent = "Удалить из корзины"
                const productToAdd = productList.find(productInList => productInList.id === productID);
                cartList.push(productToAdd);
            }

            saveToLocalStorage('cart', cartList)
        })
    })
}

// Функция вызова при загрузке страницы
const onLoad = () => {
    cartList = getFromStorage('cart', []);

    getProducts();
    handleProductEvents();
}

document.addEventListener("DOMContentLoaded", () => {
    onLoad();
})