// DOM Elements
const timeEl = document.getElementById('time'),
    greetingEl = document.getElementById('greeting'),
    nameEl = document.getElementById('name'),
    wensEl = document.getElementById('wens');

// Show Time
const showTime = () => {
    let today = new Date(),
        hour = today.getHours(),
        minutes = today.getMinutes(),
        sec = today.getSeconds();
    
    // Output Time
    timeEl.innerHTML = `${addZero(hour)}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
};

// Add Zeros
const addZero = (number) => {
    return (parseInt(number, 10) < 10 ? '0' : '') + number;
};

// Set Background and Greeting
const setBackgroundGreeting = () => {
    let today = new Date(),
        hour = today.getHours();
    
    if (hour > 5 && hour < 16) {
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greetingEl.textContent = "Добрый день,";
    } else if (hour < 22) {
        document.body.style.backgroundImage = "url('./img/evening.jpg')";
        greetingEl.textContent = "Добрый вечер,";
    } else {
        document.body.style.backgroundImage = "url('./img/nigth.jpg')";
        greetingEl.textContent = "Доброй ночи,";
    }
};
// Get Name
const getName = () => {
    if (localStorage.getItem('name') === null) {
        nameEl.textContent = 'Введите имя'
    } else {
        nameEl.textContent = localStorage.getItem('name');
    }
};

// Get Wens
const getWens = () => {
    if (localStorage.getItem('wens') === null) {
        wensEl.textContent = 'Введите пожелание'
    } else {
        wensEl.textContent = localStorage.getItem('wens');
    }
};

// Set Name
const setName = (event) => {
    if (event.type === 'keypress') {
        if (event.which == 13 || event.keyCode == 13) {
        localStorage.setItem("name", event.target.innerText);
        nameEl.blur();
        }    
    } else {
        localStorage.setItem('name', event.target.innerText)
    }
};

// Set Wens
const setWens = (event) => {
    if (event.type === 'keypress') {
        if (event.which == 13 || event.keyCode == 13) {
        localStorage.setItem("wens", event.target.innerText);
        wensEl.blur();
        }    
    } else {
        localStorage.setItem('wens', event.target.innerText)
    }
};

// Add Listners
nameEl.addEventListener("keypress", setName);
nameEl.addEventListener("blur", setName);
wensEl.addEventListener("keypress", setWens);
wensEl.addEventListener("blur", setWens);

// Run
showTime();
setBackgroundGreeting();
getName();
getWens();