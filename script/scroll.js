let scrollFunc = () => {
    const link = document.querySelector('.header-menu__item a');
    const links = document.querySelectorAll('.header-menu__item a');
    const cardDetails = document.querySelector('.card-details__link-characteristics')

    const allLinks = [...links, cardDetails]

    links.forEach((el, index, array) => {
        el.addEventListener('click', (event) => {
            event.preventDefault();

            const id = el.getAttribute('href').substring(1);
            const section = document.getElementById(id)

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            } else {
                console.log("No")
            }
        })
    })
}

scrollFunc();