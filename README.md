# node-verify-env

Small utility module to verify that all required environment variables are set.

## How to use

At your application startup, invoke this module passing it a list of mandatory
environment variables for your application. The module throws an exception if
any of them missing.

```
var verifyEnv = require('verifyEnv')
  , mandatoryEnvVars;

mandatoryEnvVars = [
  'MYAPP_DB_CONN_STRING',
  'MYAPP_LOG_FILE_PATH'
];

verifyEnv.verify(mandatoryEnvVars);
// --- the program crashes here if any mandatory env var mising --- //

// --- continue initialization after this point --- //
```

The invocation should be made at the soonest possible point in your program
execution, allowing it to crash the program in case of a misconfigured
environment.


## Changelog

* v0.0.1 Initial release
