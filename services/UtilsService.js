const randomNum = () => Math.floor(Math.random() * 3) + 1;

const saveToStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const loadFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export default {
    saveToStorage,
    loadFromStorage,
    randomNum,
}
