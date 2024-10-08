const btnMobile = document.getElementById('btn-mobile');


function toggleMenu() {
    const nav = document.getElementById('nav');
    const bt = document.getElementById('bt');
    nav.classList.toggle('active');
    bt.innerHTML = 'close';
}

btnMobile.addEventListener('click', toggleMenu);