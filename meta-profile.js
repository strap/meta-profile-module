var _ = require('lodash');

var iosRE = /(iPhone|iPad).+?OS\s+(\d+?_\d+?)/;
var androidRE = /(Android)\s+?(\d+?\.\d+?\.\d+?)/;

exports.getDevice = function (req, source) {
    var dest = _.clone(source) || {};

    var uaStr = req.headers['user-agent'];

    var deviceMatches = iosRE.exec(uaStr) || androidRE.exec(uaStr);
    deviceMatches[2] = deviceMatches[2].replace(/_/g, ".");

    dest.device = {
        device: deviceMatches[1] || "",
        version: deviceMatches[2] || ""
    };

    return dest;
};

exports.testIOS = function () {
    var testIOS = "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)";
    console.log(exports.getDevice({headers: {"user-agent": testIOS}}));
};

exports.testAndroid = function () {
    var testAnd = "Mozilla/5.0 (Linux; Android 5.0.1; Nexus 6 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36";
    console.log(exports.getDevice({headers: {"user-agent": testAnd}}));
};