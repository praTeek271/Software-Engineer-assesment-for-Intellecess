# Dynamics 365 Customization Project
@Intelleccess_Project

This repository contains customizations for Dynamics 365 Customer Engagement (CRM) to address the unique requirements of XYZ Corp.

## Overview

XYZ Corp is using Dynamics 365 for managing its sales and customer service processes. The customizations implemented in this project aim to track and manage customer preferences more effectively.

## Components

### 1. JavaScript Web Resource: ValidationRules.js

- **Purpose:** Contains validation functions for email and phone number.
- **Location:** [WebResources/ValidationRules.js](WebResources/ValidationRules.js)

### 2. Account Entity Customization

- **Purpose:** Allows users to define and update customer preferences directly within the Dynamics 365 environment.
- **Location:** [Entities/AccountEntityAndForm.xml](Entities/AccountEntityAndForm.xml)

### 3. Account Form Script

- **Purpose:** Validates customer preferences and prevents saving if there are errors.
- **Location:** [Forms/AccountFormScript.js](Forms/AccountFormScript.js)

## Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/praTeek271/Software-Engineer-assesment-for-Intellecess.git
   ```

2. **Import Solution:**
   - Use the Dynamics 365 solution file (`YourSolutionUniqueName_managed.zip`) to import the customizations into your Dynamics 365 environment.

3. **Associate JavaScript Web Resource:**
   - Associate the `ValidationRules.js` web resource with the necessary forms in Dynamics 365.

4. **Configure Entity and Form:**
   - Configure the Account entity and associated forms based on the XML customization file.

5. **Deploy Changes:**
   - Deploy the changes to your Dynamics 365 environment.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Maintainer:** Prateek271 ([GitHub](https://github.com/prateek271))
