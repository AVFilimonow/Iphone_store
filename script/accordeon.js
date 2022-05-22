let accordeonFunc = () => {
    const chItem = document.querySelectorAll('.characteristics__item');

    chItem.forEach(item => {
        const chButton = item.querySelector('.characteristics__title')
        const chContent = item.querySelector('.characteristics__description')

        chButton.addEventListener('click', () => {
            if (chContent.classList.contains('open')) {
                //chContent.classList.remove('open');
                chContent.style.height = 0;
            } else {
                //chContent.classList.add('open');
                chContent.style.height = chContent.scrollHeight + 'px';
            }
            chContent.classList.toggle('open');
            chButton.classList.toggle('active');
        })
    })
}

accordeonFunc();