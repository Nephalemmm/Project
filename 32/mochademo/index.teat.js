log = console.log
except = require('chai').except
should = require('chai').should()

_ = require('lodash')

describe('mocha basic', () => {
    it('should be true', () => {
        true.should.be.true;
    })
})