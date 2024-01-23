const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    get mainMenu() {
        return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');
    }

    get loginItem() {
        return $('//android.view.ViewGroup[@content-desc="menu item log in"]')
    }
}
