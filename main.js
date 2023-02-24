'use strict';

const interRes = require('./interactive.js');
const requiredLength = 3;
const message = 'Program started with values (a,b,c):';

if (interRes.length !== requiredLength) {
    const nonInterRes = require('./non-interactive.js');
    console.log(`${message} ${nonInterRes}`);
    return solve(nonInterRes);
}

console.log(`${message} ${interRes}`);
solve(interRes)