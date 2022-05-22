let tabsFunc = () => {
    let cardButtons = document.querySelectorAll('.card-detail__change')
    let tabsTitle = document.querySelector('.card-details__title')
    let tabsPrice = document.querySelector('.card-details__price')
    let tabsImage = document.querySelector('.card__image_item')
    let tabsOption = [{
        name: "Graphite",
        title: "Смартфон Apple iPhone 13 Pro 128GB Graphite",
        price: "35000₽",
        image: "img/iPhone-graphite.webp"
    },
    {
        name: "Silver",
        title: "Смартфон Apple iPhone 13 Pro 128GB Silver",
        price: "45000₽",
        image: "img/iPhone-silver.webp"
    },
    {
        name: "Sierra-Blue",
        title: "Смартфон Apple iPhone 13 Pro 128GB Sierra-Blue",
        price: "48000₽",
        image: "img/iPhone-sierra_blue.webp"
    }
    ]

    const changeContent = (index) => {
        tabsTitle.textContent = tabsOption[index].title
        tabsPrice.textContent = tabsOption[index].price

        tabsImage.setAttribute('src', tabsOption[index].image)
    }

    const changeActiveTabs = (indexClickedTab) => {
        cardButtons.forEach((tab, index) => {
            tab.classList.remove('active')
            if (index === indexClickedTab) {
                tab.classList.add('active')
            } else {
                tab.classList.remove('active')
            }
        })

        changeContent(indexClickedTab);
    }

    cardButtons.forEach((el, index, array) => {
        el.addEventListener('click', () => {
            changeActiveTabs(index)
        })
    })

    changeContent(0)
}

tabsFunc();