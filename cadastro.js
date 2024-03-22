const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (!username || !email || !password || !confirmPassword) {
    alert('Preencha todos os espaços');
    return;
  }

  if (password !== confirmPassword) {
    alert('Password errada');
    return;
  }
usernameInput.addEventListener('focus', () => {
    document.querySelector('.container').classList.add('active');
  });
  

    if (!usernameInput.value) {
      document.querySelector('.container').classList.remove('active');
    }
  });
  
  emailInput.addEventListener('focus', () => {
    document.querySelector('.container').classList.add('active');
  });
  
  emailInput.addEventListener('blur', () => {
    
    if (!emailInput.value) {
      document.querySelector('.container').classList.remove('active');
    }
  });
  
  passwordInput.addEventListener('focus', () => {
    
    document.querySelector('.container').classList.add('active');
  });
  
  
  passwordInput.addEventListener('blur', () => {

    if (!passwordInput.value) {
      document.querySelector('.container').classList.remove('active');
    }
  });
  
 
  confirmPasswordInput.addEventListener('focus', () => {
   
    document.querySelector('.container').classList.add('active');
  });
  
  
  confirmPasswordInput.addEventListener('blur', () => {
    
    if (!confirmPasswordInput.value) {
      document.querySelector('.container').classList.remove('active');
    }
  });