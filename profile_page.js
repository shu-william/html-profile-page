function changeName() {
    let id = document.getElementById('username');
    id.innerText = 'Michael Myers'
}

let accept_buttons = document.querySelectorAll('.accept');
let decline_buttons = document.querySelectorAll('.decline');
let counters = document.querySelectorAll('.request');

for (let i = 0; i <= accept_buttons.length; i++) {
    accept_buttons[i].addEventListener('click', function() {
        counters[i].remove();
        total_connections.innerText++;
        total_requests.innerText--;
    })
    decline_buttons[i].addEventListener('click', function() {
        counters[i].remove();
        total_requests.innerText--;
    })
    }