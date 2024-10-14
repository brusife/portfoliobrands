const btnmenu = document.getElementById('menu');

function abremenu() {
    const lista = document.getElementById('lista');
    lista.classList.toggle('active');
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');

}

btnmenu.addEventListener ('click', abremenu);