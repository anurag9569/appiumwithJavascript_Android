class HomePage
{
    get formLink(){return $('(//android.widget.TextView)[13]')}
    get typeSomething(){return $('//*[@text="Type something"]')}
    get dropDown(){return $('//*[@text="Select a value here"]')}
    get dropDownTxt(){return $('//*[@text="Appium is awesome"]')}
    get activeBtn(){return $('//*[@text="Active"]')}
    get okPopUp(){return $('//*[@text="OK"]')}
    get swipeBtn(){return $('//*[@text="Swipe"]')}
}
module.exports = new HomePage();