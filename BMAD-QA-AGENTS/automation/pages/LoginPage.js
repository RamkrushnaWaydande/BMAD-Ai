const { BasePage } = require('./BasePage');

/**
 * LoginPage - Page object for the login page.
 * Update selectors to match your application.
 */
class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    // Locators - update these to match your app
    this.emailInput = page.getByTestId('email-input');
    this.passwordInput = page.getByTestId('password-input');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByTestId('error-message');
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password' });
    this.registerLink = page.getByRole('link', { name: 'Register' });
  }

  /** Navigate to login page */
  async goto() {
    await super.goto('/login');
  }

  /**
   * Perform login action
   * @param {string} email
   * @param {string} password
   */
  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /** Get error message text */
  async getErrorText() {
    return await this.getText(this.errorMessage);
  }

  /** Check if error message is visible */
  async isErrorVisible() {
    return await this.isVisible(this.errorMessage);
  }
}

module.exports = { LoginPage };
