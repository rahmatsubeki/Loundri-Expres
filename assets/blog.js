function toggleCard(cardId) {
  var loginCard = document.getElementById('login');
  var bannerCard = document.getElementById('banner');

  if (cardId === 'login') {
      bannerCard.style.display = 'none';
      loginCard.style.display = 'block';
  } else {
      loginCard.style.display = 'none';
      daftarCard.style.display = 'block';
  }
}
