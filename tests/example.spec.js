// @ts-check
const { test, expect } = require('@playwright/test');



test(' product test', async ({ page }) => {

  await page.goto('https://grid-visuals.netlify.app/');

  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.dismiss();
  });

  //number of divs in the grid
  const divs = page.locator('div > div');
  await expect(divs).toHaveCount(19);


  const divContainers = page.locator('.container>div');
  await expect(divContainers).toHaveCount(6);
  await expect(divContainers).toHaveText(['1', '2', '3', '4', '5', '6']);

  // 3 is after 2
  await expect(page.locator('.container>div:right-of(.container>div:has-text("2"))').first()).toHaveText('3');

// numbers are in serial 
  const Containerlocator =  page.getByText('1 2 3 4 5 6');
  await expect(Containerlocator).toHaveCSS('display', 'grid');
  await expect(Containerlocator).toHaveCSS('place-content', 'normal');

  // place content toggle between start and end
  const startEndButton =   page.getByText('Start or end')
  await startEndButton.click()
  await expect(Containerlocator).toHaveCSS('place-content', 'normal end');//goto end
  await startEndButton.click()
  await expect(Containerlocator).toHaveCSS('place-content', 'normal start');//goto start

  //content toggle between top and bottom
  const TopBottomButton =   page.getByText('Top or Bottom')
  await TopBottomButton.click()
  await expect(Containerlocator).toHaveCSS('place-content', 'end start'); // bottom
  await TopBottomButton.click()
  await expect(Containerlocator).toHaveCSS('place-content', 'start');//top

  const spaceBetweenButton =   page.getByText('Space Between')
  await spaceBetweenButton.click()
  await expect(Containerlocator).toHaveCSS('place-content', 'start space-between'); 
  await spaceBetweenButton.click()

  const spaceEvenlyButton =   page.getByText('Space evenly')
  await spaceEvenlyButton.click()
  await expect(Containerlocator).toHaveCSS('place-content', 'start space-evenly'); 
  await spaceEvenlyButton.click()
  await spaceEvenlyButton.click()
  await spaceEvenlyButton.click()
  await expect(Containerlocator).toHaveCSS('place-content', 'start space-evenly'); 


  const JustifyItemsEnd =  page.getByText('End').nth(1)
  await JustifyItemsEnd.click()
  await expect(Containerlocator).toHaveCSS('justify-items', 'end'); 

  
  const JustifyItemsCenter =  page.getByText('Center').nth(0)
  await JustifyItemsCenter.click()
  await expect(Containerlocator).toHaveCSS('justify-items', 'center'); 
  
  const JustifyItemsStart =  page.getByText('Start').nth(1)
  await JustifyItemsStart.click()
  await expect(Containerlocator).toHaveCSS('justify-items', 'start'); 
  
  const AlignItemsEnd =  page.getByText('End').nth(2)
  await AlignItemsEnd.click()
  await expect(Containerlocator).toHaveCSS('align-items', 'end'); 

  
  const AlignItemsCenter =  page.getByText('Center').nth(1)
  await AlignItemsCenter.click()
  await expect(Containerlocator).toHaveCSS('align-items', 'center'); 
  
  const AlignItemsStart =  page.getByText('Start').nth(2)
  await AlignItemsStart.click()
  await expect(Containerlocator).toHaveCSS('align-items', 'start'); 
  

  const Reset =  page.getByText('Reset')
  await Reset.click()
  await expect(Containerlocator).toHaveCSS('align-items', 'normal'); 
  await expect(Containerlocator).toHaveCSS('justify-items', 'normal'); 
  await expect(Containerlocator).toHaveCSS('place-items', 'normal'); 
  





 

});

