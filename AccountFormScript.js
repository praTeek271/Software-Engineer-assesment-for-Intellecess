class CustomerPreferences {
    constructor(preferences) {
      this.preferences = preferences;
    }
   
    validate() {
      
      const rules = [
        {
          condition: this.preferences.emailPreferences && !isValidEmail(this.preferences.email),
          message: `Invalid email address: ${this.preferences.email}`
        },
        {
          condition: this.preferences.notificationPreferences && !isValidPhone(this.preferences.phoneNumber),
          message: `Invalid phone number: ${this.preferences.phoneNumber}. Must be a 10-digit number.`
        },
        
      ];
  
      
      const errors = rules
        .filter(rule => rule.condition)
        .map(rule => rule.message);
  
      
      return {
        isValid: errors.length === 0,
        errors: errors
      };
    }
  }
  
  
  function onSave(executionContext) {
    const formContext = executionContext.getFormContext();
  
    
    const emailPreferences = formContext.getAttribute("new_emailpreferences").getValue();
    const email = formContext.getAttribute("emailaddress1").getValue();
    const notificationPreferences = formContext.getAttribute("new_notificationpreferences").getValue();
    const phoneNumber = formContext.getAttribute("new_phonenumber").getValue();
  
    
    const customerPreferencesData = {
      emailPreferences: emailPreferences,
      email: email,
      notificationPreferences: notificationPreferences,
      phoneNumber: phoneNumber
    };
  
    const customerPreferences = new CustomerPreferences(customerPreferencesData);
    const validationResult = customerPreferences.validate();
  
    if (validationResult.isValid) {
      
      formContext.data.entity.save();
    } else {
      
      alert("Validation errors:\n" + validationResult.errors.join("\n"));
      executionContext.getEventArgs().preventDefault();
    }
  }
  