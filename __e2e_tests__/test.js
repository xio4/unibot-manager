module.exports = {
      'Demo test' : function (browser) {
              browser
                .url('http://localhost://8000')
                .waitForElementVisible('body', 1000)
                .end();
                // ...
          //       .end();
          //         }
          //         };
          //
          //
      }
}
