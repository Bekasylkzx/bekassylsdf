document.querySelector('.burger').addEventListener('click',function(){
    document.querySelector('nav').classList.toggle('active');
      document.querySelector('.burger').classList.toggle('burger-active');
  
  });
  
  const cartIcon = document.querySelector('.korzina');
    const cartPopup = document.querySelector('.cart-popup');
  
    cartIcon.addEventListener('click', () => {
      cartPopup.classList.toggle('hidden');
    });
  
    document.querySelector('.delete-icon').addEventListener('click', () => {
      document.querySelector('.cart-content').innerHTML = '<p>Your cart is empty.</p>';
    });