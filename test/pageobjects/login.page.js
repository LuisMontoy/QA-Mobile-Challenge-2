const Page = require('./page');

class LoginPage extends Page {

    get inputEmail () {
        return $('//android.widget.EditText[@content-desc="Username input field"]');
    }

    get inputPassword () {
        return $('//android.widget.EditText[@content-desc="Password input field"]');
    }

    get loginButton () {
        return $('//android.view.ViewGroup[@content-desc="Login button"]');
    }
   
    async login (username, password) {
        await super.mainMenu.click();
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();
