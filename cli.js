#!/usr/bin/env node

const minimist = require('minimist');
const pkg = require('.');

const options = {
  alias: { json: 'j', cow: 'f' },
};
const argv = minimist(process.argv.slice(2), options);

console.log(pkg(argv));
