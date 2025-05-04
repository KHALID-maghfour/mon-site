document.querySelectorAll('.flip-box').forEach(box => {
    box.addEventListener('click', () => {
      const paragraph = box.querySelector('.texte-paragraphe');
      const isVisible = paragraph.style.display === 'block';
      // Toggle affichage
      paragraph.style.display = isVisible ? 'none' : 'block';
    });
  });
  