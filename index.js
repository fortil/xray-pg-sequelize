var AWSXRay = require('aws-xray-sdk');
var capturePostgres = require('aws-xray-sdk-postgres');

module.exports = function xRayPgSequelize() {
    return capturePostgres(require('pg'));
};