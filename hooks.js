

      const chromedriver = require('chromedriver');
      const { client } = require('nightwatch-cucumber');
      const { defineSupportCode } = require('cucumber');


      defineSupportCode(({ After }) => {
        After(() => new Promise(resolve => {
          chromedriver.stop();
          setTimeout(() => {
            client.deleteCookies().refresh()
            resolve();
          }, 500);
        }));
      });




