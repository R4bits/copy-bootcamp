const btn = document.querySelector(`#btn`)
const body = document.querySelector(`body`)
const img = document.querySelector(`img`)
const h1 = document.querySelector(`h1`)

btn.addEventListener('click', () => {
    if (body.style.backgroundColor === `rgb(39, 31, 88)`) {
        body.style.backgroundColor = `rgb(255, 255, 255)`;
        img.src = `./assets/yoda.jpg`;
        img.alt = `foto de Yoda`;
        body.style.color = `black`;
        h1.innerText = `¡Que la fuerza te acompañe!`;
        btn.innerText = `🌙`
        btn.style.backgroundColor = `black`;
        btn.borderColor = `white`;

    } else {
        body.style.backgroundColor = `rgb(39, 31, 88)`;
        img.src = `./assets/darth-vader.jpeg`;
        img.alt = `foto de Darth Vader`;
        body.style.color = `white`;
        h1.innerText = `¡Te voy a chupar la fuerza!`;
        btn.innerText = `🌞`
        btn.style.backgroundColor = `white`;
        btn.borderColor = `black`;
    }
});