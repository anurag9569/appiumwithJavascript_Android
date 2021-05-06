const homepage = require("../../PageObjects/HomePage");
const commonUtilities=require("../../CommonFunctions/commonutilities")
const expect=require('chai').expect;
describe("Sample", ()=>{
    it('Test', ()=>{
       homepage.formLink.click(); 
       driver.pause();
       homepage.typeSomething.setValue("an");
       driver.pause(2000);
       homepage.dropDown.click();
       homepage.dropDownTxt.click();
       driver.pause();
       commonUtilities.scroll();
       homepage.activeBtn.click();
       homepage.okPopUp.waitForExist(2000);
       homepage.okPopUp.click();
      

    })

    it('test2', ()=>{
        homepage.swipeBtn.waitForExist({timeout:5000});
        let text=homepage.swipeBtn.getText();
        console.log(text);
        expect(text).equal("SwipeBtn");       // for assertion
        homepage.swipeBtn.click();
        driver.pause();
        commonUtilities.scrollHorizontal();

    })
})