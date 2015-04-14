var assert = require('assert');
var metaProfile = require('../meta-profile');

describe('Test parse iOS User Agent String', function() {
    it('should parse iOS user agent string into device and version', function (done) {
        var testIOS = "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)";
        var actual = metaProfile.getDevice({headers: {"user-agent": testIOS}});

        var expected = { device: { device: 'iPad', version: '7.0' } };

        assert(actual.device);
        assert(actual.device.device);
        assert(actual.device.device === expected.device.device);
        assert(actual.device.version === expected.device.version);

        done();
    });
});


describe('Test parse Android User Agent String', function() {
    it('should parse Android user agent string into device and version', function (done) {
        var testAnd = "Mozilla/5.0 (Linux; Android 5.0.1; Nexus 6 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36";
        var actual = metaProfile.getDevice({headers: {"user-agent": testAnd}});

        var expected = { device: { device: 'Android', version: '5.0.1' } }

        assert(actual.device);
        assert(actual.device.device);
        assert(actual.device.device === expected.device.device);
        assert(actual.device.version === expected.device.version);

        done();
    });
});
