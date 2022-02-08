function navbar() {
    /* query selector */
    const hamburgerbar_btn = document.querySelector("#hamburger");
    const menu_div = document.querySelector("#menu");

    /* event listener */
    hamburgerbar_btn.addEventListener("click", function() {
        menu_div.classList.toggle("active");
    });
}

export {navbar};