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
