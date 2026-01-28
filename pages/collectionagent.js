exports.collectionagentpage = class collectionagentpage
{
  constructor(page)
  {
    this.page=page;
    this.collectionagent=page.getByText('Collection Agent');

    this.Amount=page.locator('#amountReceived');
    this.selectagentdropdown=page.getByText('Select collection agent');
    //this.selectagent=page.getByLabel('testin');
    this.selectpaymode=page.getByText('Select payment mode');
    //this.cardpage.getByLabel('Debit Card', { exact: true });
    // Correct id locator syntax: use CSS '#cardNumber' (previous string was malformed)
    // this.cardnumber = page.locator('#cardNumber');
    // this.cardexpiry = page.locator('#cardExpiry');
    this.selectbankdd=page.locator('//span[text()="Select bank"]');
    //this.selectproductdropdown=page.getByText('Select product');
    this.selectproductdropdown=page.locator('//button[@role="combobox" and contains(.., "Select product")]');
    this.submitbutton=page.getByRole('button', { name: 'Submit' });
  }

  async CA({Amount,paymode,selectagent,cardnumber,cardexpiry, selectproduct,bankname})
  {
    await this.collectionagent.click();
  
    

    await this.Amount.fill(Amount);
    await this.selectagentdropdown.click();
    await this.page.waitForTimeout(500);
    await this.page.getByText(selectagent).click();
    await this.selectpaymode.click();
    await this.page.waitForTimeout(500);
    await this.page.getByText(paymode).click();

    // await this.cardnumber.fill(cardnumber);
    // await this.cardexpiry.fill(cardexpiry);

    await this.selectbankdd.click();
    await this.page.waitForTimeout(500);
    await this.page.locator(`//span[text()="${bankname}"]`).click();
    await this.selectproductdropdown.click();
    await this.page.waitForTimeout(500);
    await this.page.getByText(selectproduct).click();

   
    await this.submitbutton.click();
  }
}
