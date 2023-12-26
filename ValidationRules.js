function isValidEmail(email) {
    // For simplicity, this is just a basic example
    return /\S+@\S+\.\S+/.test(email);
  }
  
  function isValidPhone(phoneNumber) {
    // For simplicity, this is just a basic example
    return /^\d{10}$/.test(phoneNumber);
  }
  