'use strict';

var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('Hello function test', () => {
  it('should return Hello', () => {
    var result = index.hello();
    expect(result).to.equal('Hello');
  });
});