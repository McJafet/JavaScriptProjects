let countHome = 0;
let countGuest = 0;
let valueHome = document.getElementById("value_home");
let valueGuest = document.getElementById("value_guest");
function increment1Home() {
    countHome += 1;
    valueHome.textContent = countHome;
}

const increment2Home = () => {
    countHome += 2;
    valueHome.textContent = countHome;
}

const increment3Home = () => {
    countHome += 3;
    valueHome.textContent = countHome;
}

const increment1Guest = () => {
    countGuest += 1;
    valueGuest.textContent = countGuest;
}

const increment2Guest = () => {
    countGuest += 2;
    valueGuest.textContent = countGuest;
}

const increment3Guest = () => {
    countGuest += 3;
    valueGuest.textContent = countGuest;
}

const resetHome = () => {
    countHome = 0;
    valueHome.textContent = 0;
}

const resetGuest = () => {
    countGuest = 0;
    valueGuest.textContent = 0;
}
