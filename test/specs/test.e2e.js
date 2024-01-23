const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const CheckoutPage = require('../pageobjects/checkout.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('bob@example.com', '10203040')
        await expect(CheckoutPage.checkoutLabel).toBeExisting()
    })
})

