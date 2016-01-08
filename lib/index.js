// ##########################################################################
// A module that checks for all mandatory environment variables are set.
// Throws if any of them is missing
// ##########################################################################
var util = require('util');

exports.verify = function verify(mandatoryEnvVars) {
  var missingEnvVars = []
    , errMsg;

  mandatoryEnvVars.forEach(function (envVar) {
    if (undefined === process.env[envVar]) {
      missingEnvVars.push(envVar);
    }
  });

  if (missingEnvVars.length) {
    errMsg = util.format('Missing mandatory environment variables: %s', missingEnvVars.join(', '));
    throw new Error(errMsg);
  }
};
