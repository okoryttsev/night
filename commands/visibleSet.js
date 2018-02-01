

    exports.command = function(id,value) {
      var _app = this.waitForElementVisible(id)
                      .setValue(id,value);
            return(_app);

    };
