const tabBtns = document.querySelectorAll('.item_btn')
const searchInput = document.querySelector('.filters_input')
const cards = document.querySelectorAll('.main_card_item')
const filtersBtnMobile = document.querySelector('.main_filters_button')
const mobileFiltersList = document.querySelector('.filters_list-mobile')
const mobileTabBtns = document.querySelectorAll('.item_btn-mobile')

searchInput.addEventListener('input', () => {
    const value = searchInput.value.trim().toLowerCase();

    cards.forEach((item) => {
        const title = item.querySelector('.info_title').textContent.toLowerCase();

        if(title.includes(value)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
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

mobileTabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const textBtn = btn.textContent.toLowerCase().trim();

  if(textBtn === 'all') {
    cards.forEach(card => card.style.display = '');
    return;
  }

  cards.forEach((card) => {
    const infoExampleText = card.querySelector('.info_example').textContent.toLowerCase().trim();
    card.style.display = infoExampleText.includes(textBtn) ? '' : 'none';
  });
  });
});

filtersBtnMobile.addEventListener('click', () => {
  mobileFiltersList.classList.toggle('active_mobile_filters');
});

function updateTabCounts() {
  const counts = {}; 

  cards.forEach(card => {
    const category = card.querySelector('.info_example')
      .textContent.trim().toLowerCase();
    
    counts[category] = (counts[category] || 0) + 1;
  });

  const allCount = cards.length;

  tabBtns.forEach(btn => {
    const name = btn.querySelector('.btn_text').textContent.trim().toLowerCase();
    const countElement = btn.querySelector('.btn_count');

    if (name === "all") {
      countElement.textContent = allCount;
    } else {
      countElement.textContent = counts[name] || 0;
    }
  });
}

updateTabCounts();