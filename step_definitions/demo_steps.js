      const { client } = require('nightwatch-cucumber');
      const { defineSupportCode } = require('cucumber');
      const nightwatch = require('nightwatch');
      var demo = client.page.demo_demo();


      defineSupportCode(({Given, Then, When}) => {

        When(/^I can go to profile$/, () => {
          demo.clickIcon('@LoggedInNickName')
          return demo;
        });

        Then(/^I can view my profile$/, () => {
          demo.waitForElementVisible('@ProfileNotes')
          return demo;
        });

        When(/^I go to third topic$/, () => {
          demo
            .clickIcon('@ThirdTopic')
            .waitForElementNotPresent('@ThirdTopic');
          return demo;
        });

        Then(/^I can view some unic titles$/, () => {
          demo.waitForElementVisible('@ThirdTopicTitle');
          return demo;
        });

        When(/^I can loged in$/, () => {
          demo.clickIcon('@LogedOut')
            client.acceptAlert();
          return demo;
        });
        When(/^I go to second topic$/, () => {
          demo
            .clickIcon('@SecondTopic')
            .waitForElementNotPresent('@SecondTopic');
          return demo;
        });

        When(/^loged to mall$/,  () => {
          demo.navigate();
          demo._login_root();
          return demo;
        });

        Then(/^I can some notes$/,  () => {
          demo.waitForElementVisible('@SecondTopicTitle');
          return demo;
        });

        Then(/^I can view (.*?) title$/,  (title) => {
          demo.verifyField('@FirstTopicTitle',title);
          return demo;
        });

        When(/^I go to first topic$/,  () => {
          demo
              .clickIcon('@FirstTopic')
              .waitForElementVisible('@SecondTopicTitle'); // an error!!! Need delete method for success!!
          return demo;
        });

        When(/^sdsdsd logged to the site$/,  () => {
          return demo;
        });
        });