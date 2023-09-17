const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '~', '`'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function consistsSpecial(string) {
    for (const x of special) {
        if (string.includes(x))
            return true;
    }
    return false;
}

function consistsNumbers(string) {
    for (const x of numbers) {
        if (string.includes(x))
            return true;
    }
    return false;
}

function Strength(password) {

    if (password.length > 6 && consistsSpecial(password) && consistsNumbers(password))
        return 100;
    else if (password.length > 6 && (consistsSpecial(password) || consistsNumbers(password)))
        return 70;
    else if (password.length > 6)
        return 50;
    else if (password.length > 3)
        return 30;
    else return 0;
}

let container = document.querySelector('.container');
document.addEventListener('keyup', () => {
    let password = document.querySelector('#myPassword').value;
    let strength = Strength(password);


    if (strength <= 30) {
        container.classList.add('Weak');
        container.classList.remove('Good')
        container.classList.remove('Medium');
        container.classList.remove('Strong');
    }
    else if (strength <= 50) {
        container.classList.remove('Weak');
        container.classList.remove('Good')
        container.classList.add('Medium');
        container.classList.remove('Strong');
    }
    else if (strength <= 70) {
        container.classList.remove('Weak');
        container.classList.add('Good')
        container.classList.remove('Medium');
        container.classList.remove('Strong');
    }
    else {
        container.classList.remove('Weak');
        container.classList.remove('Good')
        container.classList.remove('Medium');
        container.classList.add('Strong');
    }

})

let password = document.querySelector('#myPassword');
let show = document.querySelector('.show');

show.addEventListener('click', () => {
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        show.classList.add('hide');
    } else {
        password.setAttribute('type', 'password');
        show.classList.remove('hide');
    }
})