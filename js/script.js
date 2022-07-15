let menuClouse = document.querySelector(".header__menu-clouse"),
    menuOppen = document.querySelector(".menu");
    nav = document.querySelector(".header__nav");
    console.log(menuOppen)

    menuOppen.addEventListener("click", () => {
        nav.style.right = "0"
    })

    menuClouse.addEventListener("click", () => {
        nav.style.right = "-100%"
    })
