const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function (e) {
  // Remove all non-numeric characters
  let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  
  // Reconstruct the phone number format
  e.target.value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? '-' + x[3] : ''}`;
});