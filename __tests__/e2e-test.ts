import * as nightwatch from 'nightwatch';
import * as selenium from 'nightwatch/lib/runner/selenium';

const config = require('../nightwatch.json');

describe('e2e test', () => {
    const client = nightwatch.initClient(
        config.test_settings.default
    );

    console.log(client);
    const browser = client.api();

    this.timeout(99999999);

    beforeAll(done => {
        selenium.startServer(config, () => done());
    });

    afterAll(done => {
        selenium.stopServer(config, () => done());
    });

    beforeEach(done => {
        client.start(done);
    });

    it('should be equals', (browser: any) => {
        browser
            .url('http://localhost://8000')
            .waitForElementVisible('body', 1000)
            .end();
    });
}
