export default {
    'Demo test typescript' : function (browser: any) {
        browser
        .url('http://localhost://8000')
        .waitForElementVisible('body', 1000)
        .end();
    }
};
