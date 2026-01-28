import {test, expect} from '@playwright/test';
require('dotenv').config({ path: '../utils/.env' });

import { LoginPage } from '../pages/Login.js' ;
import {users} from '../utils/Testdata.js';
import{dailycashieringpage} from '../pages/Dailycashiering.js';

test('Daily cashiering',async({page})=>
{
  const loginPage=new LoginPage(page);
  await loginPage.loginAndBranch(users.branchUser);

  const Dailycashieringpage= new dailycashieringpage(page);

  await Dailycashieringpage.DC(users.DailycashieringData);


  await page.pause();
});
