const screen = () => {
    return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[7]/android.view.ViewGroup");
}
    
const skip_button = () => {
    return $("~android.widget.TextView");

}

const enter_name = () => { 
    // const nameID =  driver.elementsByAccessibilityId("#com.ayoba.ayoba:id/name");
    // nameID.keys("Dzanan");

    return;
    //phoneNumberfieldID.keys("00249785")
    //verifyBtnID.click()
}


module.exports = {
    screen,
    skip_button,
    enter_name
}
