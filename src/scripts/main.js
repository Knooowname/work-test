const tabBtns = document.querySelectorAll('.item_btn')
const searchInput = document.querySelector('.filters_input')
const cards = document.querySelectorAll('.main_card_item')

searchInput.addEventListener('input', () => {
    const value = searchInput.value.trim().toLowerCase()

    cards.forEach((item) => {
        const title = item.querySelector('.info_title').textContent.toLowerCase()

        if(title.includes(value)) {
            item.style.display = ''
        } else {
            item.style.display = 'none'
        }
    })
})

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach((b) => b.classList.remove('active'));

    btn.classList.add('active');

    const textBtn = btn.querySelector('.btn_text').textContent.toLowerCase().trim();

    if (textBtn === 'all') {
      cards.forEach(card => card.style.display = '');
      return;
    }

    cards.forEach((card) => {
      const infoExampleText = card.querySelector('.info_example').textContent.toLowerCase().trim();
      card.style.display = infoExampleText.includes(textBtn) ? '' : 'none';
    });
  });
});