const page = require("../pages/Landingv2")

const Sleep = () => {
  return new Promise(resolve => setTimeout(resolve, 5000));
}

describe('Landing page tests', function(){
    beforeEach(async () => {
      // const scr = await screen();
      // console.log("test", scr);
      // scr.waitForVisible(11000);
    })

    it('Should verify all basic functionalities', async () => {
      // For demo purpose
      await Sleep();
      page.click_next()
  
    });
  });