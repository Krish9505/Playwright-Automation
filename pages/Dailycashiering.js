const { expect } = require('@playwright/test');
const { users } = require('../utils/Testdata');

exports.dailycashieringpage = class dailycashieringpage
{
  constructor(page)
  {
    this.page=page;

    this.Dailycashiering=page.getByText('Daily Cashiering');

    this.NTCID=page.locator('//input[@maxlength="14"]');

    this.searchbutton=page.getByText('Search');



    this.Agreementnumber=page.getByRole('row', { name: 'CFA NA ${users.DailycashieringData.Agreementnumber} Active 0' }).getByRole('textbox');
    //this.Amountallocated=page.locator('has-text("000058530")').getByRole('textbox');
    this.Amountrecieved= page.locator('//input[@id="totalAmountReceived"]');
    this.selectpaymode=page.getByText('Select payment mode');
    this.sourcefund=page.locator('#sourceOfFund');
    this.submitbutton=page.getByRole('button', { name: 'Submit' });


  }



  async DC({ NTCID, Amount, Amountrecieved,paymode,sourcefund})

  {
    await this.Dailycashiering.click();
    // await expect(this.Dailycashiering).toBeVisible();
    await this.NTCID.fill(NTCID);
    await this.searchbutton.click();
    await this.Agreementnumber.fill(Amount);


    const element = this.page.getByRole('button', { name: 'Submit' });
    await element.scrollIntoViewIfNeeded();

    await element.click();
    await this.Amountrecieved.fill(Amountrecieved);
    await this.selectpaymode.click();
    await this.page.getByLabel(paymode).click();
    await this.sourcefund.fill(sourcefund);
    await this.submitbutton.click();

  }

}
