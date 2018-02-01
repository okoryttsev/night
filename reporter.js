var reporter = require('cucumber-html-reporter');
var timestamp = require('time-stamp');

console.log(timestamp('YYYY_MM_DD_HH_mm_ss'));

var foundationOptions = {
  theme: 'bootstrap',
  jsonDir: './reports/json/',
  ignoreBadJsonFile: true,
  output: './reports/report.html',
  reportSuiteAsScenarios: false,
  launchReport: false,
  metadata: {
    "browser": "Chrome 62.0.3202.75"
  },
};

reporter.generate(foundationOptions);
