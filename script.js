const blueBoxTitle = document.querySelector('.questBlueBox h1');
const blueBoxParagraphs = document.querySelectorAll('.questBlueBox p');

const questCards = document.querySelectorAll('.questCard');

questCards.forEach(card => {
    card.addEventListener('click', () => {
        const cardIndex = Array.from(questCards).indexOf(card);

        if (cardIndex === 0) {
            blueBoxTitle.textContent = 'Что нужно, чтобы начать работу с future technologies company (ftc)?';
            blueBoxParagraphs[0].textContent = 'На сегодняшний день заработок в интернете приобрел огромную популярность.';
            blueBoxParagraphs[1].textContent = 'Один из примеров – инвестиционная компания Future Technologies Company (FTC).';
        } else if (cardIndex === 1) {
            blueBoxTitle.textContent = 'Могу ли я не заработать, инвестируя с future technologies company (ftc)?';
            blueBoxParagraphs[0].textContent = 'Связаться с нами и записаться на бесплатную юридическую консультацию вы можете по телефону.';
            blueBoxParagraphs[1].textContent = 'Вы также можете воспользоваться бесплатной юридической консультацией в режиме онлайн.';
        } else if (cardIndex === 2) {
            blueBoxTitle.textContent = 'Какая минимальная и максимальная сумма депозита?';
            blueBoxParagraphs[0].textContent = 'Минимальный размер депозита – 100 рублей.';
            blueBoxParagraphs[1].textContent = 'Максимальный размер депозита – 80 000 000 рублей.';
        }
    });
});