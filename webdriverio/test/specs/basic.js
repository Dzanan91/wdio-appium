const { screen, skip_button, enter_name}  = require("../pages/LandingPage")

const Sleep = () => {
  return new Promise(resolve => setTimeout(resolve, 7000));
}

describe('Landing page tests', function(){
    beforeEach(async () => {
      // const scr = await screen();
      // console.log("test", scr);
      // scr.waitForVisible(11000);
    })

    it('Should verify all basic functionalities', async () =>{
      // For demo purpose
      await Sleep();
      const scr = await screen();
      console.log("here", scr);
      scr.click();
      await Sleep();
      // enter_name();
    });
  });