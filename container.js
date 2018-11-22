const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

const simpleDependencies = [['_', 'lodash']];

simpleDependencies.forEach(function(val) {
  container.register(val[0], function() {
    require(val[1]);
  });
}); //for each var, register [var[0], var[1]]

//const _ = require('lodash');

container.load(path.join(__dirname, '/controllers'));
container.load(path.join(__dirname, '/helpers'));

container.register('conatiner', function() {
  return container;
});

module.exports = container;
