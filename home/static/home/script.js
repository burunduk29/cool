const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

const getFromStorage = (key, default_) =>{
    return JSON.parse(localStorage.getItem(key)) || default_;
}



getFromStorage('cart', [])

const onLoad = () => {
    const cart = getFromStorage('cart', []);
    saveToLocalStorage('cart', ['Ботинок'])
}

document.addEventListener("DOMContentLoaded", () => {
    onLoad()
})