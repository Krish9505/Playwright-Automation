import {test, expect} from '@playwright/test';

import { LoginPage } from '../pages/Login.js';
import { users } from '../utils/Testdata.js';
import {collectionagentpage} from '../pages/collectionagent.js';

test('collection agent', async ({page})=>
{
  const loginPage = new LoginPage(page);
  await loginPage.loginAndBranch(users.branchUser);

  const collectionAgentPage = new collectionagentpage(page);

  await collectionAgentPage.CA(users.collectionagentData);

  await page.pause();
});
