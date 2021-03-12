var AWSXRay = require('aws-xray-sdk');

module.exports = function xRayPgSequelize() {
    return AWSXRay.capturePostgres(require('pg'));
};