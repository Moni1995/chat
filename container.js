const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

const simpleDependencies = [['_', 'lodash'], [''], []];

simpleDependencies.map(val => {
  container.register(val[0], () => require(val[1]));
});

const _ = require('lodash');