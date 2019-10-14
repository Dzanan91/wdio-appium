const Sleep = () => {
    return new Promise(resolve => setTimeout(resolve, 5000));
  }

const firstnextBtn = () => {
    return $("//android.widget.Button[(@text='NEXT')]")
    //return $("~com.ayoba.ayoba:id/onboard_button_next")
}
const scndNextBtn = () => {
    return $("//android.widget.Button[(@text='NEXT')]")
    //return $("~com.ayoba.ayoba:id/onboard_button_next")
}
const nameField = () => {
    return $("//android.widget.EditText[(@text='Your name')]")
    //return $("#com.ayoba.ayoba:id/name");
}
const numberField = () => {
    return $("//android.widget.EditText[(@text='Your number')]")
    //return $("~com.ayoba.ayoba:id/phone_number");
}
const verifyBtn = () => {
    return $("//android.widget.Button[(@text='VERIFY')]")
    //return $("#com.ayoba.ayoba:id/button_validate");
}


const click_next = async () => {
    //On pop up first step click on Next button
    const btn1 = await firstnextBtn();
    btn1.click();

    //On pop up second step click on Next button
    
    const btn2 = await scndNextBtn();
    btn2.click();

    //Enter username
    const name = await nameField();
    name.keys("Dzanan");

    //Enter user number
    const num = await numberField();
    num.keys("123456789");
    
    //Verify changes and click on Verify button
    const btn3 = await verifyBtn();
    btn3.click();
    
}

module.exports = {
    click_next,
}
