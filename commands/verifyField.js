

exports.command = function(id,text) {
  var _app = this.waitForElementVisible(id)
            .verify.containsText(id,text );
      return(_app);

};
