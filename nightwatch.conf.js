
      const seleniumServer = require('selenium-server');
      const chromedriver = require('chromedriver');
      require("babel-core/register");
      require("babel-polyfill");

      require('nightwatch-cucumber')({
        cucumberArgs: [
          '--compiler', 'js:babel-core/register',
          '--require', 'timeout.js',
          '--require', 'hooks.js',
          '--require', 'step_definitions',
          '--format', 'json:reports/json/cucumber.json',
          '--format', 'node_modules/cucumber-pretty',
          'features'],
        nightwatchOutput: true
      });


      SHORT_TIMEOUT = 1000;
      DEFAULT_TIMEOUT = 10000;
      MIDDLE_TIMEOUT = 30000;
      LONG_TIMEOUT = 60000;
      EXTRALONG_TIMEOUT = 120000;


      module.exports = {
        featureFiles: 'features',
        output_folder: 'reports',
        custom_commands_path: 'commands',
        // custom_assertions_path: 'assertions',
        page_objects_path: 'pages',
        globals_path: "globals.js",
        live_output: false,
        disable_colors: false,
        test_workers: {
          enabled: false,
          workers: 'auto'
        },


  selenium : {
    start_process : true,
    server_path : seleniumServer.path,
    log_path : "log",
    host : "127.0.0.1",
    port : 4444,
    cli_args : {
      "webdriver.chrome.driver" : chromedriver.path
    }
  },
    test_settings : {

    default : {
      launch_url : "http://localhost",
      selenium_port  : 4444,
      selenium_host  : "localhost",
      silent: true,
      end_session_on_fail: true,
      skip_testcases_on_fail: true,
      screenshots : {
        enabled : true,
        on_failure : true,
        on_error : true,
        path : "screenshots"
      },

      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ["--no-sandbox","disable-web-security", "ignore-certificate-errors",'-window-size=1920,1080']
        },
        loggingPrefs: {
          browser: "ALL",
          driver: "ALL"
        }
      }
    },

      tablet:{
        desiredCapabilities: {
          browserName: 'chrome',
          browser_version: '58.0',
          os: 'Wondows',
          os_version: '10',
          resolution: '1024x768',
          excludeSwitches: ["disable-popup-blocking"],
          chromeOptions: {
            args: ["touch-events= disabled",
              "start-maximised",
              "--use-mobile-user-agent=true",
              "--version",
              "--user-agent=Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mas OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Geko) Version/4.0.4 Mobile/7B334b Safari/531.21.10"
            ]
          }
        }
      },
    firefox: {
      launch_url: 'http://localhost:8087',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
// if I want to use different URL etc.
    integration : {
      launch_url : "http://another.url",
      globals : {
        myGlobalVar : "other value"
      },
      selenium_port  : 4444,
      selenium_host  : "localhost",
      silent: true,
      screenshots : {
        enabled : true,
        on_failure : true,
        on_error : true,
        path : "screenshots"
      },
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ["--no-sandbox","disable-web-security", "ignore-certificate-errors",'-window-size=1920,1080']
        },
        loggingPrefs: {
          browser: "ALL",
          driver: "ALL"
        }
      }
    },

    firefox : {
      screenshots : {
        enabled : true,
        path : "screenshots/chrome"
      },
      desiredCapabilities: {
        browserName: "firefox",
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true,
        log: {
          level: { "browser": "ALL" }
        }
      }
    },

    chrome: {
      screenshots : {
        enabled : true,
        on_failure : true,
        on_error : true,
        globals: {
          base_url: '',
          demo_url: '',
          admin_email: '',
          admin_password: '',
          admin_initials: '',
          unknown_email: '...',
          unknown_password: '...'
        },
        path : "screenshots/chrome"
      },
      desiredCapabilities: {
        browserName: "chrome",

        javascriptEnabled: true,
        acceptSslCerts: true,
        loggingPrefs: {
          browser: "ALL",
          driver: "ALL"
        },
        chromeOptions: {
          args: ["--no-sandbox","disable-web-security", "ignore-certificate-errors","start-fullscreen"]

        }
      }
    },
      headless: {
        launch_url: '...',
        selenium_port: 4444,
        selenium_host: '127.0.0.1',
        end_session_on_fail: true,
        skip_testcases_on_fail: true,
        globals: {
          base_url: '',
          admin_email: '...',
          admin_password: '...',
          admin_initials: '...',
          unknown_email: '...',
          unknown_password: '...'
        },
        desiredCapabilities: {
          browserName: 'chrome',
          javascriptEnabled: true,
          acceptSslCerts: true,
          loggingPrefs: {
            browser: "ALL",
            driver: "ALL"
          },
          chromeOptions: {
            args: ['incognito',"--no-sandbox","disable-web-security", "ignore-certificate-errors","--headless",'-window-size=1920,1080']
          }
        },
        selenium: {
          cli_args: {
            'webdriver.chrome.driver': chromedriver.path
          }
        },
        screenshots: {
          enabled : true,
          on_failure : true,
          on_error : true,
          path: 'screenshots/headless'
        }
      }
  }
}
