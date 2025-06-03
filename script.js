// Optional: a small interactive effect to highlight cards on keyboard focus
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('focus', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = '0 12px 25px rgba(255, 111, 97, 0.4)';
  });
  card.addEventListener('blur', () => {
    card.style.transform = '';
    card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
  });
});
// Photo gallery cycling on click
document.querySelectorAll('.gallery-grid img').forEach(img => {
  // Parse alternatives URLs from data attribute
  const altData = img.getAttribute('data-alternatives');
  if (!altData) return;
  const alternatives = JSON.parse(altData);
  // Initialize index for which photo currently shown
  img.dataset.currentIndex = 0;
  img.style.cursor = 'pointer';
   img.addEventListener('click', () => {
    let currentIndex = parseInt(img.dataset.currentIndex);
    currentIndex = (currentIndex + 1) % (alternatives.length + 1);
    if (currentIndex === 0) {
      // Show original src
      img.src = img.getAttribute('src-original') || img.src;
    } else {
      img.src = alternatives[currentIndex - 1];
    }
    img.dataset.currentIndex = currentIndex;
  });
  // Store original src so we can revert back
  if (!img.hasAttribute('src-original'))
    img.setAttribute('src-original', img.src);
});