

    exports.command = function(id,callback) {
      var _app = this.waitForElementVisible(id)
                    .pause(200)
                    .click(id);
          return(_app);

    };
