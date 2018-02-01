'use strict';

var chromedriver = require('chromedriver');

module.exports = {
    before: function (done) {
        done();
    },

    after: function (done) {
        chromedriver.stop();
        setTimeout(() => {chromedriver.stop(); done();},0)
        ;
        done();
    },

    waitForConditionPollInterval: 300,
    waitForConditionTimeout: 10000,
    throwOnMultipleElementsReturned: false,

};
