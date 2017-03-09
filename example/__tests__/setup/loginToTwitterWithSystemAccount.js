import helper from 'tipsi-appium-helper'

helper.extend('loginToTwitterWithSystemAccount', async (username) => {
  const { driver, platform, idFromAccessId } = helper

  const dontThrow = () => {}

  const accessToTwitterAccountsTitleId = idFromAccessId('“example” Would Like Access to Twitter Accounts')
  const accessToTwitterAccountsDeclineButtonId = idFromAccessId('Don’t Allow')
  const accessToTwitterAccountsAcceptButtonId = idFromAccessId('OK')
  const selectTwitterAccountLogInAsAnotherUserButtonId = idFromAccessId('Log in as another user')
  const selectTwitterAccountCancelButtonId = idFromAccessId('Cancel')
  const selectTwitterAccountId = idFromAccessId(`@${username}`)

  if (platform('ios')) {
    // Alert
    //
    // Title: “example” Would Like Access to Twitter Accounts
    //
    // Button: Don’t Allow
    // Button: OK
    await driver
      .waitForVisible(accessToTwitterAccountsTitleId, 30001)
      .waitForVisible(accessToTwitterAccountsDeclineButtonId, 30002)
      .waitForVisible(accessToTwitterAccountsAcceptButtonId, 30003)
      .click(accessToTwitterAccountsAcceptButtonId)
      .catch(dontThrow)

    // Action Sheet
    //
    // Buttons: @<Twitter_Username> - optional
    // Button: Log in as another user
    // Button: Cancel

    // Sign in
    await driver
      .waitForVisible(selectTwitterAccountLogInAsAnotherUserButtonId, 30004)
      .waitForVisible(selectTwitterAccountCancelButtonId, 30004)
      .waitForVisible(selectTwitterAccountId, 30005)
      .click(selectTwitterAccountId)
  }
})