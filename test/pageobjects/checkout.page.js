const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get checkoutLabel () {
        return $('//android.widget.TextView[@text="Checkout"]');
    }
}

module.exports = new CheckoutPage();
