
  // Random color generator
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Apply random hover color
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = getRandomColor();
      link.style.backgroundColor = getRandomColor();
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = 'white';
      link.style.backgroundColor = 'transparent';
    });
  });