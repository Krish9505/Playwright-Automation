import {users} from '../utils/Testdata.js';
const { expect } = require('allure-playwright');

exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page;
    this.username_field = page.locator('#username');
    this.password_field = page.locator('#password');
    this.submit_button = page.locator('//button[@id="kc-login"]');
  }

  #URLLOGIN
  async url(){
    await this.page.goto('/');

    await this.page.waitForLoadState('load');

    const pageurl=this.page.url();
    console.log('URL =',pageurl);

    // await expect(this.page).toHaveURL('https://cashiering-keycloak.b2pfintech.dev');
  }

  #USERNAMEPASSWORD
  async login(username, password)
  {
    // const username = process.env.APP_USERNAME;
    // const password = process.env.APP_PASSWORD;

    // console.log("APP_USERNAME:", username); // Debug statement
    // console.log("APP_PASSWORD:", password); // Debug statement

    console.log("USERNAME:", username);
    console.log("PASSWORD:", password);

    if (!username || !password) {
      throw new Error('Username and password must be provided');
    }


    await this.username_field.fill(username);
    await this.password_field.fill(password);
    await this.submit_button.click();

    const pagetitle = await this.page.title();
    console.log('page title is ', pagetitle);
  }

  #BRANCHDETAILS
  async branch(branchName)
  {
    await this.page.locator('body').click();
    //await this.page.locator('//button[@role="combobox"]').click();
    await this.page.waitForTimeout(5000);

    const optionscombobox=await this.page.$$('//div[@class="flex items-center gap-3"]');

    for (const option of optionscombobox) {
      const text=await option.textContent();
      console.log('text');

      // if(text.includes("Port Louis")){
      //   await option.click();
      //   // // break;
      //   // }
    }

    // // Check if the locator is visible
    // // await expect(comboboxLocator).toBeVisible();

    // // // Check if the locator is enabled
    // // await expect.soft(comboboxLocator).toBeDisabled();

    await this.page.locator(`//span[contains(text(),"${branchName}")]`).click();

    await this.page.getByRole('button', { name: 'Submit' }).click();

    await this.page.getByText('Make Repayment').click();
  }

  async loginAndBranch({username, password, branch })
  {

    await this.url();
    await this.login(username, password);
    // OPTIONAL: replace with waitForSelector for something that appears after login
    await this.page.waitForTimeout(2000);
    await this.branch(branch);

  }

}