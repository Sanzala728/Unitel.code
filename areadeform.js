const categoryButtons = document.querySelectorAll('.category-selection button');


const content = document.querySelector('.content');


categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    
    categoryButtons.forEach((button) => {
      button.classList.remove('ativo');
    });

    button.classList.add('ativo');

    
    const category = button.dataset.category;
    if (category === 'Calculo Diferencial Integral') {
      content.innerHTML = `
       
      `;
    } else if (category === 'FÍSICA') {
      content.innerHTML = `
        
      `;
    } else if (category === 'Eletronica Digital') {
      content.innerHTML = `
       
      `;
    }
  });

  button.querySelector('img').addEventListener('click', () => {
   
    button.classList.add('ativo');

    categoryButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove('ativo');
      }
    });

  
    const category = button.dataset.category;
    if (category === 'Calculo Diferencial e Integral') {
      content.innerHTML = `
        
      `;
    } else if (category === 'Física') {
      content.innerHTML = `
       
      `;
    } else if (category === 'Eletronica Digital') {
      content.innerHTML = `
       
      `;
    }
  });
});